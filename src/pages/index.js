import React,{useContext,useEffect,useState} from 'react';


// Internal imports
import Style from "../styles/Index.module.css";
import {Herosection,Service,Bignftslider,Subscribe ,Title,Category,Filter,NFTcard ,Collection ,Followertab ,AudioLive,Slider ,Brand ,Video} from "../Componets/Com_index";

// Importing contract data
import { NFtmarketplaceContext } from "../context/NFTmarketplaceContext";

const index = () => {

  const {  chackifWalletconnect } =useContext(NFtmarketplaceContext);

  useEffect(() => {
    chackifWalletconnect() 
  }, [])
  
  return (
    <div className={Style.homepage}>
      <Herosection/> 
      <Service/> 
      <Bignftslider/> 
      <Title heading="Audio collection" paragraph="Discover the most tranding NFTs"/> 
      <AudioLive/>
      <Title heading="new collection" paragraph="Discover the most tranding NFTs"/>
      <Followertab/>
      <Slider/> 
      <Collection/>
      <Title heading="Fetured NFTs" paragraph="Discover the most tranding NFTs"/>
      <Filter/> 
      <NFTcard/> 
      <Title heading="Browse by category" paragraph="Explore the NFTs in the most featured categories"/>
      <Category/> 
      <Subscribe/> 
      <Brand/>
      <Video/>
    </div>
  )
}

export default index