import React from 'react';
import styles from './SearchBar.module.css';
import { BsSearch,BsArrowBarRight } from 'react-icons/bs';

const SearchBar = () => {
  return (
    <div className={styles.SearchBar}>
        <div className={styles.SearchBar_box}>
            <BsSearch className={styles.SearchBar_box_icon}/>
            <input type="text" placeholder='Search'/>
            <BsArrowBarRight className={styles.SearchBar_box_icon}/>
        </div>
    </div>
  )
}

export default SearchBar