import React,{useEffect,useState ,useRef} from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// internal import
import Style from "./Slider.module.css";
import images from "../../../img";
import { Likeprofile } from '@/Componets/Com_index';

const Slider_card = () => {

  return (
    <motion.div className={Style.slidercard}>
        <div className={Style.slidercard_box}>
            <motion.div className={Style.slidercard_box_img}>
                <Image src={images.creatorbackground1} alt='slider profile' width={350} height={300} objectFit='cover' className={Style.slidercard_box_img_img}/> 
            </motion.div>
            <div className={Style.slidercard_box_title}>
                <p>NFT Video #1222</p> 
                <div className={Style.slidercard_box_title_like}> 
                    <Likeprofile/>
                    <p><small> 1 of 100</small></p>
                </div>
            </div>
            <div className={Style.slidercard_box_price}>
                <div className={Style.slidercard_box_price_box}>
                    <small> Current Bid </small>
                    <p>1.000 ETH</p>
                </div>
                <div className={Style.slidercard_box_price_time}> 
                    <small>Reaming time</small>
                    <p>3h : 15m :20s</p>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Slider_card