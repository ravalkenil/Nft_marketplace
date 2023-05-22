import React from 'react'
import Image from 'next/image'

// internal
import Style from "./Notification.module.css";
import images from "../../../img"

const Notification = () => {
  return (
    <div className={Style.Notification}>
      <p>Notification</p>
      <div className={Style.Notification_box}>
        <div className={Style.Notification_box_img}>
          <Image  src={images.user1} alt='profile image'  width={50} height={50}/>
        </div>
        <div className={Style.Notification_box_info}>
          <h4>kenil raval</h4>
          <p>Measure action your user......</p>
          <small> 3 minutes</small>
        </div>
        <span className={Style.Notification_box_new}></span>
      </div>
    </div>
  )
}

export default Notification