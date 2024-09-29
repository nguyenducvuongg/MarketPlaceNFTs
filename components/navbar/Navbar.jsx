import React, { useState, useEffect, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.css';
import { MdNotifications } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';
import { CgMenuLeft } from 'react-icons/cg';
import { Button } from '../ConponentsIndex';
import img from '../../img';
import { Discover, HelpCenter, Notification, Profile, SideBar } from './index';
import { NFTMarketPlaceContext } from '../../Context/NFTMarketPlaceContext';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [discoverShow, setDiscoverShow] = useState(false);
  const [helpCenterShow, setHelpCenterShow] = useState(false);
  const [notificationShow, setNotificationShow] = useState(false);
  const [profileShow, setProfileShow] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const { t, i18n } = useTranslation();

  const openMenu = (e) => {
    const btnText = e.target.innerText;

    if (btnText === t('discover')) {
      setDiscoverShow(!discoverShow);
      setHelpCenterShow(false);
      setNotificationShow(false);
      setProfileShow(false);
    } else if (btnText === t('helpCenter')) {
      setDiscoverShow(false);
      setHelpCenterShow(!helpCenterShow);
      setNotificationShow(false);
      setProfileShow(false);
    } else {
      setDiscoverShow(false);
      setHelpCenterShow(false);
      setNotificationShow(false);
      setProfileShow(false);
    }
  };
  const { currentAccount, connectWallet } = useContext(NFTMarketPlaceContext);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.navbar}>
      <div className={`${styles.navbar_container} ${isScrolled ? styles.active : ''}`} >
        <div className={styles.navbar_container_left}>
          <Link href="/">
            <div className={styles.logo}>
              <Image src={img.logo} alt="NFT MARKET PLACE" width={100} height={100} />
            </div>
          </Link>
        </div>

        <div className={styles.navbar_container_right}>
          <div className={styles.navbar_container_right}>
            <label className={styles.language_select} htmlFor="language-select">{t('language')}:</label>
            <select id="language-select" className={styles.language_dropdown} onChange={(e) => changeLanguage(e.target.value)}>
              <option value="en" className={styles.language_option}>English</option>
              <option value="vi" className={styles.language_option}>Tiếng Việt</option>
            </select>
          </div>

          <Link href="/SearchPage">
            <div className={`${styles.navbar_container_right_button} ${isScrolled ? styles.activeBtn : ''}`}>
              <Button btnName={t('search')} handleClick={() => {}} />
            </div>
          </Link>

          <Link href="/uploadNFT">
            <div className={styles.navbar_container_right_button}>
              <Button btnName={t('createNFT')} handleClick={() => {}} />
            </div>
          </Link>

          <div className={styles.navbar_container_right_button}>
            {currentAccount === '' ? (
              <Button btnName={t('connect')} handleClick={() => connectWallet()} />
            ) : (
              <Button btnName={`${currentAccount.slice(0, 6)}...${currentAccount.slice(-4)}`} />
            )}
          </div>
        </div>
      </div>

      {openSideMenu && (
        <div className={styles.sidebar}>
          <SideBar setOpenSideMenu={setOpenSideMenu} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
