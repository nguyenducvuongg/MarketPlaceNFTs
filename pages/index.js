import React, { useContext,useEffect } from "react";
import stayles from "../styles/index.module.css";
import { HeroSection,Service,BigNftSlider,Subscribe,Title,Category,Fillter,NFTCard  } from "../components/ConponentsIndex";
import { NFTMarketPlaceContext } from "../Context/NFTMarketPlaceContext";

const index = () => {

  const { checkIfWalletIsConnected} = useContext(NFTMarketPlaceContext);

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <div className={stayles.homePage}>
      <HeroSection />
      <Service />
      <BigNftSlider />
      <Title heading="Discover, collect, and sell NFT" paragraph="Discover out the most outstanding NFTs" />
      <Fillter />
      <NFTCard />
      <Title heading="Latest NFT" paragraph="NDV is the world’s first and largest NFT marketplace" />
      <Category />
      <Subscribe />
      
    </div>
  )
};

export default index;
