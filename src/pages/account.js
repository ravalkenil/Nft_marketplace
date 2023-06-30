import React,{useEffect,useState,useMemo ,useCallback,useContext}from 'react';
import Image from 'next/image';
import { useDropzone } from 'react-dropzone';

// Internal imports 
import Style from "../styles/account.module.css";
import images from "../img";
import Form from '@/Accountpage/Form/Form';

const account = () => {
    const [fileurl, setFileurl] = useState(null);

  return (
    <div className={Style.account}>
        <div className={Style.account_info}>
            <h1>Profile settings</h1>
            <p>You can set preferred display name, create your profile URL and manage
          other personal settings.</p>
        </div>
        <div className={Style.account_box}>
            <div className={Style.account_box_img}>
                <input />
                <Image src={images.user1} alt='account upload' width={150} height={150} className={Style.account_box_img_img}/>
                <p className={Style.account_box_img_para}>Change image</p>
            </div>
            <div className={Style.account_box_from}>
                <Form />
            </div>
        </div>
    </div>
  )
}

export default account