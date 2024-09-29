import React from 'react';
import styles from './Category.module.css';
import Image from 'next/image';
import img from '../../img';
import { BsCircleFill } from "react-icons/bs";

const Category = () => {


    const CategoryList = [1,2,3,4,5,6]

  return (
    <div className={styles.box_category}>
        <div className={styles.category}>
            {CategoryList.map((item) => (
                <div key={item} className={styles.category_box}>
                    <Image className={styles.category_box_img} src={img.creatorbackground1} alt='category' objectFit='cover' width={350} height={350}/>
                    <div className={styles.category_box_title}>
                        <span><BsCircleFill/></span>
                        <div className={styles.category_box_title_info}>
                            <h4>Enterrainment</h4>
                            <small>1994 NFTS</small>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Category