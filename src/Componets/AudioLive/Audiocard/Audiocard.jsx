import React,{useEffect,useState} from 'react'
import Image from 'next/image';
import { AiFillHeart ,AiOutlineHeart} from 'react-icons/ai';
import { TbPlayerPlay,TbPlayerPause } from 'react-icons/tb';

// Internal imports
import Style from "./Audiocard.module.css";
import images from "../../../img";
import { Likeprofile } from '@/Componets/Com_index';

const Audiocard = () => {
  const [like, setLike] = useState(false)
  const [play, setPlay] = useState(false)

  const likenft=()=>{
    if(!like){
      setLike(true)
    }else{
      setLike(false)
    }
  }

  const Playmusic=()=>{
    if(!play){
      setPlay(true)
    }else{
      setPlay(false)
    }
  }
  return (
    <div className={Style.audiocard}>
        <div className={Style.audiocard_box}>
            <div className={Style.audiocard_box_like_time}>
                <div className={Style.audiocard_box_like} onClick={()=>likenft()}>
                    {
                      like ?(
                        <AiFillHeart className={Style.audiocard_box_like_icon}/>
                      ):(
                        <AiOutlineHeart className={Style.audiocard_box_like_icon_unlike}/>
                      )
                    }
                    <span>24</span>
                </div>
                <div className={Style.audiocard_box_time}>
                    <div className={Style.audiocard_box_like_time_remaing}>
                        <small>Remaing time</small>
                        <h5>3h : 15m : 20s</h5>
                    </div>
                </div>
            </div>
            <div className={Style.audiocard_box_player}>
                    <Image src={images.musiceWave} alt='music'  width={200} />
              <div className={Style.audiocard_box_musicplayer} onClick={()=>Playmusic()}>
                      {
                        play ?(
                          <div className={Style.audiocard_box_musicplayer_icon}>
                            <TbPlayerPause/>
                          </div>
                        ):(
                          <div className={Style.audiocard_box_musicplayer_icon}>
                            <TbPlayerPlay/>
                          </div>
                        )
                      }
              </div>
            </div>
       
          <div className={Style.audiocard_box_details}>
              <div className={Style.audiocard_box_details_info}>
                    <h4>NFT music #1123</h4>
                    <div className={Style.audiocard_box_details_info_price}>
                      <small>Price</small>
                      <p>$3,221.22</p>
                    </div>
              </div>
              <div className={Style.audiocard_box_details_stock}>
                    <Likeprofile/>
                    <small>24 in stock</small>
              </div>
          </div>
          <div className={Style.audiocard_box_img}>
              <Image src={images.creatorbackground10} alt='background' width={392.5} height={410}/>
          </div>
        </div>
    </div>
  )
}

export default Audiocard