import React,{useState} from 'react'
import Image from 'next/image';
import { MdVerified } from 'react-icons/md';
import { TiTick } from 'react-icons/ti';

// Internal imports
import Style from "./Followertabcard.module.css";
import images from "../../../img";

const Followertabcard = ({i,el}) => {
  const [follwing, setFollwing] = useState(false);
  console.log(el);
  const followMe=()=>{
    if(!follwing){
      setFollwing(true)
    }else{
      setFollwing(false)
    }
  }

  return (
    <div className={Style.followertabcard}>
      <div className={Style.followertabcard_rank}>
          <p>
            #{i+1} <span>🏅</span> 
          </p>
      </div>
      <div className={Style.followertabcard_box}>
          <div className={Style.followertabcard_box_img}>
              <Image  src={images.creatorbackground1 ||el.background   } className={Style.followertabcard_box_img_img} alt='Profile background' width={470} height={300}/>
          </div>
          <div className={Style.followertabcard_box_profile}>
              <Image className={Style.followertabcard_box_profile_img} alt='Picture' width={100} height={100} src={images.user1 || el.user }/>
          </div>
          <div className={Style.followertabcard_box_info}>
              <div className={Style.followertabcard_box_info_name} >
                  <h4>{(el.seller).slice(0,12)}{""} <span><MdVerified/></span></h4>
                  <p>{el.total} ETH</p>
              </div>
              <div className={Style.followertabcard_box_info_following}>
                {
                  follwing ? (
                    <a onClick={()=>followMe()}>
                      Follow{""} <span> <TiTick/> </span>
                    </a> 
                  ):(
                    <a onClick={()=>followMe()}>
                      Following
                    </a>
                  )
                }
              </div>
          </div>
      </div>
    </div>
  )
}

export default Followertabcard