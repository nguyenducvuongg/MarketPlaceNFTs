import React from 'react';
import styles from './Footer.module.css';
import { TiSocialFacebook,TiSocialInstagram,TiSocialTwitter, TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import { RiSendPlaneFill } from "react-icons/ri";
import Image from 'next/image';
import img from '../../img';
import { Discover, HelpCenter, Notification, Profile } from '../navbar';

const Footer = () => {

  
  return (
    <div className={styles.footer}>
      <div className={styles.footer_box}>
        <div className={styles.footer_box_social}>
          <Image src={img.logo} alt='logo' width={100} height={100} />
          <p>dgsafhgasdhfgshdgsddhf</p>
          <div className={styles.footer_social}>
          <a href='#'><TiSocialFacebook /></a>
          <a href='#'><TiSocialInstagram /></a>
          <a href='#'><TiSocialTwitter /></a>
          </div>
        </div>
        <div className={styles.footer_box_discover}>
          <h3>Discover</h3>
          <Discover />
        </div>
        <div className={styles.footer_box_help}>
          <h3>Help Center</h3>
          <HelpCenter />
        </div>
        <div className={styles.subsribe_box}>
          <input type='email' placeholder='Enter your email' />
          <RiSendPlaneFill className={styles.subsribe_box_send}/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
