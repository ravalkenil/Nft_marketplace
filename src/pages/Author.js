import React, {useEffect,useState ,useContext} from 'react';

// Internal import

import Style from "../styles/Author.module.css";
import Banner  from '../Collectionpage/Banner/Banner';
import Nftcardtwo  from "../Collectionpage/Nftcardtwo/Nftcardtwo"
import { Brand ,Title } from '../Componets/Com_index';
import Followertabcard from '../Componets/Followertab/Followertabcard/Followertabcard';
import images from "../img";
import { Authorprofilecard,Authortaps,Authornftcard} from '../Authorpage/Comindex';

// Import Smart contract data

import { useNFtmarketplaceContext } from '../context/NFTmarketplaceContext';

const Author = () => {
    const followerArray = [
        {
          background: images.creatorbackground1,
          user: images.user1,
          seller:"dawdwesdfrw3r3246detwefdv"
        },
        {
          background: images.creatorbackground2,
          user: images.user2,
          seller:"dawdwesdfrw3r3246detwefdv"
        },
        {
          background: images.creatorbackground3,
          user: images.user3,
          seller:"dawdwesdfrw3r3246detwefdv"
        },
        {
          background: images.creatorbackground4,
          user: images.user4,
          seller:"dawdwesdfrw3r3246detwefdv"
        },
        {
          background: images.creatorbackground5,
          user: images.user5,
          seller:"dawdwesdfrw3r3246detwefdv"
        },
        {
          background: images.creatorbackground6,
          user: images.user6,
          seller:"dawdwesdfrw3r3246detwefdv"
        },
      ];

    const [collectiables, setCollectiables] = useState(true);
    const [created, setCreated] = useState(false);
    const [like, setLike] = useState(false);
    const [follower, setFollower] = useState(false);
    const [following, setFollowing] = useState(false);

    // import contract
    const { FetchingNftorListedNft ,  currentAcc} = useContext(useNFtmarketplaceContext)

    const [nfts, setnfts] = useState([])
    const [Mynfts, setMynfts] = useState([])

    useEffect(()=>{
      FetchingNftorListedNft("fetchItemListed").then((items)=>{
        console.log("fetchItemListed",items);
        setMynfts(items)
      })
    },[]);

    useEffect(()=>{
      FetchingNftorListedNft("fetchMyNft").then((items)=>{
        console.log("fetchMyNft",items);
        setnfts(items)
      })
    },[]);

  return (
    <div className={Style.author}>
    <Banner bannerImage={images.creatorbackground2} />
    <Authorprofilecard className={Style.author_banner} currentAcc={currentAcc}/>
    <Authortaps
      setCollectiables={setCollectiables}
      setCreated={setCreated}
      setLike={setLike}
      setFollower={setFollower}
      setFollowing={setFollowing}
    />
    <Authornftcard
      collectiables={collectiables}
      created={created}
      like={like}
      follower={follower}
      following={following}
      nfts={nfts}
      Mynfts={Mynfts}
    />
    <Title
      heading="Popular Creators"
      paragraph="Click on music icon and enjoy NTF music or audio"
    />
    <div className={Style.author_box}>
      {followerArray.map((el, i) => (
        <Followertabcard i={i} el={el} key={i}/>
      ))}
    </div>

    <Brand />
  </div>
  )
}

export default Author