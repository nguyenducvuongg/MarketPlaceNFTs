import React, { useState, useEffect } from 'react';
import styles from './SideBar.module.css';
import Image from 'next/image';
import img from '../../../img';
import Link from 'next/link';
import { GrClose } from 'react-icons/gr';
import { TiSocialFacebook,TiSocialInstagram,TiSocialTwitter, TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import Button from '../../Button/Button';

const SideBar = ({ setOpenSideMenu }) => {
  const [openDiscover, setOpenDiscover] = useState(false);
  const [openHelpCenter, setOpenHelpCenter] = useState(false);

  const discover = [
    {
      name: 'Collection',
      link: 'collection'
    },
    {
      name: 'Search',
      link: 'search'
    },
    {
      name: 'Author Profile',
      link: 'author-profile'
    },
    {
      name: 'NFT Details',
      link: 'nft-details'
    },
    {
      name: 'Account Settings',
      link: 'account-settings'
    },
    {
      name: 'Connect Wallet',
      link: 'connect-wallet'
    },
  ];

  const helpCenter = [
    {
      name: 'About',
      link: 'about'
    },
    {
      name: 'Contact Us',
      link: 'contact-us'
    },
    {
      name: 'Sign Up',
      link: 'sign-up'
    },
    {
      name: 'Sign In',
      link: 'sign-in'
    },
    {
      name: 'Support',
      link: 'support'
    },
  ];

  const openDiscoverMenu = () => {
    if(!openDiscover) {
      setOpenDiscover(true);
    } else {
      setOpenDiscover(false);
    }
  };

  const openHelpCenterMenu = () => {
    if(!openHelpCenter) {
      setOpenHelpCenter(true);
    } else {
      setOpenHelpCenter(false);
    }
  };

  const closeSideBar = () => {
    setOpenSideMenu(false);
  };

  return (
    <div className={styles.SideBar}>
      <GrClose className={styles.sideBar_closeBtn} onClick={closeSideBar} />
      <div className={styles.SideBar_box}>
      <Image src={img.logo} alt='logo' width={150} height={150} />
        <p>Discover the ashdjkashd</p>
        <div className={styles.SideBar_social}>
          <a href='#'><TiSocialFacebook /></a>
          <a href='#'><TiSocialInstagram /></a>
          <a href='#'><TiSocialTwitter /></a>
        </div>
      </div>

      <div className={styles.SideBar_menu}>
        <div>
          <div className={styles.SideBar_menu_box} onClick={openDiscoverMenu}>
            <p>Discover</p>
            {openDiscover ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
          </div>

          {openDiscover && (
            <div className={styles.SideBar_discover}>
              {discover.map((item, index) => (
                <p key={index}>
                  <Link href={`/${item.link}`}>{item.name}</Link>
                </p>
              ))}
            </div>
          )}
        </div>

        <div>
          <div className={styles.SideBar_menu_box} onClick={openHelpCenterMenu}>
            <p>HelpCenter</p>
            {openHelpCenter ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
          </div>
          {openHelpCenter && (
            <div className={styles.SideBar_discover}>
              {helpCenter.map((item, index) => (
                <p key={index}>
                  <Link href={`/${item.link}`}>{item.name}</Link>
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className={styles.SideBar_button}>
        <Button btnName='Create' handleClick={() => {}}/>
        <Button btnName='connect' handleClick={() => {}}/>
      </div>
    </div>
  );
};

export default SideBar;
