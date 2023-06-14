import React, {useEffect,useState ,useRef}from 'react'
import { motion } from "framer-motion"
import { TiArrowLeftThick ,TiArrowRightThick } from 'react-icons/ti';

// Internal import
import Style from "./Slider.module.css";
import Slider_card from './Slider_card/Slider_card';

const Slider = () => {
    const sliderArray=[1,2,3,4,5,6,7];
    const [width, setwidth] = useState(0);

    const dragslider= useRef()

    useEffect(() => {
        setwidth(dragslider.current.scrollwidth - dragslider.current.offsetWidth)
    }, [])
    
    const handleScroll=(direction)=>{
        const { current }= dragslider;
        const scrollamount= window.innerWidth > 1800? 270 : 210 ;
        if(direction=="left"){
            current.scrollLeft -= scrollamount;
        }else{
            current.scrollLeft += scrollamount;
        }
    }
  return (
    <div className={Style.slider1}>
        <div className={Style.slider_box}>
            <h2>Explore NFTs Video</h2>
            <div className={Style.slider_box_btn}>
                <p>Click on play icon & enjoy nfts Video</p>
                <div className={Style.slider_box_button_btn}>
                    <div className={Style.slider_box_button_btn_icon} onClick={()=> handleScroll("left")}>
                        <TiArrowLeftThick />
                    </div>  
                    <div className={Style.slider_box_button_btn_icon} onClick={()=> handleScroll("right")}>
                        <TiArrowRightThick />
                    </div>  
                </div>
            </div>
            <motion.div className={Style.slider_box_items} ref={dragslider}> 
                <motion.div ref={dragslider} className={Style.slider_box_item} drag="x" dragConstraints={{right:0 ,left :-width}}>
                        {
                            sliderArray.map((el,i)=>{
                                return(
                                    <div>
                                        <Slider_card key={i+1} el={el} i={i}/>
                                    </div>
                                )
                            })
                        }
                </motion.div>
            </motion.div>
        </div>
    </div>
  )
}

export default Slider