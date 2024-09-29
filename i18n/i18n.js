import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { Fillter } from '../components/ConponentsIndex';

const resources = {
  en: {
    translation: {
      slogan: 'NDV is the world\'s first and largest NFT marketplace',
      hero: 'extraordinary NFTs',
      discover: 'Discover',
      helpCenter: 'Help Center',
      language: 'Language',
      search: 'Search',
      createNFT: 'Create ',
      connect: 'Connect',
      ExploreNow: 'Explore Now',
      text:'Discover, collect, and sell',
      add_buy: 'Add & Buy',
      NFTs: 'NFTs',
      Music: 'Music',
      Art: 'Art',
      Sports: 'Sports',
      HyperCard: 'Hyper Card',
      LatestNFT: 'Latest NFT',
      slogan2:'Discover out the most outstanding NFTs',
      Filter: 'Filter',
      images: 'Images',
      Creators: 'Creators',
    }
  },
  vi: {
    translation: {
      slogan: 'NDV là thị trường NFT đầu tiên và lớn nhất thế giới',
      hero: 'Đa dạng NFT đặc biệt',
      discover: 'Khám phá',
      helpCenter: 'Trung tâm trợ giúp',
      language: 'Ngôn ngữ',
      search: 'Tìm kiếm',
      createNFT: 'Tạo NFT',
      connect: 'Kết nối',
      ExploreNow: 'Khám phá ngay',
      text:'khám phá,sưu tầm và mua, bán',
      add_buy: 'thêm & Mua',
      NFTs: 'NFTs',
      Music: 'Nghe nhạc',
      Art: 'Tranh vẽ',
      Sports: 'Thể thao',
      HyperCard: 'Siêu xe',
      LatestNFT: 'Những NFT mới nhất',
      slogan2:'Khám phá những NFT nổi bật nhất',
      Filter: 'Bộ lọc',
      images: 'Hình ảnh',
      Creators: 'Nhà sáng tạo',
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
