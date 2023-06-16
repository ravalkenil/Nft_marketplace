import React from 'react';

// Internal imports
import Style from "../styles/collection.module.css";
import images from "../img";
import { Banner ,Collectionprofile } from '@/Collectionpage/collectionindex';
import { Slider,Brand } from '@/Componets/Com_index';
import Filter from "../Componets/Filter/Filter";



const collection = () => {
  return (
    <div className={Style.collection}>
        <Banner bannerImage={images.creatorbackground1} />
        <Collectionprofile/>
    </div>
  )
}

export default collection