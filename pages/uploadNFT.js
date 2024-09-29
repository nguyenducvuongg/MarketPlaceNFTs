import React, { useState,useEffect,useContext } from 'react';
import styles from '../styles/uploadNFT.module.css';
import { UploadNFTPage } from '../uploadNFT/UpLoadNftindex';
import { NFTMarketPlaceContext } from '../Context/NFTMarketPlaceContext';

const UploadNFT = () => {

  const {uploadToIPFS,createNFT} = useContext(NFTMarketPlaceContext);

  return (
    <div className={styles.uploadNFT}>
      <div className={styles.uploadNFT_box}>
        <div className={styles.uploadNFT_box_heading}>
          <h1>Create NFT</h1>
          <p>you can create your own NFT</p>
        </div>
        <div className={styles.uploadNFT_box_title}>
          <h2>img, name, description,video</h2>
          <p>files types supported png, jpg, jpeg</p>
        </div>
        <div className={styles.uploadNFT_box_form}>
          <UploadNFTPage uploadToIPFS={uploadToIPFS} createNFT={createNFT}/>
        </div>
      </div>
    </div>
  );
};

export default UploadNFT;
