import React, { useState } from 'react';
import styles from './NFTDetailImg.module.css';
import Image from 'next/image';
import img from '../../img';
import {BsImages} from "react-icons/bs";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import {TiArrowSortedUp, TiArrowSortedDown} from "react-icons/ti";

const NFTDetailImg = () => {
  
  const [description, setDescription] = useState(true);
  const [detail, setDetail] = useState(true);
  const [like, setLike] = useState(false);

  const openDescription = () => {
    if(!description) {
      setDescription(true);
    } else {
      setDescription(false);
    }
  };
  const openDetail = () => {
    if(!detail) {
      setDetail(true);
    } else {
      setDetail(false);
    }
  };
  
  const likeNFT = () => {
    if(!like) {
      setLike(true);
    } else {
      setLike(false);
    }
  };

  return (
    <div className={styles.NFTDetailImg}>
      <div className={styles.NFTDetailImg_box}>
        <div className={styles.NFTDetailImg_box_NFT}>
          <div className={styles.NFTDetailImg_box_NFT_NFT_like}>
            <BsImages className={styles.NFTDetailImg_box_NFT_NFT_like_icon}/>
            <p onClick={()=>likeNFT()}>
              {like ? (<AiOutlineHeart className={styles.NFTDetailImg_box_NFT_NFT_like_icon}/>) : (<AiFillHeart className={styles.NFTDetailImg_box_NFT_NFT_like_icon}/>)}
              <span>22</span>
            </p>
          </div>
          <div className={styles.NFTDetailImg_box_NFT_NFT_img}>
            <Image objectFit='cover' src={img.nft_image_1} alt='nft' width={700} height={800} className={styles.NFTDetailImg_box_NFT_NFT_img_img}/>
          </div>
        </div> 
        <div className={styles.NFTDetailImg_box_description} onClick={() => openDescription()}>
          <p>description</p>
          {description ? (<TiArrowSortedDown className={styles.NFTDetailImg_box_description_icon}/>) : (<TiArrowSortedUp className={styles.NFTDetailImg_box_description_icon}/>)}
        </div>
        {description && (
          <div className={styles.NFTDetailImg_box_description_box}>
            <p>kid gang is a collection of 10,000 unique NFTs.</p>
          </div>
        )}
        <div className={styles.NFTDetailImg_box_detail} onClick={() => openDetail()}>
          <p>detail</p>
          {detail ? (<TiArrowSortedDown className={styles.NFTDetailImg_box_description_icon}/>) : (<TiArrowSortedUp className={styles.NFTDetailImg_box_description_icon}/>)}
        </div>
        {detail && (
          <div className={styles.NFTDetailImg_box_detail_box}>
            <small>2000x2000px.image</small>
            <p><small>Contract: <br/>0x2315465.....</small></p>
            <p><small>Token ID: <br/>0x2315465.....</small></p>
        </div>
        )}
      </div>
    </div>
  );
};

export default NFTDetailImg;
