import React from 'react'
import Link from 'next/link'

// internal import 
import Style from "./Discover.module.css"

const Discover = () => {
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
  return (
    <div>{
      discover.map((el,i)=>{
        return (
          <div  key={i+1} className={Style.discover}>
           <Link  href={{pathname:`${el.link}`}}>{el.name}</Link>
          </div>
        )
      })
      }
      
      </div>
  )
}

export default Discover