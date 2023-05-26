import React,{useEffect,useState} from 'react'
import Image from 'next/image';
import Link from 'next/link';

// ----import icons

import {MdNotifications} from "react-icons/md";
import {BsSearch} from "react-icons/bs";
import { CgMenuLeft , CgMenuRight} from "react-icons/cg";


// INTERNAL IMPORT 

import Style from "./Navbar.module.css";
import {Discover,Helpcenter,Notification,Profile,Sidebar} from "./index"
import {Button} from '../Com_index';
import images from "../../img"

const Navbar = () => {
  // --usestate
  const [discover, setdiscover] = useState(false)
  const [help, sethelp] = useState(false)
  const [notification, setnotification] = useState(false)
  const [profile, setprofile] = useState(false)
  const [opensidemenu, setopensidemenu] = useState(false)

  // console.log("----------------------");

  const openMenu = async(e)=>{
    
    const btnText =e.target.innerText;
    if(btnText == "Discover"){
      setdiscover(true)
      sethelp(false)
      setnotification(false)
      setprofile(false)
    }
    else if(btnText == "Help Center"){
      setdiscover(false)
      sethelp(true)
      setnotification(false)
      setprofile(false)
    }
    else{
      setdiscover(false)
      sethelp(false)
      setnotification(false)
      setprofile(false)
    }
  }

  const opennotification =()=>{
    if(!notification){
      setnotification(true);
      setdiscover(false)
      sethelp(false)
      setprofile(false)
    }else{
      setnotification(false)
    }
  }

  const openProfile =()=>{
    if(!profile){
      setprofile(true)
      sethelp(false)
      setdiscover(false)
      setnotification(false);
    }else{
      setprofile(false)
    }
  }

  const openSideBar=()=>{
    if(!opensidemenu){
       setopensidemenu(true)
    }else{
      setopensidemenu(false)
    }
  }
  
  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
        <div className={Style.navbar_container_left}>
          <div className={Style.logo}>
            <Image src={images.logo} alt='NFT MARKETPLACE' width={100} height={100}/>
          </div>
          <div className={Style.navbar_container_left_box_input}>
            <div className={Style.navbar_container_left_box_input_box}>
              <input type="text" placeholder='Search Nft '/>
              <BsSearch onClick={()=>{}}  className={Style.search_icon}/>
            </div>
          </div>
        </div>
        {/* end of left section */}
        <div className={Style.navbar_container_right}>
          <div className={Style.navbar_container_right_discover}>

            {/* discover menu */}
        
            <p onClick={(e)=>openMenu(e)}>Discover</p>
            {
              discover && (
                  <div className={Style.navbar_container_right_discover_box}>
                    <Discover/>
                  </div>
              )
            }
          </div>
            
            {/* help center */}

            <div className={Style.navbar_container_right_help}>
              <p onClick={(e)=>openMenu(e)} >Help Center</p>
              {
              help && (
                  <div className={Style.navbar_container_right_help_box}>
                    <Helpcenter/>
                  </div>
              )
            }
            </div>

            {/* Notifications */}
            <div className={Style.navbar_container_right_notify}>
                <MdNotifications className={Style.notify} onClick={()=>opennotification()}/>
                {
                  notification && <Notification/>
                }
            </div>

            {/* create button sections */}
            <div className={Style.navbar_container_right_button}>
              <Button BtnText="Create" />
            </div>

            {/* userprofile  */}
            <div className={Style.navbar_container_right_profile_box}>
              <div className={Style.navbar_container_right_profile}>
                <Image src={images.user1} alt='Profile' width={40} height={40} onClick={()=>openProfile()} className={Style.navbar_container_right_profile}/>
                {
                  profile && <Profile/>
                }
              </div>
            </div>

            {/* Menu button */}

            <div className={Style.navbar_container_right_menuBtn}>
              <CgMenuRight className={Style.menuIcon} onClick={()=> openSideBar()}/>
            </div>
          </div>
        </div>
        {/* side bar componets */}
      {
        !opensidemenu && (
          <div className={Style.Sidebar}>
            <Sidebar setopensidemenu={setopensidemenu}/>
          </div>
        )
      }
      </div>
  )
}

export default Navbar