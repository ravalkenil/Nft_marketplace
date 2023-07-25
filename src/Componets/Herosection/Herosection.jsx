import React ,{useState ,useEffect ,useContext}from 'react'
import Image from 'next/image'

// internal

import Style from "./Herosection.module.css";
import {Button}  from "../Com_index";   
import images from "../../img"

// Smart contract imports
import { NFtmarketplaceContext} from "../../context/NFTmarketplaceContext";

const Herosection = () => {
  const {titledata } = useContext(NFtmarketplaceContext)
  return (
    <div className={Style.herosection}>
        <div className={Style.herosection_box}>
            <div className={Style.herosection_box_left}>
                <h1>{titledata}</h1>
                <p>Discover the most outstanding nfts</p>
                <Button btnName="Start your search" />
            </div>
            <div className={Style.herosection_box_right}>
                <Image src={images.hero} alt="hero section" width={600} height={600} />
                
            </div>
        </div>
    </div>
  )
}

export default Herosection;