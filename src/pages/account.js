import React,{useEffect,useState,useMemo ,useCallback,useContext}from 'react';
import Image from 'next/image';
import { useDropzone } from 'react-dropzone';

// Internal imports 
import Style from "../styles/account.module.css";
import images from "../img";
import Form from '../Accountpage/Form/Form';

const Account = () => {
    const [Fileurl, setFileurl] = useState(null);

  return (
    <div className={Style.Account}>
        <div className={Style.Account_info}>
            <h1>Profile settings</h1>
            <p>You can set preferred display name, create your profile URL and manage
          other personal settings.</p>
        </div>
        <div className={Style.Account_box}>
            <div className={Style.Account_box_img}>
                <input />
                <Image src={images.user1} alt='Account upload' width={150} height={150} className={Style.Account_box_img_img}/>
                <p className={Style.Account_box_img_para}>Change image</p>
            </div>
            <div className={Style.Account_box_from}>
                <Form />
            </div>
        </div>
    </div>
  )
}

export default Account