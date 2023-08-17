import React,{useContext,useEffect,useState} from 'react';


// Internal imports
import Style from "../styles/Index.module.css";
import {Herosection,Service,Bignftslider,Subscribe ,Title,Category,Filter,NFTcard ,Collection ,Followertab ,AudioLive,Slider ,Brand ,Video} from "../Componets/Com_index";
import { getTopCreators } from '../TopCreators/TopCreators';

// Importing contract data
import { useNFtmarketplaceContext } from "../context/NFTmarketplaceContext";



const Index = () => {

    const {  useChackifWalletconnect ,FetchNFt} =useContext(useNFtmarketplaceContext);
    const [nfts, setnfts] = useState([]);
    const [nftcopy, setnftcopy] = useState([]);
    
    // Creator List
    const creators= getTopCreators(nfts);
    console.log(creators);

    useEffect(() => {
      const Chack=async ()=>{
        await useChackifWalletconnect();
      }
      Chack();
    }, [])

    useEffect(() => {
      FetchNFt().then((item)=>{
        setnfts(item);
        setnftcopy(item)
        console.log("--------------",item);
        console.log("---",nfts);
      })
    }, [])
  
  return (
    <div className={Style.homepage}>
      <Herosection/> 
      <Service/> 
      <Bignftslider/> 
      <Title heading="Audio collection" paragraph="Discover the most tranding NFTs"/> 
      <AudioLive/>
      <Title heading="new collection" paragraph="Discover the most tranding NFTs"/>
      <Followertab  Topcreator={creators}/>
      <Slider/> 
      <Collection/> 
      <Title heading="Fetured NFTs" paragraph="Discover the most tranding NFTs"/>
      <Filter/> 
      <NFTcard  NFTdata={nfts}/> 
      <Title heading="Browse by category" paragraph="Explore the NFTs in the most featured categories"/>
      <Category/> 
      <Subscribe/> 
      <Brand/>
      <Video/>
    </div>
  )
}

export default Index