import React,{useState,useEffect} from 'react';
import Image from 'next/image';
import { AiFillHeart ,AiOutlineHeart} from 'react-icons/ai';
import { TbPlayerPlay,TbPlayerPause } from 'react-icons/tb';

// Internal imports
import Style from "./Audiocardsmall.module.css";
import images from "../../../img";
import { Likeprofile } from '@/Componets/Com_index';

const Audiocardsmall = () => {
    const [play, setplay] = useState(false);

    const playmusic =()=>{
        if(!play){
            setplay(true)
        }else{
            setplay(false)
        }
    }
  return (
    <div className={Style.audioplayer}>
        <div className={Style.audioplayer_box}>
            <Image src={images.creatorbackground1} alt='music' width={100} height={100} className={Style.audioplayer_box_img}/>
            <div className={Style.audioplayer_box_info}>
                    <h4>NFT music #1142</h4>
                    <div className={Style.audioplayer_box_info_box}>
                        <Likeprofile/>
                        <div className={Style.audioplayer_box_info_box_price}>
                            <small> Price </small>
                            <p> 1.00 ETH </p>
                        </div>
                    </div>
            </div>
            <div className={Style.audioplayer_box_playbtn} onClick={()=>playmusic()}>
                {
                    play?(
                        <TbPlayerPause/>
                    ):(
                        <TbPlayerPlay/>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default Audiocardsmall