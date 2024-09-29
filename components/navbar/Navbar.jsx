import React, { useState, useEffect,useContext } from 'react';
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

const Navbar = () => {
  const [discoverShow, setDiscoverShow] = useState(false);
  const [helpCenterShow, setHelpCenterShow] = useState(false);
  const [notificationShow, setNotificationShow] = useState(false);
  const [profileShow, setProfileShow] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const openMenu = (e) => {
    const btnText = e.target.innerText;

    if (btnText === 'Discover') {
      setDiscoverShow(!discoverShow);
      setHelpCenterShow(false);
      setNotificationShow(false);
      setProfileShow(false);
    } else if (btnText === 'Help Center') {
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

  const openNotification = () => {
    setNotificationShow(!notificationShow);
    setDiscoverShow(false);
    setHelpCenterShow(false);
    setProfileShow(false);
  };

  const openProfile = () => {
    setProfileShow(!profileShow);
    setDiscoverShow(false);
    setHelpCenterShow(false);
    setNotificationShow(false);
  };

  const openSideBar = () => {
    setOpenSideMenu(!openSideMenu);
  };

  const {currentAccount,connectWallet}=useContext(NFTMarketPlaceContext);

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_container}>
        <div className={styles.navbar_container_left}>
          <Link href="/">
            <div className={styles.logo}>
              <Image src={img.logo} alt="NFT MARKET PLACE" width={100} height={100} />
            </div>
          </Link>
          {/* <div className={styles.navbar_container_left_box_input}>
            <div className={styles.navbar_container_left_box_input_box}>
              <input type="text" placeholder="Search NFT" />
              <BsSearch onClick={() => {}} className={styles.search_icon} />
            </div>
          </div> */}
        </div>

        

        <div className={styles.navbar_container_right}>
          {/* <div className={styles.navbar_container_right_discover}>
            <p onClick={(e) => openMenu(e)}>Discover</p>
            {discoverShow && (
              <div className={styles.navbar_container_right_discover_box}>
                <Discover />
              </div>
            )}
          </div> */}
           <Link href="/SearchPage">
            <div className={styles.navbar_container_right_button}>
              <Button btnName="Search"  handleClick={() => {}}/>
            </div>
          </Link>


          <Link href="/uploadNFT">
            <div className={styles.navbar_container_right_button}>
              <Button btnName="CreateNFT"  handleClick={() => {}}/>
            </div>
          </Link>

          {/* <div className={styles.navbar_container_right_help}>
            <p onClick={(e) => openMenu(e)}>Help Center</p>
            {helpCenterShow && (
              <div className={styles.navbar_container_right_help_box}>
                <HelpCenter />
              </div>
            )}
          </div> */}

          {/* <div className={styles.navbar_container_right_notification}>
            <MdNotifications onClick={openNotification} className={styles.notification_icon} />
            {notificationShow && (
              <div className={styles.navbar_container_right_notification_box}>
                <Notification />
              </div>
            )}
          </div> */}

          <div className={styles.navbar_container_right_button}>
            {currentAccount == "" ? (
              <Button btnName="Connect"  handleClick={() => connectWallet()}/>
            ):(
              <Button btnName={`${currentAccount.slice(0, 6)}...${currentAccount.slice(-4)}`} />
            )}
              
          </div>
          <div className={styles.navbar_container_right_profile_box}>
            {/* <div className={styles.navbar_container_right_profile}>
                <Image
                  className={styles.navbar_container_right_profile}
                  src={img.user1}
                  alt="user"
                  width={40}
                  height={40}
                  onClick={openProfile}
                />
                {profileShow && <Profile />}
            </div> */}
          </div>

          <div className={styles.navbar_container_right_menuBtn}>
            <CgMenuLeft className={styles.menuIcon} onClick={openSideBar} />
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
