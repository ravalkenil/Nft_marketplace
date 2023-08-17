import React from 'react'
import Image from 'next/image'
import {FaUserAlt ,FaRegImage,FaUserEdit}  from "react-icons/fa"
import { MdHelpCenter } from 'react-icons/md'
import {TbDownloadOff,TbDownload} from "react-icons/tb"

// internal
import Style from "./Profile.module.css";
import images from "../../../img"
import Link from 'next/link'
const Profile = ({currentAcc}) => {
  return (
    <div className={Style.Profile}>
      <div className={Style.Profile_Account}>
        <Image src={images.user1} alt="user profile " width={50} height={50} className={ Style.profile_Account_img}/>
        <div className={Style.profile_Account_info}>
          <p>kenil raval</p>
          <small>{currentAcc.slice(0,20)}...</small>
        </div>
      </div> 
      <div className={Style.profile_menu}>
        <div className={Style.profile_menu_one}>

          <div className={Style.profile_menu_one_item}>
            <FaUserAlt/>
            <p><Link href={{pathname:"/Author"}}> My profile </Link></p>
          </div>

          <div className={Style.profile_menu_one_item}>
            <FaRegImage/>
            <p><Link href={{pathname:"/Author"}}> My Items </Link></p>
          </div>

          <div className={Style.profile_menu_one_item}>
            <FaUserEdit/>
            <p><Link href={{pathname:"/Account"}}> Edit profile </Link></p>
          </div>

        </div>

        <div className={Style.profile_menu_two}>
          <div className={Style.profile_menu_one_item}>
            <MdHelpCenter/>
            <p>
              <Link href={{pathname:"/contactus"}}>Help</Link>
            </p>
          </div>
          <div className={Style.profile_menu_one_item}>
            <TbDownload/>
            <p>
              <Link href={{pathname:"/aboutus"}}>Aboutus</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile