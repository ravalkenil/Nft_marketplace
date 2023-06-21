import React from 'react';

// Internal imports
import Style from "../styles/collection.module.css";
import images from "../img";
import { Banner ,Collectionprofile ,Nftcardtwo } from '@/Collectionpage/collectionindex';
import { Slider,Brand } from '@/Componets/Com_index';
import Filter from "../Componets/Filter/Filter";



const collection = () => {
  const collectionArray=[images.nft_image_1,images.nft_image_2,images.nft_image_3,images.nft_image_1,images.nft_image_2,images.nft_image_3
   , images.nft_image_1,images.nft_image_2,images.nft_image_3]
  return (
    <div className={Style.collection}>
        <Banner bannerImage={images.creatorbackground1} />
        <Collectionprofile Nftdata={collectionArray}/>
        <Filter/>
        <Nftcardtwo Nftdata={collectionArray}/> 
        <Slider/>
        <Brand/>
    </div>
  ) 
}

export default collection