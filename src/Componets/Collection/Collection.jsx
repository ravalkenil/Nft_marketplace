import React,{useState,useEffect}from 'react'
import { BsFillAlarmFill,BsFillCalendarDateFill,BsCalendar3 } from 'react-icons/bs';

// Internal import
import Style from "./Collection.module.css";
import DayCom from './DayCom/DayCom';

const Collection = () => {
    const [Popular, setPopular] = useState(true);
    const [Follwing, setFollwing] = useState(false);
    const [News, setNews] = useState(false);

    const Cardarray=[1,2,3,4,5,6,7,8];
    const follwingArray=[1,2,3,4];
    const newsarry=[1,2,3,4,5,6];

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
                                <DayCom  key={i+1}/>
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
                                <DayCom  key={i+1}/>
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
                                <DayCom  key={i+1}/>
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