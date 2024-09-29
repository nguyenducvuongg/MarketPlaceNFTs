import React, { useState, useEffect,useContext } from 'react';
import styles from './HeroSection.module.css';
import Image from 'next/image';
import img from '../../img';
import { Button } from '../ConponentsIndex';
import {NFTMarketPlaceContext} from '../../Context/NFTMarketPlaceContext';

const HeroSection = () => {

  const {titleData} = useContext(NFTMarketPlaceContext);
  return (
    <div className={styles.heroSection}>
        <div className={styles.heroSection_box}>
            <div className={styles.heroSection_box_left}>
                <h1>{titleData}<br /> extraordinary NFTs</h1>
                <p>NDV is the world’s first and largest NFT marketplace</p>
                <Button btnName='Explore Now' handleClick={() => {}} />
            </div>
            <div className={styles.heroSection_box_right}>
                <Image src={img.hero} alt='hero' width={600} height={600} />
            </div>
        </div>
    </div>
  )
}

export default HeroSection