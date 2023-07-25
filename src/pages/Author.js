import React, {useEffect,useState ,useContext} from 'react';

// Internal import

import Style from "../styles/Author.module.css";
import { Banner ,Nftcardtwo} from '@/Collectionpage/collectionindex';
import { Brand ,Title } from '@/Componets/Com_index';
import Followertabcard from '@/Componets/Followertab/Followertabcard/Followertabcard';
import images from "../img";
import { Authorprofilecard,Authortaps,Authornftcard} from '@/Authorpage/Comindex';

// Import Smart contract data

import { NFtmarketplaceContext } from '@/context/NFTmarketplaceContext';

const Author = () => {
    const followerArray = [
        {
          background: images.creatorbackground1,
          user: images.user1,
        },
        {
          background: images.creatorbackground2,
          user: images.user2,
        },
        {
          background: images.creatorbackground3,
          user: images.user3,
        },
        {
          background: images.creatorbackground4,
          user: images.user4,
        },
        {
          background: images.creatorbackground5,
          user: images.user5,
        },
        {
          background: images.creatorbackground6,
          user: images.user6,
        },
      ];

    const [collectiables, setCollectiables] = useState(true);
    const [created, setCreated] = useState(false);
    const [like, setLike] = useState(false);
    const [follower, setFollower] = useState(false);
    const [following, setFollowing] = useState(false);

    // import contract
    const { FetchingNftorListedNft ,  currentAcc} = useContext(NFtmarketplaceContext)

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
        <Followertabcard i={i} el={el} />
      ))}
    </div>

    <Brand />
  </div>

  )
}

export default Author