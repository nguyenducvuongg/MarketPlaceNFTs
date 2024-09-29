import React, { useEffect, useState, useContext } from 'react';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';
import Router from 'next/router';
import { NFTMarketPlaceAddress, NFTMarketPlaceABI } from './Constants';
import axios from 'axios';
import { create as ipfsHttpClient } from 'ipfs-http-client';
import { useTranslation } from 'react-i18next';

// const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0');

const projectId = '3e65354b8c45499199d8f34371e55f23';
const projectSecret = 'a5A8Yf3i2NsbURwrIHaC7dCLowe1zAU13VYDiwRHHlTf6gic0GMFEQ';
const auth = `Basic ${Buffer.from(`${projectId}:${projectSecret}`).toString('base64')}`;
const subDomain ='https://nguyenducvuong-nfr-marketplace.infura-ipfs.io';

const client = ipfsHttpClient({
    host: 'ipfs-infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
        authorization: auth,
    }
});

/**
 * Fetches the NFT marketplace contract instance with the given signer or provider.
 * @param {ethers.providers.Provider|ethers.providers.Signer} signerOrProvider - The signer or provider to use for the contract instance.
 * @returns {ethers.Contract} - The NFT marketplace contract instance.
 */
const fetchContract = (signerOrProvider) => new ethers.Contract(NFTMarketPlaceAddress, NFTMarketPlaceABI, signerOrProvider);

/**
 * Connects to the Ethereum network and returns the NFT marketplace contract instance.
 * @returns {Promise<ethers.Contract>} - The NFT marketplace contract instance.
 */
const connectingWithSmartContract = async () => {
    try {
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchContract(signer);
        return contract;
    } catch (error) {
        console.error('Error connecting to smart contract:', error);
        throw error;
    }
};

export const NFTMarketPlaceContext = React.createContext();

