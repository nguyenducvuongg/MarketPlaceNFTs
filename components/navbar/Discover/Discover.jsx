import React from 'react';
import styles from './Discover.module.css';
import Link from 'next/link';

const Discover = () => {

  const discover = [
    {
      name: 'Collection',
      link: 'collection'
    },
    {
      name: 'Search',
      link: 'SearchPage'
    },
    {
      name: 'Author Profile',
      link: 'author-profile'
    },
    {
      name: 'NFT Details',
      link: 'NFTDetail'
    },
    {
      name: 'Create NFTs',
      link: 'uploadNFT'
    },
    {
      name: 'Connect Wallet',
      link: 'ConnectWallet'
    },
  ]

  return (
    <div>
      {discover.map((item, index) => (
        <div key={index} className={styles.discover}>
          <Link href={`/${item.link}`}>{item.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Discover;
