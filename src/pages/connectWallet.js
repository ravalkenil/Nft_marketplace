import React, {useEffect,useState,useContext} from 'react';
import Image from 'next/image';

// Internal imports
import Style from "../styles/connectwallet.module.css";
import images from "../img";

// Import from Smart contract
import {useNFtmarketplaceContext}  from "../context/NFTmarketplaceContext";


const Connectwallet = () => {

    const [ActiveBtn, setActiveBtn] = useState(1);
    const { CurrentAcc ,Connectwallet }=useContext(useNFtmarketplaceContext);

    const providerArray = [
        {
          provider: images.provider1,
          name: "Metamask",
        },
        {
          provider: images.provider2,
          name: "walletConnect",
        },
        {
          provider: images.provider3,
          name: "walletlink",
        },
        {
          provider: images.provider1,
          name: "Formatic",
        },
    ];
  return (
    <div className={Style.Connectwallet}>
      <div className={Style.Connectwallet_box}>
        <h1>Connect your wallet</h1>
        <p className={Style.Connectwallet_box_para}>
          Connect with one of our avaliabl wallet providers or create a new one
        </p>

        <div className={Style.Connectwallet_box_provider}>
          {providerArray.map((el, i) => (
            <div
              className={`${Style.Connectwallet_box_provider_item} ${
                ActiveBtn == i + 1 ? Style.active : ""
              }`}
              key={i + 1}
              onClick={() => (setActiveBtn(i + 1),Connectwallet())}
            >
              <Image
                src={el.provider}
                alt={el.provider}
                width={50}
                height={50}
                className={Style.Connectwallet_box_provider_item_img}
              />
              <p>{el.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Connectwallet;