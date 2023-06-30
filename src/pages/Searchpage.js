import React from 'react';

// Internal imports
import Style from "../styles/Searchpage.module.css";
import { Slider,Brand ,Filter} from '@/Componets/Com_index';
import { SearchBar } from '@/Searchcomponts/SearchBarindex';
import { Nftcardtwo ,Banner} from '@/Collectionpage/collectionindex';
import images from "../img";

const Searchpage = () => {
    const collectionArray = [
      images.nft_image_1,
      images.nft_image_2,
      images.nft_image_3,
      images.nft_image_1,
      images.nft_image_2,
      images.nft_image_3,
      images.nft_image_1,
      images.nft_image_2,
    ];
    return (
      <div className={Style.searchPage}>
        <Banner bannerImage={images.creatorbackground2} />
        <SearchBar />
        <Filter />
        <Nftcardtwo Nftdata={collectionArray} />
        <Slider />
        <Brand />
      </div>
    );
  };

export default Searchpage