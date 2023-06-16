import React,{useState,useEffect}from 'react'
import { BsFillAlarmFill,BsFillCalendarDateFill,BsCalendar3 } from 'react-icons/bs';

// Internal import
import Style from "./Collection.module.css";
import DayCom from './DayCom/DayCom';
import images from "../../img";

const Collection = () => {
    const [Popular, setPopular] = useState(true);
    const [Follwing, setFollwing] = useState(false);
    const [News, setNews] = useState(false);

    const Cardarray=[{background:images.creatorbackground1 , user:images.user1},{background:images.creatorbackground2 , user:images.user2},{background:images.creatorbackground3 , user:images.user3},{background:images.creatorbackground4 , user:images.user4},
        {background:images.creatorbackground5, user:images.user5},{background:images.creatorbackground6 , user:images.user6},
        {background:images.creatorbackground7 , user:images.user7}];

    const follwingArray=[{background:images.creatorbackground4 , user:images.user4},{background:images.creatorbackground8 , user:images.user8},
        {background:images.creatorbackground5, user:images.user5},{background:images.creatorbackground6 , user:images.user6},
        {background:images.creatorbackground7 , user:images.user7}];

    const newsarry=[{background:images.creatorbackground5, user:images.user5},{background:images.creatorbackground6 , user:images.user6},
        {background:images.creatorbackground7 , user:images.user7}];

    const openPopular=()=>{
        if(!Popular){
            setPopular(true)
            setFollwing(false)
            setNews(false)
        }
    }

    const openNews=()=>{
        if(!News){
            setPopular(false)
            setFollwing(false)
            setNews(true)
        }
    }

    const openfollowers=()=>{
        if(!Follwing){
            setPopular(false)
            setFollwing(true)
            setNews(false)
        }
    }
    
  return (
    <div className={Style.collection}>
        <div className={Style.collection_title}>
            <h2>Top List Creators</h2>
            <div className={Style.collection_collections}>
                <div className={Style.collection_collections_btn}>
                    <button onClick={()=>openPopular()}> 
                        <BsFillAlarmFill/> Last 24 hours
                    </button>
                    <button onClick={()=>openNews()}> 
                        <BsCalendar3/> Last 7 days
                    </button>
                    <button onClick={()=>openfollowers()}> 
                        <BsFillCalendarDateFill/> Last 30 days
                    </button>
                </div>
            </div>
        </div>
        {
            Popular && (
                <div className={Style.collection_box}>
                    {
                        Cardarray.map((el,i)=>{
                            return(
                                <DayCom  key={i+1} i={i} el={el}/>
                            )
                        })
                    }
                </div>
            )
        }

        {
            Follwing && (
                <div className={Style.collection_box}>
                    {
                        follwingArray.map((el,i)=>{
                            return(
                                <DayCom  key={i+1} i={i} el={el}/>
                            )
                        })
                    }
                </div>
            )
        }

        {
            News && (
                <div className={Style.collection_box}>
                    {
                        newsarry.map((el,i)=>{
                            return(
                                <DayCom  key={i+1} i={i} el={el}/>
                            )
                        })
                    }
                </div>
            )
        }              
    </div>
  )
  
}

export default Collection