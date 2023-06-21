import React from 'react'
import Image from 'next/image';
import { TiSocialFacebook ,TiSocialLinkedin,TiSocialTwitter,TiSocialYoutube,TiSocialInstagram,TiArrowSortedDown} from "react-icons/ti";

// Internal import
import Style from "./Collectionprofile.module.css";
import images from "../../img";

const Collectionprofile = () => {

    const CardArray = [1,2,3,4];

  return (
    <div className={Style.collectionprofile}>
        <div className={Style.collectionprofile_box}>
            <div className={Style.collectionprofile_box_left}>
            <Image src={images.nft_image_1} alt='nft image' width={400} height={400} className={Style.collectionprofile_box_left_img}/>
            <div className={Style.collectionprofile_box_left_social}>
                <a href="#"> <TiSocialFacebook/> </a>
                <a href="#"> <TiSocialLinkedin/> </a>
                <a href="#"> <TiSocialTwitter/> </a>
                <a href="#"> <TiSocialYoutube/> </a>
            </div>
            </div>
            <div className={Style.collectionprofile_box_middle}>
                <h1>Awesome NFTs collection </h1>
                <p>
                    Karafura is home to 5,555 generative arts where colors regin suprme. Leave the drab reality and Enteratainment
                </p>
                <div className={Style.collectionprofile_box_middle_box}>
                    {
                        CardArray.map((el,i)=> (
                            <div className={Style.collectionprofile_box_middle_box_item} key={i+1}>
                                <small>Floor Price</small>
                                <p>${i+1}9500000</p>
                                <span>+{i+2}.11%</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Collectionprofile