import React from 'react';
import styles from '../styles/SearchPage.module.css'; 
import {SearchBar} from '../SearchPage/SearchIndex';
import Fillter from '../components/Fillter/Fillter';
import NFTCard from '../components/NFTCard/NFTCard';

const SearchPage = () => {
  return (
    <div className={styles.SearchPage}>
        <Fillter />
        <SearchBar />
        <NFTCard />
    </div>
  )
}

export default SearchPage