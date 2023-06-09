import React from 'react'

// Internal imports
import Style from "./AudioLive.module.css";


const AudioLive = () => {
  return (
    <div className={Style.audiolive}>
        <div className={Style.audiolive_box}>
            <div className={Style.audiolive_box_left}>
                left
            </div>
            <div className={Style.audiolive_box_right}>
                
            </div>
        </div>
    </div>
  )
}

export default AudioLive