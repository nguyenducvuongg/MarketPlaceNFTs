import { useState , useEffect, React} from 'react';
import styles from '../styles/ConnectWallet.module.css';
import Image from 'next/image';
import img from '../img';

const ConnectWallet = () => {

    const [activeBtn, setActiveBtn] = useState(1);

    const providers = [
        {
            id: 1,
            name: 'Metamask',
            provider: img.provider
        },
        {
            id: 2,
            name: 'OKX Wallet',
            provider: img.provider1
        },
        {
          id: 3,
          name: 'Tonkeeper Wallet',
          provider: img.provider2
      }
    ]
  return (
    <div className={styles.connectWallet}>
      <div className={styles.connectWallet_box}>
        <h1>Connect Wallet</h1>
        <p className={styles.connectWallet_box_para}>Connect with one of our available wallet providers or create a new one</p>
        <div className={styles.connectWallet_box_providers}>
          {providers.map((provider) => (
            <div className={`${styles.connectWallet_box_providers_item} ${activeBtn === provider.id ? styles.active : ''}`} key={provider.id} onClick={() => setActiveBtn(provider.id)}>
              <Image className={styles.connectWallet_box_providers_item_img} src={provider.provider} alt='provider' width={50} height={50} />
              <p>{provider.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ConnectWallet