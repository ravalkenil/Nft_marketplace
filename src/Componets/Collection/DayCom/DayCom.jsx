import React from 'react'
import Image from 'next/image';
import { MdVerified } from 'react-icons/md';

// Internal imports
import Style from "./DayCom.module.css";
import images from "../../../img";

const DayCom = () => {
  return (
    <div className={Style.daycom}>
        <div className={Style.daycom_box}>
            <div className={Style.daycom_box_img}>
                <Image src={images.creatorbackground1} className={Style.daycom_box_img_img} alt='Profile background' width={500} height={300} objectfit="covers"/>
            </div>
            <div className={Style.daycom_box_profile}>
                <Image src={images.creatorbackground2} alt='profile' width={150} height={150} className={Style.daycom_box_img_1} objectfit="covers"/>
                <Image src={images.creatorbackground2} alt='profile' width={150} height={150} className={Style.daycom_box_img_2} objectfit="covers"/>
                <Image src={images.creatorbackground2} alt='profile' width={150} height={150} className={Style.daycom_box_img_3} objectfit="covers"/>
            </div>
            <div className={Style.daycom_box_title}>
                <h2>Amazing collection</h2>
                <div className={Style.daycom_box_title_info}>
                  <div className={Style.daycom_box_title_info_profile}>
                      <Image src={images.user1} alt='profile' width={30} height={30} objectfit="covers" className={Style.daycom_box_title_info_profile_img}/>
                      <p>
                          Creator <span>Kenil Bhai <small><MdVerified/></small></span>
                      </p>
                  </div>
                  <div className={Style.daycom_box_title_info_price}>
                        <small>1.255 ETH</small>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DayCom