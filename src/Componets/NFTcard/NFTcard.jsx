import React,{useState}from 'react';
import Image from 'next/image';
import { AiFillHeart,AiOutlineHeart } from 'react-icons/ai';
import { BsImages } from 'react-icons/bs';

// Internal import
import Style from "./NFTcard.module.css";
import images from "../../img";


const NFTcard = () => {
    const featureArray=[images.nft_image_1,images.nft_image_2,images.nft_image_3,images.nft_image_1,
        images.nft_image_2,images.nft_image_3,images.nft_image_1,images.nft_image_2,images.nft_image_3];

    const [like, setlike] = useState(true);
    const likenft=()=>{
        if(!like ){
            setlike(true)
        }else{
            setlike(false)
        }
    }

  return (
    <div className={Style.NFtcard}>
        { featureArray.map((el,i)=>{
            return(
                <div className={Style.NFTcard_box} key={i+1}>
                    <div className={Style.NFTcard_box_img}>
                        <Image src={el} alt='NFT images' width={600} height={600} className={Style.NFTcard_box_img_img}/>
                    </div> 
                    <div className={Style.NFTcard_box_update}>
                        <div className={Style.NFTcard_box_update_left}>
                            <div className={Style.NFTcard_box_update_left_like} onClick={()=>likenft()}>
                                {like ?( <AiOutlineHeart/>) : (<AiFillHeart className={Style.NFTcard_box_update_left_like_icon}/>)} {""} 22
                            </div>
                        </div>
                        <div className={Style.NFTcard_box_update_right}>
                            <div className={Style.NFTcard_box_update_right_info}>
                                <small>Remaining time</small>
                                <p>3h : 15m : 20s</p>
                            </div>
                        </div>
                    </div>
                    <div className={Style.NFtcard_box_update_details}>
                        <div className={Style.NFtcard_box_update_details_price}>
                            <div className={Style.NFtcard_box_update_details_price_box} >
                                <h4>Clone #17373</h4>
                                <div className={Style.NFtcard_box_update_details_price_box_box}>
                                    <div className={Style.NFtcard_box_update_details_price_box_bid}>
                                        <small>Current Bid</small>
                                        <p>1.000ETH</p>
                                    </div>
                                    <div className={Style.NFtcard_box_update_details_price_box_stock}>
                                        <small>61 in stock</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={Style.NFtcard_box_update_details_category}>
                            <BsImages/>
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default NFTcard