import React from 'react'
import Link from 'next/link';
// internal

import Style from './Helpcenter.module.css';
const Helpcenter = () => {
  const helpcenters=[
    {
      name : "About",
      link :"aboutus",
    },
    {
      name : "Contact Us",
      link :"contactus",
    },{
      name : "Sign Up",
      link :"sign-up",
    },{
      name : "Sign In",
      link :"sign-in",
    },{
      name : "Subscription",
      link :"subscription",
    }
  ]
  return (
    <div className={Style.box}>
      {
          helpcenters.map((el,i)=>{
            return (
              <div className={Style.Helpcenter} key={i+1}>
                <Link href={{pathname:`${el.link}`}}> {el.name} </Link>
              </div>
            )
          })
      }
    </div>
  )
}

export default Helpcenter