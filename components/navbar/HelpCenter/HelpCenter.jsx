import React from 'react';
import styles from './HelpCenter.module.css';
import Link from 'next/link';

const HelpCenter = () => {
  
  const helpCenter = [
    {
      name: 'About',
      link: 'about'
    },
    {
      name: 'Contact Us',
      link: 'contact-us'
    },
    {
      name: 'Sign Up',
      link: 'sign-up'
    },
    {
      name: 'Sign In',
      link: 'sign-in'
    },
    {
      name: 'Support',
      link: 'support'
    },
  ]

  return (
    <div className={styles.box}>
      {helpCenter.map((item, index) => (
        <div key={index} className={styles.helpCenter}>
          <Link href={`/${item.link}`}>{item.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default HelpCenter;
