import React,{useState,useEffect} from 'react';
import { RiUserFollowFill,RiUserUnfollowFill,RiAwardLine } from 'react-icons/ri';

// Internal imports
import Style from "./Followertab.module.css";
import Followertabcard from './Followertabcard/Followertabcard';
import images from "../../img";

const Followertab = ({Topcreator}) => {
    // const CardArray=[{background:images.creatorbackground1 , user:images.user1},{background:images.creatorbackground2 , user:images.user2},{background:images.creatorbackground3 , user:images.user3},{background:images.creatorbackground4 , user:images.user4},
    //     {background:images.creatorbackground5, user:images.user5},{background:images.creatorbackground6 , user:images.user6},
    //     {background:images.creatorbackground7 , user:images.user7}];

    const FollwingArray=[{background:images.creatorbackground4 , user:images.user4},{background:images.creatorbackground8 , user:images.user8},
        {background:images.creatorbackground5, user:images.user5},{background:images.creatorbackground6 , user:images.user6},
        {background:images.creatorbackground7 , user:images.user7}];

    const NewsArray=[{background:images.creatorbackground5, user:images.user5},{background:images.creatorbackground6 , user:images.user6},
        {background:images.creatorbackground7 , user:images.user7}];

    const [popular, setpopular] = useState(true)
    const [follwing, setfollwing] = useState(false)
    const [news, setnews] = useState(false)

    const openPopular=()=>{
        if(!popular){
            setpopular(true)
            setfollwing(false)
            setnews(false)
        }
    }

    const openFollower=()=>{
        if(!follwing){
            setpopular(false)
            setfollwing(true)
            setnews(false)
        }
    }

    const openNews=()=>{
        if(!news){
            setpopular(false)
            setfollwing(false)
            setnews(true)
        }
    }

  return (
    <div className={Style.followertab}>
        <div className={Style.followertab_title}>
            <h2>Top Creator List...</h2>
            <div className={Style.followertab_tabs}>
                <div className={Style.followertab_tabs_btn}>
                    <button onClick={()=>openPopular()}>
                        <RiUserFollowFill/> Popular
                    </button>
                    <button onClick={()=>openFollower()}>
                        <RiUserFollowFill/> Follwing
                    </button>
                    <button onClick={()=>openNews()}>
                        <RiAwardLine/> Noteworthy
                    </button>
                </div>
            </div>
        </div>
        {
            follwing && (
                <div className={Style.followertab_box}>
                    {FollwingArray.map((el,i)=>{
                        return(
                            <Followertabcard key={i+1} i={i} el={el}/>
                        )
                    })}
                </div>
            )
        }

        {
            news && (
                <div className={Style.followertab_box}>
                    {NewsArray.map((el,i)=>{
                        return(
                            <Followertabcard key={i+1} i={i} el={el}/>
                        )
                    })}
                </div>
            )
        }

        {
            popular && (
                <div className={Style.followertab_box}>
                    {Topcreator.map((el,i)=>{
                        return(
                            <Followertabcard key={i+1} i={i} el={el}/>
                        )
                    })}
                </div>
            )
        }

        <div className={Style.followertab_member}>
            <div className={Style.followertab_member_box}>
                <a href="#">Show me more</a>
                <a href="#">Become a author</a>
            </div>
        </div>
    </div>
  )
}

export default Followertab


// Ping tac toe
// Helmet
// Bottle flip
// Cookie on forehead
// Red light green light
// Riddle