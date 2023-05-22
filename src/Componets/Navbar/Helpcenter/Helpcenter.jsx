import React from 'react'
import Link from 'next/link';
// internal

import Style from './Helpcenter.module.css';
const Helpcenter = () => {
  const helpcenters=[
    {
      name : "About",
      link :"about",
    },
    {
      name : "Contact Us",
      link :"contact-us",
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
              <div className={Style.Helpcenter}>
                <Link href={{pathname:`${el.link}`}}>{el.name}</Link>
              </div>
            )
          })
      }
    </div>
  )
}

export default Helpcenter