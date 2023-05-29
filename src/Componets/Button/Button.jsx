import React from 'react'

import Style from "./Button.module.css"

const Button = ({btnName,handleclick}) => {
  return (
    <div className={Style.box}>
      <button className={Style.button} onClick={()=>handleclick()}>
        {btnName}
      </button>
    </div>
  )
}

export default Button