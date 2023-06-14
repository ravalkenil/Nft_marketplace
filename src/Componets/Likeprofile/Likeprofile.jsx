import React from 'react'
import Image from 'next/image'

// Internal imports
import Style from "./Likeprofile.module.css";
import images from "../../img";


const Likeprofile = () => {
    const imageArray=[images.user1,images.user2,images.user3,images.user4];
     
  return (
    <div className={Style.like}>
        {
           imageArray.map((el,i)=>{
            return(
                <div className={Style.like_box} key={i+1}>
                    <Image src={el} width={15} height={15} className={Style.like_box_img}/>
                </div>
            )
           }) 
        }
    </div>
  )
}

export default Likeprofile