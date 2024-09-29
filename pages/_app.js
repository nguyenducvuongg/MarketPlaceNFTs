import "../styles/globals.css";
import { Navbar, Footer } from "../components/ConponentsIndex";
import {NFTMarketPlaceProvider} from '../Context/NFTMarketPlaceContext'

const MyApp = ({ Component, pageProps }) => (
  <div>
    <NFTMarketPlaceProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </NFTMarketPlaceProvider>
  </div>
);

export default MyApp;
