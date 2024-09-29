import React, { useContext,useEffect } from "react";
import stayles from "../styles/index.module.css";
import { HeroSection,Service,BigNftSlider,Subscribe,Title,Category,Fillter,NFTCard  } from "../components/ConponentsIndex";
import { NFTMarketPlaceContext } from "../Context/NFTMarketPlaceContext";
import '../i18n/i18n';
import { useTranslation } from 'react-i18next';

const index = () => {

  const { t } = useTranslation();

  const { checkIfWalletIsConnected} = useContext(NFTMarketPlaceContext);

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <div className={stayles.homePage}>
      <HeroSection />
      <Service />
      <BigNftSlider />
      <Title heading={`${t('text')}`} paragraph={`${t('slogan2')}`} />
      <Fillter />
      <NFTCard />
      <Title heading={`${t('LatestNFT')}`} paragraph={`${t('slogan')}`} />
      <Category />
      <Subscribe />
      
    </div>
  )
};

export default index;
