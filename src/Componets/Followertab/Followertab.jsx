import React,{useState,useEffect} from 'react';
import { RiUserFollowFill,RiUserUnfollowFill,RiAwardLine } from 'react-icons/ri';

// Internal imports
import Style from "./Followertab.module.css";
import Followertabcard from './Followertabcard/Followertabcard';

const Followertab = () => {
    const CardArray=[1,2,3,4,5,6,7];
    const FollwingArray=[1,2,3,4,5];
    const NewsArray=[1,2,3];

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
                    {CardArray.map((el,i)=>{
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