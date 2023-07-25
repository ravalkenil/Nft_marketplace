import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";

// Internal module
import Style from "./Dropzone.module.css";
import images from "../../img";

const Dropzone = ({
    title,
    heading,
    subHeading,
    name,
    website,
    description,
    royalties,
    fileSize,
    category,
    properties,
    image,
    uploadtoipfs,
    setimage,
  }) => {
    const [fileUrl, setFileUrl] = useState(null);
  
    const onDrop = useCallback(async (acceptedFile) => {
      console.log("------",acceptedFile[0]);
      const url=URL.createObjectURL(acceptedFile[0])

      // const url = await uploadtoipfs(acceptedFile[0]);
      console.log(url);
      setFileUrl(url)
      setimage(acceptedFile[0])
    });
  
    const { getRootProps, getInputProps } = useDropzone({
      onDrop,
      accept: "image/*",
      maxSize: 5000000,
    });
    return (
      <div className={Style.DropZone}>
        <div className={Style.DropZone_box} {...getRootProps()}>
          <input {...getInputProps()} />
          <div className={Style.DropZone_box_input}>
            <p>{title}</p>
            <div className={Style.DropZone_box_input_img}>
              <Image
                src={images.upload}
                // src="https://bafkreigtr6cuvyhgxt4p3ifnwop2weebebsnun5kgnmk336wq6kqmseg6i.ipfs.nftstorage.link/"
                // src="http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/asteroid_blend.png"
                alt="upload"
                width={100}
                height={100}
                objectFit="contain"
                className={Style.DropZone_box_input_img_img}
              />
            </div>
            <p>{heading}</p>
            <p>{subHeading}</p>
          </div>
        </div>
  
        {fileUrl && (
          <aside className={Style.DropZone_box_aside}>
            <div className={Style.DropZone_box_aside_box}>
              <Image
                src={fileUrl}
                // src="https://bafkreigtr6cuvyhgxt4p3ifnwop2weebebsnun5kgnmk336wq6kqmseg6i.ipfs.nftstorage.link/" 
                // src="http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/asteroid_blend.png"
                alt="nft image"
                width={200}
                height={200}
              />
  
              <div className={Style.DropZone_box_aside_box_preview}>
                <div className={Style.DropZone_box_aside_box_preview_one}>
                  <p>
                    <samp>NFT Name:</samp>
                    {name || ""}
                  </p>
                  <p>
                    <samp>Website:</samp>
                    {website || "" }
                  </p>
                </div>
  
                <div className={Style.DropZone_box_aside_box_preview_two}>
                  <p>
                    <span>Description</span>
                    {description || ""}
                  </p>
                </div>
  
                <div className={Style.DropZone_box_aside_box_preview_three}>
                  <p>
                    <span>Royalties</span>
                    {royalties || ""}
                  </p>
                  <p>
                    <span>FileSize</span>
                    {fileSize || ""}
                  </p>
                  <p>
                    <span>Properties</span>
                    {properties || ""}
                  </p>
                  <p>
                    <span>Category</span>
                    {category || ""}
                  </p>
                </div>
              </div>
            </div>
          </aside>
        )}
      </div>
    );
  };

export default Dropzone