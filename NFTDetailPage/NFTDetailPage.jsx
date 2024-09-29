import React from 'react';
import styles from './NFTDetailPage.module.css';
import { NFTTap, NFTDetailDes, NFTDetailImg } from './NFTIndex';

const NFTDetailPage = () => {
  return (
    <div className={styles.NFTDetailPage}>
      <div className={styles.NFTDetailPage_box}>
        <NFTTap />
        <NFTDetailDes />
        <NFTDetailImg />
      </div>
    </div>
  );
};

export default NFTDetailPage;
