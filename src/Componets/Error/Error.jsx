import React,{useState,useEffect,useContext} from 'react';
import Image from 'next/image';

// internal imports
import Style from './Error.module.css';
import images from "../../img";

// Smart contract imports
import { NFtmarketplaceContext }  from "../../context/NFTmarketplaceContext";

const Error = () => {
    const { error,  setopenError } = useContext(NFtmarketplaceContext);
    
  return (
    <div className={Style.Error} onClick={()=> setopenError(false)}>
        <div className={Style.Error_box}>
            <div className={Style.Error_box_info}>
               <Image alt='error'  src={images.errorgif} width={200} height={200} objectFit='cover' className={Style.Error_box_info_img} />
               {/* <p>{error}</p> */}
               
            </div> 
        </div>
    </div>
  )
}

export default Error