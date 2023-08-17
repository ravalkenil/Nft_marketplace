import React from 'react';

// Internal imports
import Style from "./Nftdetailspage.module.css";
import Nftdescription from './Nftdescription/Nftdescription';
import Nftdetailsimg from "./Nftdetailsimg/Nftdetailsimg";

const Nftdetailspage = ({nft}) => {
    return (
      <div className={Style.NFTDetailsPage}>
        <div className={Style.NFTDetailsPage_box}>
          <Nftdetailsimg  nft={nft} />
          <Nftdescription nft={nft} />
        </div>
      </div>
    );
  };

export default Nftdetailspage