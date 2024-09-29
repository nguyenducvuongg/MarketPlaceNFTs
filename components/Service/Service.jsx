import React from 'react';
import styles from './Service.module.css';
import img from '../../img';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const Service = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.service}>
        <div className={styles.service_box}>
            <div className={styles.service_box_item}>
                <Image src={img.service1} alt='service' width={100} height={100} />
                <p className={styles.service_box_step}>
                <span>01</span>
            </p>
            <h3>{t('discover')}</h3>
            <p>{t('text')}</p>
            </div>
            <div className={styles.service_box_item}>
                <Image src={img.service2} alt='service' width={100} height={100} />
                <p className={styles.service_box_step}>
                <span>02</span>
            </p>
            <h3>{t('connect')}</h3>
            <p>{t('text')}</p>
            </div>           
            <div className={styles.service_box_item}>
                <Image src={img.service3} alt='service' width={100} height={100} />
                <p className={styles.service_box_step}>
                <span>03</span>
            </p>
            <h3>{t('createNFT')}</h3>
            <p>{t('text')}</p>
            </div>
            <div className={styles.service_box_item}>
                <Image src={img.service4} alt='service' width={100} height={100} />
                <p className={styles.service_box_step}>
                <span>04</span>
            </p>
            <h3>{t('add_buy')}</h3>
            <p>{t('text')}</p>
            </div>
        </div>
    </div>
  )
}

export default Service
