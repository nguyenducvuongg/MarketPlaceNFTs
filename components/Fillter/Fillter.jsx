import React, { useState } from 'react';
import styles from './Fillter.module.css';
import { FaFilter, FaUserAlt, FaWallet, FaAngleUp, FaAngleDown, FaImages, FaVideo, FaMusic } from "react-icons/fa";
import { AiFillClockCircle } from "react-icons/ai";
import { MdVerified } from "react-icons/md";

const Fillter = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isImagesOpen, setIsImagesOpen] = useState(true);
    const [isVideoOpen, setIsVideoOpen] = useState(true);
    const [isMusicOpen, setIsMusicOpen] = useState(true);

    const toggleFilter = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    const toggleImages = () => {
        setIsImagesOpen(!isImagesOpen);
    };

    const toggleVideo = () => {
        setIsVideoOpen(!isVideoOpen);
    };

    const toggleMusic = () => {
        setIsMusicOpen(!isMusicOpen);
    };

    return (
        <div className={styles.fillter}>
            <div className={styles.fillter_box}>
                <div className={styles.fillter_box_left}>
                    <button>NFTs</button>
                    <button>Music</button>
                    <button>Art</button>
                    <button>Sports</button>
                    <button>Domains</button>
                </div>
                <div className={styles.fillter_box_right}>
                    <div className={styles.fillter_box_right_box} onClick={toggleFilter}>
                        <FaFilter />
                        <span>Fillter</span>
                        {isFilterOpen ? <FaAngleUp /> : <FaAngleDown />}
                    </div>
                </div>
            </div>
            {isFilterOpen && (
                <div className={styles.fillter_box_items}>
                    <div className={styles.fillter_box_items_box}>
                        <div className={styles.fillter_box_items_box_item}>
                            <FaWallet />
                            <span>0.01 ETH - 10ETH</span>
                            <AiFillClockCircle />
                        </div>
                    </div>
                    <div className={styles.fillter_box_items_box}>
                        <div className={styles.fillter_box_items_box_item_trans} onClick={toggleImages}>
                            <FaImages />
                            <small>Images</small>
                            {isImagesOpen ? <FaAngleUp /> : <FaAngleDown />}
                        </div>
                    </div>
                    <div className={styles.fillter_box_items_box}>
                        <div className={styles.fillter_box_items_box_item_trans} onClick={toggleVideo}>
                            <FaVideo />
                            <small>Video</small>
                            {isVideoOpen ? <FaAngleUp /> : <FaAngleDown />}
                        </div>
                    </div>
                    <div className={styles.fillter_box_items_box}>
                        <div className={styles.fillter_box_items_box_item_trans} onClick={toggleMusic}>
                            <FaMusic />
                            <small>Music</small>
                            {isMusicOpen ? <FaAngleUp /> : <FaAngleDown />}
                        </div>
                    </div>
                    <div className={styles.fillter_box_items_box}>
                        <div className={styles.fillter_box_items_box_item}>
                            <FaUserAlt />
                            <span>Creator</span>
                            <MdVerified />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Fillter;
