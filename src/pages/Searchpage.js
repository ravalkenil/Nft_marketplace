import React ,{ useEffect, useState , useContext} from 'react';

// Internal imports
import Style from "../styles/Searchpage.module.css";
import { Slider,Brand ,Filter ,Loader} from '../Componets/Com_index';
import { SearchBar } from '../Searchcomponts/SearchBarindex';
import { Nftcardtwo ,Banner} from '../Collectionpage/collectionindex';
import images from "../img";

// import smart contract
import { useNFtmarketplaceContext } from "../context/NFTmarketplaceContext"

const Searchpage = () => {

    const {FetchNFt}= useContext(useNFtmarketplaceContext);
    const [nfts, setnfts] = useState([]);
    const [nftcopy, setnftcopy] = useState([]);

    useEffect(() => {
      FetchNFt().then((item)=>{
        setnfts(item);
        setnftcopy(item)
        console.log("--------------",item);
        console.log("---",nfts);
      })
    }, [])
    
    const onHandleSearch = (value)=>{
      const filteredNFTs=nfts.filter(({name})=> name.toLowerCase().includes(value.toLowerCase()))
      if(filteredNFTs.length===0){
        setnfts(nftcopy)
      }else{
        setnfts(filteredNFTs)
      }
    }

    const onClearSearch = ()=>{
      if(nfts.length && nftcopy.length){
        setnfts(nftcopy)
      }
    }
    
    // const collectionArray = [
    //   images.nft_image_1,
    //   images.nft_image_2,
    //   images.nft_image_3,
    //   images.nft_image_1,
    //   images.nft_image_2,
    //   images.nft_image_3,
    //   images.nft_image_1,
    //   images.nft_image_2,
    // ];
    return (
      <div className={Style.searchPage}>
        <Banner bannerImage={images.creatorbackground2} />
        <SearchBar onHandleSearch={onHandleSearch}  onClearSearch={onClearSearch}/>
        <Filter />
        {nfts.length == 0 ? <Loader/> : <Nftcardtwo Nftdata={nfts} /> }       
        <Slider />
        <Brand />
      </div>
    );
  };

export default Searchpage