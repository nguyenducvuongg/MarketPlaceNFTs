import React from 'react';
import styles from './Service.module.css';
import img from '../../img';
import Image from 'next/image';

const Service = () => {
  return (
    <div className={styles.service}>
        <div className={styles.service_box}>
            <div className={styles.service_box_item}>
                <Image src={img.service1} alt='service' width={100} height={100} />
                <p className={styles.service_box_step}>
                <span>01</span>
            </p>
            <h3>Fillter and Discover</h3>
            <p>Connect wallet, create collection, and discover</p>
            </div>
            <div className={styles.service_box_item}>
                <Image src={img.service2} alt='service' width={100} height={100} />
                <p className={styles.service_box_step}>
                <span>02</span>
            </p>
            <h3>Connect Wallet</h3>
            <p>Connect wallet, create collection, and discover</p>
            </div>           
            <div className={styles.service_box_item}>
                <Image src={img.service3} alt='service' width={100} height={100} />
                <p className={styles.service_box_step}>
                <span>03</span>
            </p>
            <h3>Choice Your NFT</h3>
            <p>Connect wallet, create collection, and discover</p>
            </div>
            <div className={styles.service_box_item}>
                <Image src={img.service4} alt='service' width={100} height={100} />
                <p className={styles.service_box_step}>
                <span>04</span>
            </p>
            <h3>Add and Buy</h3>
            <p>Connect wallet, create collection, and discover</p>
            </div>
        </div>
    </div>
  )
}

export default Service