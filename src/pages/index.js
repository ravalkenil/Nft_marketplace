import React from 'react'




// Internal imports
import Style from "../styles/Index.module.css";
import {Herosection,Service,Bignftslider,Subscribe ,Title,Category,Filter} from "../Componets/Com_index";


const index = () => {
  return (
    <div className={Style.homepage}>
      <Herosection/>
      <Service/>
      <Bignftslider/>
      <Title heading="Fetured NFTs" paragraph="Discover the most tranding NFTs"/>
      <Filter/>
      <Title heading="Browse by category" paragraph="Explore the NFTs in the most featured categories"/>
      <Category/> 
      <Subscribe/>
    </div>
  )
}

export default index