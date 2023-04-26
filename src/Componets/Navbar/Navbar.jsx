import React,{useEffect,useState} from 'react'
import Image from 'next/image';
import Link from 'next/link';

// ----import icons

import {MdNotifications} from "react-icons/md";
import {BsSearch} from "react-icons/bs";
import { CgMenuLeft , CgMenuRight} from "react-icons/cg";


// INTERNAL IMPORT 

import Style from "./Navbar.module.css";
import {Discover,Helpcenter,Notification,Profile,Sidebar} from "./index"
import {Button} from '../Com_index';

const Navbar = () => {
  return (
    <div>Navbar</div>
  )
}

export default Navbar