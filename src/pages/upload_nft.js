import React from 'react'

// Internal imports
import Style from "../styles/upload_nft.module.css";
import { Uploadnft } from "../Uploadnft/Uploadnftindex";

const upload_nft = () => {
  return (
    <div className={Style.uploadNFT}>
      <div className={Style.uploadNFT_box}>
        <div className={Style.uploadNFT_box_heading}>
          <h1>Create New NFT</h1>
          <p>
            You can set preferred display name, create your profile URL and
            manage other personal settings.
          </p>
        </div>

        <div className={Style.uploadNFT_box_title}>
          <h2>Image, Video, Audio, or 3D Model</h2>
          <p>
            File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG,
            GLB, GLTF. Max size: 100 MB
          </p>
        </div>

        <div className={Style.uploadNFT_box_form}>
          <Uploadnft />
        </div>
      </div>
    </div>
  )
}

export default upload_nft