import React from 'react'


// Internal imports
import { Button,Category ,Brand } from '@/Componets/Com_index';
import Nftdetailspage from '@/Nftdetails_page/Nftdetailspage';

const Nftdetails = () => {
    return (
      <div>
        <Nftdetailspage />
        <Category />
        <Brand />
      </div>
    );
  };

export default Nftdetails