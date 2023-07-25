import React from 'react';

// Internal imports
import Style from "./Nftdetailspage.module.css";
import { Nftdescription ,Nftdetailsimg} from './Nftdetailsindex'

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