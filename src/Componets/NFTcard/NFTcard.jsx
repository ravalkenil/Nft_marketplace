import React,{useState}from 'react';
import Image from 'next/image';
import { AiFillHeart,AiOutlineHeart } from 'react-icons/ai';
import { BsImages } from 'react-icons/bs';
import Link from 'next/link';

// Internal import
import Style from "./NFTcard.module.css";
import images from "../../img";




const NFTcard = ({NFTdata}) => {
    // const featureArray=[images.nft_image_1,images.nft_image_2,images.nft_image_3,images.nft_image_1,
    //     images.nft_image_2,images.nft_image_3,images.nft_image_1,images.nft_image_2,images.nft_image_3];
    console.log("NFTdata",NFTdata);
    const [like, setlike] = useState(true);
    const likenft=()=>{
        if(!like ){
            setlike(true)
        }else{
            setlike(false)
        }
    }
   console.log("2222",NFTdata);
  return (
    <div className={Style.NFtcard}>
        { NFTdata.map((el,i)=>{
            return(
                <Link href={{pathname:"/Nftdetails",query: el }} key={i}>
                <div className={Style.NFTcard_box} key={i+1}>
                    <div className={Style.NFTcard_box_img}>
                        {/* <Image src={el} alt='NFT images' width={600} height={600} className={Style.NFTcard_box_img_img}/> */}
                        <img src={el.image} alt='NFT images' width={600} height={600} className={Style.NFTcard_box_img_img} />
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
                                <h4>Clone {el.tokenId}</h4>
                                <div className={Style.NFtcard_box_update_details_price_box_box}>
                                    <div className={Style.NFtcard_box_update_details_price_box_bid}>
                                        <small>Current Bid</small>
                                        <p>{el.price} ETH</p>
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
                </Link>
            )
        })}
    </div>
  )
}

export default NFTcard