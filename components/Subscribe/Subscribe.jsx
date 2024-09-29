import React from 'react';
import styles from './Subscribe.module.css';
import { RiSendPlaneFill } from "react-icons/ri";
import Image from 'next/image';
import img from '../../img';

const Subscribe = () => {
  return (
    <div className={styles.subscribe}>
        <div className={styles.subscribe_box}>
            <div className={styles.subscribe_box_left}>
                <h2>Never miss our latest updates.</h2>
                <p>Subscribe to our newsletter to stay updated on our latest news and be the first to know about our launch. </p>
                <div className={styles.subscribe_box_left_box}>
                    <span>01</span>
                    <small>Get more</small>
                </div>
                <div className={styles.subscribe_box_left_box}>
                    <span>02</span>
                    <small>Get premium</small>
                </div>
                <div className={styles.subscribe_box_left_input}>
                    <input type='email' placeholder='Enter your email' />
                    <RiSendPlaneFill className={styles.subscribe_box_left_input_icon}/>
                </div>
            </div>
            <div className={styles.subscribe_box_right}>
                <Image src={img.update} alt='get update' width={800} height={800} />
            </div>
        </div>
    </div>
  )
}

export default Subscribe