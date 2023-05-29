import React,{useCallback,useEffect,useState} from 'react'
import Image from 'next/image';
import {AiFillFire ,AiFillHeart,AiOutlineHeart} from "react-icons/ai";
import {MdVerified,MdTimer} from "react-icons/md";
import {TbArrowBigLeftLines,TbArrowBigRightLines} from "react-icons/tb"


// internal
import Style from "./Bignftslider.module.css";
import images from "../../img";
import { Button } from '../Com_index';

const Bignftslider = () => {
    const [Idnumber, setIdnumber] = useState(1);
    const sliderdata =[
        {
            title:"hello nft",
            id:1,
            name:"kenil",
            collection:"gym",
            price :"000006464 ETH",
            like :243,
            image:images.user1,
            nftImage:images.nft_image_1,
            time:{
                days:27,
                hours:10,
                minutes:11,
                seconds:35,
            }
        },
        {
            title:"Buddy nft",
            id:1,
            name:"kenil2",
            collection:"gym",
            price :"000006467 ETH",
            like :243,
            image:images.user2,
            nftImage:images.nft_image_2,
            time:{
                days:27,
                hours:10,
                minutes:11,
                seconds:35,
            }
        },
        {
            title:"dost nft",
            id:1,
            name:"kenil3",
            collection:"gym",
            price :"000006467 ETH",
            like :243,
            image:images.user3,
            nftImage:images.nft_image_3,
            time:{
                days:27,
                hours:10,
                minutes:11,
                seconds:35,
            }
        }
    

    ]
  return (
    <div className={Style.bignftslider}>
        <div className={Style.bignftslider_box}>
            <div className={Style.bignftslider_box_left}>
                <h2>{sliderdata[Idnumber].title}</h2>
                <div className={Style.bignftslider_box_left_creator}>
                    <div className={Style.bignftslider_box_left_creator_profile}>
                        <Image src={sliderdata[Idnumber].image} alt='profile image' width={50} height={50} className={Style.bignftslider_box_left_creator_profile_img}/>
                        <div className={Style.bignftslider_box_left_creator_profile_img}>
                            <p>Creator</p>
                            <h4>{sliderdata[Idnumber].name} <span><MdVerified/></span></h4>
                        </div>
                    </div>
                    <div className={Style.bignftslider_box_left_creator_collection}>
                        <AiFillFire className={Style.bignftslider_box_left_creator_collection_icon}/>
                        <div className={Style.bignftslider_box_left_creator_collection_info} >
                            <p>collection</p>
                            <h4>{ sliderdata[Idnumber].collection}</h4>
                        </div>
                    </div>
                </div>
                <div className={Style.bignftslider_box_left_bidding}>
                    <div className={Style.bignftslider_box_left_bidding_box}>
                        <small>Current Bid</small>
                        <p>{sliderdata[Idnumber].price}<span>$300</span></p>
                    </div>
                    <p className={Style.bignftslider_box_left_bidding_box_auctions}>
                        <MdTimer className={Style.bignftslider_box_left_bidding_box_auctions_icon}/>
                        <span>Auction ending in</span>
                    </p>
                    <div className={Style.bignftslider_box_left_bidding_box_timer}>
                        <div className={Style.bignftslider_box_left_bidding_box_timer_item}>
                            <p>{sliderdata[Idnumber].time.days}</p>
                            <span>Days</span>
                        </div>
                        <div className={Style.bignftslider_box_left_bidding_box_timer_item}>
                            <p>{sliderdata[Idnumber].time.hours}</p>
                            <span>Hours</span>
                        </div>
                        <div className={Style.bignftslider_box_left_bidding_box_timer_item}>
                            <p>{sliderdata[Idnumber].time.minutes}</p>
                            <span>Minutes</span>
                        </div>
                        <div className={Style.bignftslider_box_left_bidding_box_timer_item}>
                            <p>{sliderdata[Idnumber].time.seconds}</p>
                            <span>Seconds</span>
                        </div>
                    </div>
                    <div className={Style.bignftslider_box_left_button}>
                        <Button btnName="Place" handleclick={()=>{}} />
                        <Button btnName="View" handleclick={()=>{}} />
                    </div>
                </div>
                <div className={Style.bignftslider_box_left_sliderbtn}>
                    <TbArrowBigLeftLines  className={Style.bignftslider_box_left_sliderbtn_icon}  onClick={()=>inc()}/>
                    <TbArrowBigRightLines  className={Style.bignftslider_box_left_sliderbtn_icon}  onClick={()=>inc()}/>
                </div>
            </div>
            <div className={Style}>

            </div>
        </div>
    </div>
  )
}

export default Bignftslider