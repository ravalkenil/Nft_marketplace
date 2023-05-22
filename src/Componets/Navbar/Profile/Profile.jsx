import React from 'react'
import Image from 'next/image'
import {FaUserAlt ,FaRegImage,FaUserEdit}  from "react-icons/fa"
import { MdHelpCenter } from 'react-icons/md'
import {TbDownloadOff,TbDownload} from "react-icons/tb"

// internal
import Style from "./Profile.module.css";
import images from "../../../img"
import Link from 'next/link'
const Profile = () => {
  return (
    <div className={Style.Profile}>
      <div className={Style.Profile_account}>
        <Image src={images.user1} alt="user profile " width={50} height={50} className={ Style.profile_account_img}/>
        <div className={Style.profile_account_info}>
          <p>kenil raval</p>
          <small>X0514265285615dsd5454sa..</small>
        </div>
      </div> 
      <div className={Style.profile_menu}>
        <div className={Style.profile_menu_one}>

          <div className={Style.profile_menu_one_item}>
            <FaUserAlt/>
            <p><Link href={{pathname:"/myprofile"}}> My profile </Link></p>
          </div>

          <div className={Style.profile_menu_one_item}>
            <FaRegImage/>
            <p><Link href={{pathname:"/my-items"}}> My Items </Link></p>
          </div>

          <div className={Style.profile_menu_one_item}>
            <FaUserEdit/>
            <p><Link href={{pathname:"/edit-profile"}}> Edit profile </Link></p>
          </div>

        </div>

        <div className={Style.profile_menu_two}>
          <div className={Style.profile_menu_one_item}>
            <MdHelpCenter/>
            <p>
              <Link href={{pathname:"/help"}}>Help</Link>
            </p>
          </div>
          <div className={Style.profile_menu_one_item}>
            <TbDownload/>
            <p>
              <Link href={{pathname:"/disconnect"}}>Disconnect</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile