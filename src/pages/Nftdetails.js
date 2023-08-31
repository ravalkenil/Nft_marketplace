import React ,{ useEffect,useState, useContext } from 'react'
import { useRouter } from 'next/router';
import { useAccount } from 'wagmi';

// Internal imports
import { Button,Category ,Brand } from '../Componets/Com_index';
import Nftdetailspage from '../Nftdetails_page/Nftdetailspage';

// Import contract
import { useNFtmarketplaceContext } from '../context/NFTmarketplaceContext';

const Nftdetails = () => {

    const { currentAcc }= useContext(useNFtmarketplaceContext)
  
    const { address, isConnected } = useAccount()
    const [nft, setnft] = useState({
      image:"",
      tokenId:"",
      name:"",
      owner:"",
      price:"",
      seller:"",
    })
     
    const router= useRouter();

    useEffect(()=>{
      if(!router.isReady) return;
      setnft(router.query);
    },[router.isReady])

    return (
      <div>
        <Nftdetailspage  nft={nft}/>
        <Category />
        <Brand />
      </div>
    );
  };

export default Nftdetails