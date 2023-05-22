import React,{useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {GrClose} from "react-icons/gr";
import { TiSocialFacebook ,TiSocialLinkedin,TiSocialTwitter,TiSocialYoutube,TiSocialInstagram,TiArrowSortedDown} from "react-icons/ti";

// internal 
import Style from "./Sidebar.module.css";
import images from "../../../img";
import Button from "../../Button/Button";
import { Helpcenter } from '..';
const Sidebar = ({setopensidemenu}) => {

  const [openDiscover, setopenDiscover] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);
  
  // disover menu
  const discover=[
    {
      name :"Collection",
      link : "collection"
    },
    {
      name : " Search",
      link : "search"
    },
    {
      name : " Search",
      link : "search"
    },
    {
      name : "Author profile",
      link : "author-profile"
    },
    {
      name : "NFT Details",
      link : "nft-details"
    },{
      name : "Account Setting",
      link : "account-setting"
    },{
      name : "Connect Wallet",
      link : "connect-wallet"
    },{
      name : "Blog",
      link : "blog"
    }
  ]
  // helpcenter
  const helpcenters=[
    {
      name : "About",
      link :"about",
    },
    {
      name : "Contact Us",
      link :"contact-us",
    },{
      name : "Sign Up",
      link :"sign-up",
    },{
      name : "Sign In",
      link :"sign-in",
    },{
      name : "Subscription",
      link :"subscription",
    }
  ]

  const openDiscovermenu=()=>{
    if(!openDiscover){
      setopenDiscover(true)
    }else{
      setopenDiscover(false)
    }
  }

  const openHelpmenu=()=>{
    if(!openHelp){
      setOpenHelp(true)
    }else{
      setOpenHelp(false)
    }
  }

  const closeSidebar=()=>{
    setopensidemenu(false)
  }

  return (
    <div className={Style.sidebar}>
      <GrClose className={Style.sideBar_closebtn} onClick={()=>closeSidebar()}/>
      <div className={Style.sideBar_box}> 
          <Image src={images.logo} alt="logo" width={150} height={150} />
          <p>Discover the most outstnding article </p>
          <div className={Style.sidebar_social}>
              <a href="#">
                <TiSocialFacebook/>
              </a>
              <a href="#">
                <TiSocialInstagram/>
              </a>
              <a href="#">
                <TiSocialLinkedin/>
              </a>
              <a href="#">
                <TiSocialTwitter/>
              </a>
              <a href="#">
                <TiSocialYoutube/>
              </a>
          </div>
      </div>
      <div className={Style.sidebar_menu}>
        <div>
          <div className={Style.sidebar_menu_box} onClick={()=>openDiscovermenu()}>
            <p>Discover</p>
            <TiArrowSortedDown/>
          </div>
          {
            openDiscover && (
              
                <div className={Style.sideBar_discover}>
                  {
                    discover.map((el,i)=>{
                      return(
                         <p key={i+1}>
                          <Link href={{pathname:`${el.link}`}}>
                            {el.name}
                          </Link>
                         </p>
                      )
                    })
                  }
                </div>
            )
          }
        </div>

        <div>
          <div className={Style.sidebar_menu_box} onClick={()=>openHelpmenu()}>
            <p>Help Center</p>
            <TiArrowSortedDown/>
          </div>

          {
            openHelp && (
              <div  className={Style.sidebar}>
                {helpcenters.map((el,i)=>{
                  return(
                    <p key={i+1}>
                      <Link href={{pathname:`${el.link}`}}> {el.name}</Link>
                    </p>
                  )
                })}
              </div>
            )
          }
        </div>
      </div>

      <div className={Style.sideBar_button}>
        <Button btnName="Create"/>
        <Button btnName="Connect Wallet"/>
      </div>
    </div>
  )
}

export default Sidebar