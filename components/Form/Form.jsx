import React from 'react';
import styles from './Form.module.css';
import {HiOutlineMail} from 'react-icons/hi';
import {MdOutlineHttp,MdOutlineContentCopy} from "react-icons/md";
import { TiSocialFacebook, TiSocialInstagram, TiSocialTwitter } from 'react-icons/ti';
import { Button } from '../ConponentsIndex';


const Form = () => {
  return (
    <div className={styles.form}>
        <div className={styles.form_box}>
            <form>
                <div className={styles.form_box_input}>
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder='Enter your name' className={styles.form_box_input_userName}/>
                </div>
                <div className={styles.form_box_input}>
                    <label htmlFor="email">Email</label>
                    <div className={styles.form_box_input_box}>
                        <div className={styles.form_box_input_box_icon}>
                            <HiOutlineMail/>    
                        </div>
                        <input type="email" placeholder='Enter your email' className={styles.form_box_input_email}/>
                    </div>
                </div>
                <div className={styles.form_box_input}>
                    <label htmlFor="description">description</label>
                    <textarea name="" id="" cols="30" rows="6 " placeholder='Enter your description' className={styles.form_box_input_description}></textarea>
                </div>
                <div className={styles.form_box_input}>
                    <label htmlFor="wedSite">wedSite</label>
                    <div className={styles.form_box_input_box}>
                        <div className={styles.form_box_input_box_icon}>
                            <MdOutlineHttp/>    
                        </div>
                        <input type="text" placeholder='Enter your wedSite' className={styles.form_box_input_wedSite}/>
                    </div>
                </div>
                <div className={styles.form_box_input_social}>
                    <div className={styles.form_box_input}>
                        <label htmlFor="facebook">facebook</label>
                        <div className={styles.form_box_input_box}>
                            <div className={styles.form_box_input_box_icon}><TiSocialFacebook/></div>
                            <input type="text" placeholder='Enter your facebook'/>
                        </div>
                    </div>
                    <div className={styles.form_box_input}>
                        <label htmlFor="instagram">instagram</label>
                        <div className={styles.form_box_input_box}>
                            <div className={styles.form_box_input_box_icon}><TiSocialInstagram/></div>
                            <input type="text" placeholder='Enter your instagram'/>
                        </div>
                    </div>
                    <div className={styles.form_box_input}>
                        <label htmlFor="twitter">twitter</label>
                        <div className={styles.form_box_input_box}>
                            <div className={styles.form_box_input_box_icon}><TiSocialTwitter/></div>
                            <input type="text" placeholder='Enter your twitter'/>
                        </div>
                    </div>
                </div>
                <div className={styles.form_box_input}>
                    <label htmlFor="wallet">Wallet Address</label>
                    <div className={styles.form_box_input_box}>
                        <div className={styles.form_box_input_box_icon}><MdOutlineHttp/></div>
                        <input type="text" placeholder='Enter your Wallet Address'/>
                        <div className={styles.form_box_input_box_icon}><MdOutlineContentCopy/></div>
                    </div>
                </div>
                <div className={styles.form_box_input_btn}>
                    <Button btnName="upload" handleClick={() => {}} className={styles.button}/>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Form;
