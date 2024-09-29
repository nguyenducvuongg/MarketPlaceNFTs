import {React,useState, useEffect, useCallback} from 'react';
import styles from './BigNftSlider.module.css';
import Image from 'next/image';
import img from '../../img';
import { Button } from '../ConponentsIndex';
import { AiFillFire,AiFillHeart,AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import { TbArrowBigLeftLine, TbArrowBigRightLine } from "react-icons/tb";
import { TiArrowSortedUp,TiArrowSortedDown } from "react-icons/ti";
import { useTranslation } from 'react-i18next';


const BigNftSlider = () => {

    const {t} = useTranslation();

  const [idNumber, setIdNumber] = useState(1);

  const sliderData = [
    {
        title : 'The Futr Abstr',
        id : 1,
        price : '0.2154ETH',
        time : {
            days : 1,
            hours : 1,
            minutes : 1,
            seconds : 1
        },
        image : img.user1,
        nftImage : img.nft_1,
        name : 'Abstraction',
        likes : 1500,
        creator : 'Niftygateway',
        creatorImage : img.creatorbackground1
    },
    {
        title : 'The Futr Abstr',
        id : 2,
        price : '0.2154ETH',
        time : {
            days : 1,
            hours : 1,
            minutes : 1,
            seconds : 1
        },
        image : img.user2,
        nftImage : img.nft_image_1,
        name : 'Abstraction',
        likes : 1500,
        creator : 'Niftygateway',
        creatorImage : img.creatorbackground2
    },
    {
        title : 'The Futr Abstr',
        id : 3,
        price : '0.2154ETH',
        time : {
            days : 1,
            hours : 1,
            minutes : 1,
            seconds : 1
        },
        image : img.user3,
        nftImage : img.nft_image_2,
        name : 'Abstraction',
        likes : 1500,
        creator : 'Niftygateway',
        creatorImage : img.creatorbackground3
    },
    {
        title : 'The Futr Abstr',
        id : 4,
        price : '0.2154ETH',
        time : {
            days : 1,
            hours : 1,
            minutes : 1,
            seconds : 1
        },
        image : img.user4,
        nftImage : img.nft_image_3,
        name : 'Abstraction',
        likes : 1500,
        creator : 'Niftygateway',
        creatorImage : img.creatorbackground4
    },
  ]

  const inc = useCallback(() => {
    if(idNumber + 1 < sliderData.length){
        setIdNumber(idNumber + 1);
    }
  }, [idNumber,sliderData.length]);

  const dec = useCallback(() => {
    if(idNumber >= 0){
        setIdNumber(idNumber - 1);
    }
  }, [idNumber]);

  useEffect(() => {
    inc();
  },[]);

  return (
    <div className={styles.bigNftSlider}>
        <div className={styles.bigNftSlider_box}>
            <div className={styles.bigNftSlider_box_left}>
                <h2>{sliderData[idNumber].title}</h2>
                <div className={styles.bigNftSlider_box_left_creator}>
                    <div className={styles.bigNftSlider_box_left_creator_profile}>
                        <Image className={styles.bigNftSlider_box_left_creator_profile_img} src={sliderData[idNumber].creatorImage} alt='creator' width={50} height={50} />
                        <div className={styles.bigNftSlider_box_left_creator_profile_img}>
                            <p>{t('Creators')}</p>
                            <h4>{sliderData[idNumber].name}<span><MdVerified /></span></h4>
                        </div>
                    </div>
                    <div className={styles.bigNftSlider_box_left_creator_collection}>
                        <AiFillFire className={styles.bigNftSlider_box_left_creator_collection_icon} />
                        <div className={styles.bigNftSlider_box_left_creator_collection_info}>
                            <p>{t('Collection')}</p>
                            <h4>{sliderData[idNumber].title}</h4>
                        </div>
                    </div>
                </div>
                <div className={styles.bigNftSlider_box_left_bidding}>
                    <div className={styles.bigNftSlider_box_left_bidding_box}>
                        <small>{t('CurrentBid')}</small>
                        <p>{sliderData[idNumber].price}<span>$22,221</span></p>
                    </div>
                    <p className={styles.bigNftSlider_box_left_bidding_box_auction}>
                        <MdTimer className={styles.bigNftSlider_box_left_bidding_box_auction_icon} />
                        <span>{t('AuctionTiming')}</span> 
                    </p>
                    <div className={styles.bigNftSlider_box_left_bidding_box_timer}>
                        <div className={styles.bigNftSlider_box_left_bidding_box_timer_item}>
                            <p>{sliderData[idNumber].time.days}</p>
                            <span>Days</span>
                        </div>
                        <div className={styles.bigNftSlider_box_left_bidding_box_timer_item}>
                            <p>{sliderData[idNumber].time.hours}</p>
                            <span>Hours</span>
                        </div>
                        <div className={styles.bigNftSlider_box_left_bidding_box_timer_item}>
                            <p>{sliderData[idNumber].time.minutes}</p>
                            <span>Minutes</span>
                        </div>
                        <div className={styles.bigNftSlider_box_left_bidding_box_timer_item}>
                            <p>{sliderData[idNumber].time.seconds}</p>
                            <span>Seconds</span>
                        </div>
                    </div>
                    <div className={styles.bigNftSlider_box_left_button}>
                        <Button btnName={t('BuyNow')} handleClick={()=>{}}/>
                        <Button btnName={t('PlaceBid')} handleClick={()=>{}}/>
                    </div>
                </div>
                <div className={styles.bigNftSlider_box_left_sliderBtn}>
                    <TbArrowBigLeftLine className={styles.bigNftSlider_box_left_sliderBtn_icon} onClick={()=>inc()}/> 
                    <TbArrowBigRightLine className={styles.bigNftSlider_box_left_sliderBtn_icon} onClick={()=>dec()}/>          
                </div>
            </div>
            <div className={styles.bigNftSlider_box_right}>
                <div className={styles.bigNftSlider_box_right_box}>
                    <Image className={styles.bigNftSlider_box_right_box_img} src={sliderData[idNumber].nftImage} alt='nft'/>
                    <div className={styles.bigNftSlider_box_right_box_likes}>
                        <AiFillHeart className={styles.bigNftSlider_box_right_box_likes_icon} />
                        <p>{sliderData[idNumber].likes}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BigNftSlider