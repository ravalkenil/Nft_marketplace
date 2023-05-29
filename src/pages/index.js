import React from 'react'




// Internal imports
import Style from "../styles/Index.module.css";
import {Herosection,Service,Bignftslider} from "../Componets/Com_index";


const index = () => {
  return (
    <div className={Style.homepage}>
      <Herosection/>
      <Service/>
      <Bignftslider/>
    </div>
  )
}

export default index