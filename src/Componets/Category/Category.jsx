import React from 'react';
import Image from 'next/image';
import { BsCircleFill } from 'react-icons/bs';
// Internal import 

import Style from "./Category.module.css";
import images from "../../img";

const Category = () => {
  const Categoryarray=[1,2,3,4,5]; 
  return (
    <div className={Style.box_category}>
    <div className={Style.category}>
        
        {
            Categoryarray.map((el,i)=>{
                return(
                   
                        <div className={Style.category_box} key={1+1}>
                        <Image src={images.creatorbackground1} className={Style.category_box_img} alt="Background image" width={350} height={150} objectFit='cover' />
                        <div className={Style.category_box_title}>
                            <span>
                               <BsCircleFill />
                            </span>
                            <div className={Style.category_box_title_info}>
                                <h4>Enteratainment</h4>
                                <small>1994 NFTs</small>
                            </div>
                        </div>
                       </div>
                       
                )
            })
        }
        
    </div>
    </div>
  )
}

export default Category