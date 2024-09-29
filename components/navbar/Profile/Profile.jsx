import React from 'react';
import styles from './Profile.module.css';
import Image from 'next/image';
import img from '../../../img';
import {FaUserAlt,FaRegImage,FaUserEdit, FaUser} from 'react-icons/fa';
import {MdHelpCenter} from 'react-icons/md';
import {TbDownloadOff, TbDownload} from 'react-icons/tb';
import Link from 'next/link';

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.profile_account}>
        <Image src={img.user1} alt='user' width={50} height={50} className={styles.profile_account_img} />
        <div className={styles.profile_account_info}>
          <p>Nguyen Duc Vuong</p>
          <small>0x2315465.....</small>
        </div>
      </div>
      <div className={styles.profile_menu}>
        <div className={styles.profile_menu_one}>
          <div className={styles.profile_menu_one_item}>
            <FaUserAlt/>
            <p>
              <Link href='/profile'>Profile</Link>
            </p>
          </div>
          <div className={styles.profile_menu_one_item}>
            <FaRegImage/>
            <p>
              <Link href='/items'>Items</Link>
            </p>
          </div>
          <div className={styles.profile_menu_one_item}>
            <FaUserEdit/>
            <p>
              <Link href='/edit-profile'>Edit Profile</Link>
            </p>
          </div>
        </div>
        <div className={styles.profile_menu_two}>
          <div className={styles.profile_menu_one_item}>
            <MdHelpCenter/>
            <p>
              <Link href='/help-center'>Help Center</Link>
            </p>
          </div>
          <div className={styles.profile_menu_one_item}>
            <TbDownload/>
            <p>
              <Link href='/disconnect'>Disconnect  </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
