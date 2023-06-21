import React,{useState,useEffect}from 'react';
import Image from 'next/image';
import { BsImage } from 'react-icons/bs';
import { AiFillHeart ,AiOutlineHeart} from 'react-icons/ai';
import { MdVerified,MdTimer } from 'react-icons/md';

// Internal imports
import Style from "./Nftcardtwo.module.css";
import { Likeprofile } from '@/Componets/Com_index';

const Nftcardtwo = ({Nftdata}) => {
    const [like, setlike] = useState(false);
    const [likeinc, setlikeinc] = useState(21);

    const likeNFT=()=>{
      if(!like){
        setlike(true);
        setlikeinc(23);
      }else{
        setlike(false);
        setlikeinc(23+1);
      }
    }
  return (
    <div className={Style.NFTCardTwo}>
      {Nftdata.map((el, i) => (
        <div className={Style.NFTCardTwo_box} key={i + 1}>
          <div className={Style.NFTCardTwo_box_like}>
            <div className={Style.NFTCardTwo_box_like_box}>
              <div className={Style.NFTCardTwo_box_like_box_box}>
                <BsImage className={Style.NFTCardTwo_box_like_box_box_icon} />
                <p onClick={() => likeNFT()}>
                  {like ? <AiOutlineHeart /> : <AiFillHeart />}
                 
                  <span>{likeinc + 1}</span>
                </p>
              </div>
            </div>
          </div>

          <div className={Style.NFTCardTwo_box_img}>
            <Image
              src={el}
              alt="NFT"
              width={340}
              height={320}
              objectFit="cover"
              className={Style.NFTCardTwo_box_img_img}
            />
          </div>

          <div className={Style.NFTCardTwo_box_info}>
            <div className={Style.NFTCardTwo_box_info_left}>
              <Likeprofile />
              <p>Clone #{i + 1}</p>
            </div>
            <small>4{i + 2}</small>
          </div>

          <div className={Style.NFTCardTwo_box_price}>
            <div className={Style.NFTCardTwo_box_price_box}>
              <small>Current Bid</small>
              <p>1{i + 5}.000 ETH</p>
            </div>
            <p className={Style.NFTCardTwo_box_price_stock}>
              <MdTimer /> <span>{i + 1} hours left</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Nftcardtwo