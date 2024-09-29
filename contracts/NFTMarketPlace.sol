// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NFTMarketPlace is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;
    Counters.Counter private _itemsSoldCounter;

    uint256 public listingPrice = 0.0015 ether;
    address payable public owner;

    mapping(uint256 => MarketItem) private _idToMarketItem;

    struct MarketItem {
        uint256 tokenId;
        address payable seller;
        address payable owner;
        uint256 price;
        bool sold;
    }

    event MarketItemCreated(
        uint256 indexed tokenId,
        address seller,
        address owner,
        uint256 price,
        bool sold
    );

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the marketplace owner can change the listing price");
        _;
    }

    constructor() ERC721("NFTMarketPlace", "NFTM") {
        owner = payable(msg.sender);
    }

    function updateListingPrice(uint256 _listingPrice) public payable onlyOwner {
        listingPrice = _listingPrice;
    }

    function getListingPrice() public view returns (uint256) {
        return listingPrice;
    }

    function createToken(string memory tokenURI, uint256 price) public payable returns (uint256) {
        _tokenIdCounter.increment();
        uint256 newTokenId = _tokenIdCounter.current();
        _mint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        createMarketItem(newTokenId, price);
        return newTokenId;
    }

    function createMarketItem(uint256 tokenId, uint256 price) private {
        require(price > 0, "Price must be greater than 0");
        require(msg.value == listingPrice, "Price must be equal to listing price");

        _idToMarketItem[tokenId] = MarketItem(
            tokenId,
            payable(msg.sender),
            payable(address(this)),
            price,
            false
        );

        _transfer(msg.sender, address(this), tokenId);
        emit MarketItemCreated(tokenId, msg.sender, address(this), price, false);
    }

    function resellToken(uint256 tokenId, uint256 price) public payable {
        require(_idToMarketItem[tokenId].owner == msg.sender, "Only the owner can resell");
        require(msg.value == listingPrice, "Price must be equal to listing price");

        _idToMarketItem[tokenId].sold = false;
        _idToMarketItem[tokenId].price = price;
        _idToMarketItem[tokenId].seller = payable(msg.sender);
        _idToMarketItem[tokenId].owner = payable(address(this));

        _itemsSoldCounter.decrement();
        _transfer(msg.sender, address(this), tokenId);
    }

    function createMarketSale(uint256 tokenId) public payable {
        uint256 price = _idToMarketItem[tokenId].price;
        require(msg.value == price, "Please send the correct amount");

        _idToMarketItem[tokenId].owner = payable(msg.sender);
        _idToMarketItem[tokenId].sold = true;
        _idToMarketItem[tokenId].owner = payable(address(0));

        _itemsSoldCounter.increment();

        _transfer(address(this), msg.sender, tokenId);

        payable(owner).transfer(listingPrice);
        payable(_idToMarketItem[tokenId].seller).transfer(msg.value - listingPrice);
    }

    function fetchMarketItems() public view returns (MarketItem[] memory) {
        uint256 itemCount = _tokenIdCounter.current() - _itemsSoldCounter.current();
        MarketItem[] memory items = new MarketItem[](itemCount);

        uint256 currentIndex = 0;
        for (uint256 i = 1; i <= _tokenIdCounter.current(); i++) {
            if (_idToMarketItem[i].owner == address(this)) {
                MarketItem storage currentItem = _idToMarketItem[i];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }

        return items;
    }

    function fetchMyNFTs() public view returns (MarketItem[] memory) {
        uint256 totalCount = _tokenIdCounter.current();
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        for (uint256 i = 1; i <= totalCount; i++) {
            if (_idToMarketItem[i].owner == msg.sender) {
                itemCount += 1;
            }
        }

        MarketItem[] memory items = new MarketItem[](itemCount);
        for (uint256 i = 1; i <= totalCount; i++) {
            if (_idToMarketItem[i].owner == msg.sender) {
                MarketItem storage currentItem = _idToMarketItem[i];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }

        return items;
    }

    function fetchItemsListed() public view returns (MarketItem[] memory) {
        uint256 totalCount = _tokenIdCounter.current();
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        for (uint256 i = 1; i <= totalCount; i++) {
            if (_idToMarketItem[i].seller == msg.sender) {
                itemCount += 1;
            }
        }

        MarketItem[] memory items = new MarketItem[](itemCount);
        for (uint256 i = 1; i <= totalCount; i++) {
            if (_idToMarketItem[i].seller == msg.sender) {
                MarketItem storage currentItem = _idToMarketItem[i];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }

        return items;
    }
}
