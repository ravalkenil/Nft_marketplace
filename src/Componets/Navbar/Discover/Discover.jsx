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
      link : "Searchpage"
    },
    {
      name : "Author profile",
      link : "Author"
    },
    {
      name : "NFT Details",
      link : "Nftdetails"
    },{
      name : "Account Setting",
      link : "account"
    },{
      name : "Upload NFT",
      link : "upload_nft"
    }, {
      name : "Connect Wallet",
      link : "connectWallet"
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