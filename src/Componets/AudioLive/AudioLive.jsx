import React from 'react'

// Internal imports
import Style from "./AudioLive.module.css";
import Audiocard from './Audiocard/Audiocard';
import Audiocardsmall from './Audiocardsmall/Audiocardsmall';


const AudioLive = () => {
  return (
    <div className={Style.audiolive}>
        <div className={Style.audiolive_box}>
            <div className={Style.audiolive_box_left}>
                <Audiocard/>
                <Audiocard/>
            </div>
            <div className={Style.audiolive_box_right}>
                <Audiocardsmall/>
                <Audiocardsmall/>
                <Audiocardsmall/>
            </div>
        </div>
    </div>
  )
}

export default AudioLive