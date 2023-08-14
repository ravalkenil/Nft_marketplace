import React from 'react';
import Image from 'next/image';

// Internal import
import Style from "./Loader.module.css";
import images from "../../img";

const Loader = () => {
  return (
    <div className={Style.loader}>
        <div className={Style.loader_box}>
            <div className={Style.loader_box_img}>
                {/* <img src={images.loader} alt="loader" width={200} height={200} className={Style.loader_box_img_img} objectFit="cover" /> */}
                <Image src={images.loader2} alt="loader" width={200} height={200} className={Style.loader_box_img_img} objectFit="cover"/>
            </div> 
        </div> 
    </div> 
  )
}

export default Loader