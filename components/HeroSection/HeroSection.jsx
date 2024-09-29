import React, { useState, useEffect,useContext } from 'react';
import styles from './HeroSection.module.css';
import Image from 'next/image';
import img from '../../img';
import { Button } from '../ConponentsIndex';
import {NFTMarketPlaceContext} from '../../Context/NFTMarketPlaceContext';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {

  const {titleData} = useContext(NFTMarketPlaceContext);
  const { t } = useTranslation();
  return (
    <div className={styles.heroSection}>
        <div className={styles.heroSection_box}>
            <div className={styles.heroSection_box_left}>
                <h1>{titleData}<br /> {t('hero')}</h1>
                <p>{t('slogan')}</p>
                <Button btnName={t('ExploreNow')} handleClick={() => {}} />
            </div>
            <div className={styles.heroSection_box_right}>
                <Image src={img.hero} alt='hero' width={600} height={600} />
            </div>
        </div>
    </div>
  )
}

export default HeroSection