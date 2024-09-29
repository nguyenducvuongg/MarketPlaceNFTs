import React from 'react';
import styles from './Notification.module.css';
import Image from 'next/image';
import img from '../../../img';

const Notification = () => {
  return (
    <div className={styles.notification}>
      <p>Notification</p>
      <div className={styles.notification_box}>
        <div className={styles.notification_box_img}>
          <Image src={img.user1} alt='user' width={50} height={50} className={styles.notification_box_img} />
        </div>
        <div className={styles.notification_box_info}>
          <h4>Nguyen Duc Vuong</h4>
          <p>Measued in 2022</p>
          <small>3 days ago</small>
        </div>
        <span className={styles.notification_box_new}></span>
      </div>
    </div>
  );
};

export default Notification;
