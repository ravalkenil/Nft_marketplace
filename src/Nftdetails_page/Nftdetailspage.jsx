import React from 'react';

// Internal imports
import Style from "./Nftdetailspage.module.css";
import { Nftdescription ,Nftdetailsimg} from './Nftdetailsindex'

const Nftdetailspage = () => {
    return (
      <div className={Style.NFTDetailsPage}>
        <div className={Style.NFTDetailsPage_box}>
          <Nftdetailsimg />
          <Nftdescription />
        </div>
      </div>
    );
  };

export default Nftdetailspage