export const NFTMarketPlaceProvider = ({ children }) => {
    const { t } = useTranslation();
    const titleData = `${t('text')}`;
    const [currentAccount, setCurrentAccount] = useState('');

    /**
     * Checks if a wallet is connected and sets the current account.
     */
    const checkIfWalletIsConnected = async () => {
        try {
            if (!window.ethereum) {
                console.error('Please install MetaMask');
                return;
            }
            const accounts = await window.ethereum.request({ method: "eth_accounts" });
            if (accounts.length) {
                setCurrentAccount(accounts[0]);
                console.log('Connected wallet address:', accounts[0]); // Log the connected wallet address
            } else {
                console.error('No accounts found');
            }
        } catch (error) {
            console.error('Error checking if wallet is connected:', error);
        }
    };

    useEffect(() => {
        checkIfWalletIsConnected();
    }, []);

    /**
     * Connects the user's wallet and sets the current account.
     */
    const connectWallet = async () => {
        try {
            if(!window.ethereum) return console.log("Please install MetaMask");
            const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
            setCurrentAccount(accounts[0]);
            console.log('Connected wallet address:', accounts[0]); // Log the connected wallet address
            // window.location.reload();
        } catch (error) {
            console.log("Error connecting wallet:", error);
        }
    }

    /**
     * Uploads a file to IPFS and returns the URL.
     * @param {File} file - The file to upload.
     * @returns {Promise<string>} - The IPFS URL of the uploaded file.
     */
    const uploadToIPFS = async (file) => {
        try {
            const added = await client.add({content: file});
            const url = `${subDomain}/ipfs/${added.path}`; 
            return url;
        } catch (error) {
            console.log("Error uploading to IPFS:", error);
        }
    }

    /**
     * Creates a new NFT and lists it for sale on the marketplace.
     * @param {Object} formInput - The form input data for the NFT.
     * @param {string} fileUrl - The IPFS URL of the NFT image.
     * @param {Router} router - The Next.js router instance.
     */
    const createNFT = async (name, description, price,image, router) => {
        
        if(!name || !description || !price || !image) return console.log("Data is missing");
        const data = JSON.stringify({
            name,
            description,
            image
        });
        try {
            const added = await client.add(data);
            const url = `https://ipfs-infura.io/ipfs/${added.path}`;
            await createSale(url, price);
        } catch (error) {
            console.log("Error creating NFT:", error);
        }
    }

    /**
     * Creates a new sale for an NFT on the marketplace.
     * @param {string} url - The IPFS URL of the NFT metadata.
     * @param {string} formInputPrice - The price of the NFT.
     * @param {boolean} isReselling - Whether the NFT is being resold.
     * @param {number} id - The ID of the NFT being resold.
     */
    const createSale = async (url, formInputPrice, isReselling, id) => {
        try {
            const price = ethers.utils.parseUnits(formInputPrice, "ether");
            const contract = await connectingWithSmartContract();
            const listingPrice = await contract.getListingPrice();
            const transaction = !isReselling ? await contract.createToken(url, price,{
                value: listingPrice.toString(),
            }) : await contract.resellToken(id, price, {
                value: listingPrice.toString(),
            });
            await transaction.wait();
            console.log(transaction)
        } catch (error) {
            console.log("Error creating sale:", error);
        }
    }

    /**
     * Fetches all the NFTs listed on the marketplace.
     * @returns {Promise<Object[]>} - An array of NFT objects.
     */
    const fetchNFTs = async () => {
        try {
            const provider = new ethers.providers.JsonRpcProvider();
            const contract = fetchContract(provider);

            const data = await contract.fetchMarketItems();

            const items = await Promise.all(
                data.map(async ({ tokenId, seller, owner, price: unformattedPrice })=>{
                    const tokenURI = await contract.tokenURI(tokenId);

                    const {
                        data : { name, description, image },
                    } = await axios.get(tokenURI);
                    const price = ethers.utils.formatUnits(unformattedPrice.toString(), "ether");

                    return {
                        price,
                        tokenId: tokenId.toNumber(),
                        seller,
                        owner,
                        image,
                        name,
                        description,
                        tokenURI
                    }
                })
            );

            return items;
        } catch (error) {
            console.log("Error fetching NFTs:", error);
        }
    }

    /**
     * Fetches the NFTs owned by the current user or the NFTs listed for sale by the current user.
     * @param {string} type - The type of NFTs to fetch ('fetchItemsListed' or 'fetchMyNFTs').
     * @returns {Promise<Object[]>} - An array of NFT objects.
     */
    const fetchMyNFTsOrListedNFTs = async (type) => {
        try {
            const contract = await connectingWithSmartContract();
            const data = type === "fetchItemsListed" ? await contract.fetchItemsListed() : await contract.fetchMyNFTs();
            const items = await Promise.all(
                data.map(async({tokenId,seller,owner, price: unformattedPrice})=>{
                    const tokenURI = await contract.tokenURI(tokenId);
                    const {
                        data: { name, description, image },
                    } = await axios.get(tokenURI);
                    const price = ethers.utils.formatUnits(unformattedPrice.toString(), "ether");
                    return {
                        price,
                        tokenId: tokenId.toNumber(),
                        seller,
                        owner,
                        image,
                        name,
                        description,
                        tokenURI
                    }
                })
            )
            return items;
        } catch (error) {
            console.log("Error fetching NFTs:", error);
        }
    }

    /**
     * Purchases an NFT from the marketplace.
     * @param {Object} nft - The NFT to purchase.
     */
    const buyNFT = async (nft) => {
        try {
            const contract = await connectingWithSmartContract();
            const price = ethers.utils.parseUnits(nft.price.toString(), "ether");
            const transaction =await contract.createMarketSale(nft.tokenId, {
                value: price,
            })
            await transaction.wait();
        } catch (error) {
            console.log("Error buying NFT:", error);
        }
    }

    return (
        <NFTMarketPlaceContext.Provider value={{
            titleData,
            currentAccount,
            checkIfWalletIsConnected,
            connectWallet,
            uploadToIPFS,
            createNFT,
            fetchNFTs,
            fetchMyNFTsOrListedNFTs,
            buyNFT
        }}>
            {children}
        </NFTMarketPlaceContext.Provider>
    );
};
