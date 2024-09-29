import React, { useState } from 'react';
import styles from './NFTCard.module.css';
import Image from 'next/image';
import img from '../../img';
import { AiFillFire,AiFillHeart,AiOutlineHeart } from "react-icons/ai";
import{BsImages} from "react-icons/bs";
import {Button} from '../ConponentsIndex';
import { useTranslation } from 'react-i18next';

const NFTCard = () => {

    const featureArray = [1,2,3,4,5,6,7,8,9]
    const [like, setLike] = useState(false)
    const likeNft = () => {
        if(!like) {
            setLike(true)
        } else {
            setLike(false)
        }
    }
  return (
    <div className={styles.NFTCard}>
        {featureArray.map((feature) => (
            <div className={styles.NFTCard_box} key={feature}>
                <div className={styles.NFTCard_box_img}>
                    <Image src={img.nft_image_1} alt='nft' width={600} height={600} className={styles.NFTCard_box_img_img}/>
                </div>
                <div className={styles.NFTCard_box_update}>
                    <div className={styles.NFTCard_box_update_left}>
                        <div className={styles.NFTCard_box_update_left_like} onClick={() => likeNft()}>
                            {like ? (<AiOutlineHeart className={styles.NFTCard_box_update_left_like_icon}/>) : (<AiFillHeart className={styles.NFTCard_box_update_left_like_icon}/>)}
                            {""}22
                        </div>
                    </div>
                    <div className={styles.NFTCard_box_update_right}>
                        <div className={styles.NFTCard_box_update_right_info}>
                            <small>Remaining Times</small>
                            <p>3h : 20m</p>
                        </div>
                    </div>
                </div>
                <div className={styles.NFTCard_box_update_detail}>
                    <div className={styles.NFTCard_box_update_detail_price}>
                        <div className={styles.NFTCard_box_update_detail_price_box}>
                            <h4>#djkfh</h4>
                            <div className={styles.NFTCard_box_update_detail_price_box_box}>
                                <div className={styles.NFTCard_box_update_detail_price_box_box_bid}>
                                    <small>Current Bid</small>
                                    <p>1000.00ETH</p>
                                </div>
                                <div className={styles.NFTCard_box_update_detail_price_box_stock}>
                                    <Button btnName='Buy Now' className={styles.NFTCard_box_update_detail_price_box_box_btn}/>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className={styles.NFTCard_box_update_detail_category}>
                        <BsImages/>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default NFTCard