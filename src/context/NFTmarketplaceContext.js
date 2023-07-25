import React, { useContext, useEffect, useState } from "react";
import Webb3model from "web3modal";
import { ethers } from "ethers";
import Router, { useRouter } from "next/router";
import axios from "axios";
import { NFTStorage, File, Blob  } from 'nft.storage';
import { create as ipfsHttpClient } from "ipfs-http-client";

// const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");
const projectId="Your project id here";
const projectSecretKey="Project SecretKey here";
const auth = `Basic${Buffer.from(`${projectId}:${projectSecretKey}`).toString("base64")}`
const subdomain= "your subdomain";
const client= ipfsHttpClient({host:"infura-ipfs.io",port:5001,protocol:"https",headers:{ authorization:auth}})


// Internal imports
import { NftmarketplaceAddress, NftmarketAbi } from "./Constans";

// ----FETCHING SMART CONTRACT
const fetchContract = (signerOrprovider) =>
  new ethers.Contract(NftmarketplaceAddress, NftmarketAbi, signerOrprovider);

// ----CONNECTINHG WITH SMARTCONTRACT
const connectingwithcontract = async () => {
  try {
    const web3model = new Webb3model();
    const connection = await web3model.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = fetchContract(signer);
    return contract;
  } catch (error) {
    console.log("Error in connection with contract", error);
  }
};

export const NFtmarketplaceContext = React.createContext();

export const NFTmarketplaceprovider = ({ children }) => {
  const titledata = "Discover ,collect and sell NFTs ";

  const [currentAcc, setcurrentAcc] = useState("");
  const router = useRouter()

  useEffect(() => {
    fetchNFt();
  }, [])

  // --Chack if wallet is connected
  const chackifWalletconnect = async () => {
    try {
      if (!window.ethereum) return console.log("Please Install metamask");

      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
      // const accounts = await window.ethereum.request({
      //   method: 'wallet_requestPermissions',
      //   params: [{ eth_accounts: {} }],
      // })
      if (accounts.length) {
        setcurrentAcc(accounts[0]);
      } else {
        console.log("No Account");
      }
    } catch (error) {
      console.log("somthing wrong connection");
    }
  };

  const connectwallet = async () => {
    try {
      if (!window.ethereum) return console.log("Please Install metamask");

      const accounts =await window.ethereum.request({ method: 'eth_requestAccounts' })
      console.log(accounts);
      setcurrentAcc(accounts[0]);
      // window.location.reload();
    } catch (error) {
      console.log("Error while connecting to wallet");
    }
  };

  //----Upload to IPFS Function
  const uploadtoipfs = async (file) => {
    try {
      const url = new File([file] , 'nft.png', { type: 'image/png' });
      // const added = await client.add({ content: file });
      // const url = `${subdomain}/ipfs/${added.path}`; 
      return url;
    } catch (error) {
      console.log("Error while uploading file");
    }
  };



  // ----Create Nft fucntion
  const creatNFt = async (name,price,image,description,router) => {
    try {
      // const { name, description, price } = forminput;
      if (!name || !description || !price || !image ) {
        console.log(" Data missing ");
      }
      const imageFile = new File([image] , 'nft.png', { type: 'image/png' });
      console.log(imageFile);
      const data = { name :name, description:description, image:imageFile ,hello:"hello"};
      console.log(data);
      try {
        const NFT_STORAGE_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGFEMjAxNUFBQTA5NDYwODcyQTliNmUzQWI5MjY2ZTU2QjMwM0Q3QzUiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY4MjU3NzEyODk3MCwibmFtZSI6Ik5mdF9tYXJrZXRwbGFjZSJ9.4-NRj6IeUwT6VeaSaKTozhRKHUqAvWrIxVRcy0uXc28';
        const client = new NFTStorage({ token: NFT_STORAGE_TOKEN });
        const metaData = await client.store({name :name, description:description, image:imageFile ,hello:"hello"});

        console.log("hello",metaData);
        const imgurl1 = metaData.url;
        console.log(imgurl1);
        // const imgurl1 = metaData
        // const i = imgurl1.replace('/nft.png','.ipfs.dweb.link/nft.png');
        // const url = i.replace('//','https://');
        // console.log(url);
        // const added = await client.add(data);
        // const url = `https://infura-ipfs.io/ipfs/${added.path}`;
        await createsale(imgurl1, price );
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(" Error while creating NFT ");
    }
  };

  // ----Create sale function
  const createsale = async (url, inputprice, isreselling, id ) => {
    try {
      const price = ethers.utils.parseUnits(inputprice, "ether");
      const contract = await connectingwithcontract();
      console.log("-----------------",contract);
      const listingprice = await contract.getListingPrice();
      console.log("----",listingprice);
      const transaction = !isreselling
        ? await contract.createToken(url, price, {
            value: listingprice.toString(),
          })
        : await contract.resellToken(id, price, {
            value: listingprice.toString(),
          });

        await transaction.wait();
        
        console.log("==================done");
        router.push("/Searchpage")
    } catch (error) {
      console.log("while creating sale",error);
    }
  };

  //----Fetching function
  const fetchNFt= async()=>{
    try {
        const url="HTTP://127.0.0.1:7545";
        const provider= new ethers.providers.JsonRpcProvider(url);
        const contract= fetchContract(provider);
        console.log("------",contract);
        const data1= await contract.fetchMarketItems();
        console.log("))))))))))))))))",data1);
        const items= await Promise.all(
            data1.map(async({tokenId,seller,owner,price:unformatedprice})=>{
                const tokenUri= await contract.tokenURI(tokenId)
                const url = tokenUri.replace('ipfs://','');
                const metadatauri=`https://ipfs.io/ipfs/${url}`;
                const data11= await axios.get(metadatauri);
                const name=data11.data.name;
                const url1=data11.data.image
                const i = url1.replace('/nft.png','.ipfs.dweb.link/nft.png');
                const image = i.replace('ipfs://','https://');
                const description=data11.data.description
                const price= ethers.utils.formatUnits(unformatedprice.toString(),"ether")
                return { price,tokenId: tokenId.toNumber(),seller,owner,image,name,description,tokenUri}
            })   
        )
        console.log(items);
        return items;
    } catch (error) {
        console.log("Error while fetching Nft",error); 
    }
  }

  // ---Fetchnig NFt or Listing Nft
  const FetchingNftorListedNft=async(type)=>{
    try {
      const contract= await connectingwithcontract();
      const data= type == "fetchItemListed" ? await contract.fetchItemsListed() : await contract.fetchMyNFTs()
      console.log("----------------",data);
      const items= await Promise.all(
        data.map(async({tokenId ,seller,owner,price: unformatedprice})=>{
            const tokenUri= await contract.tokenURI(tokenId)
            const url = tokenUri.replace('ipfs://','');
            const metadatauri=`https://ipfs.io/ipfs/${url}`;        
            const data11= await axios.get(metadatauri);
            const name=data11.data.name;
            const url1=data11.data.image;
            const i = url1.replace('/nft.png','.ipfs.dweb.link/nft.png');
            const image = i.replace('ipfs://','https://');
            const description=data11.data.description
            const price= ethers.utils.formatUnits(unformatedprice.toString(),"ether")
            return { price,tokenId: tokenId.toNumber(),seller,owner,image,name,description,tokenUri}

          // const tokenURI= await contract.tokenURI(tokenid);
          // console.log("-----",);
          // const { data :{image,name,description}} = await axios.get(tokenURI)
          // const price= ethers.utils.formatUnits(unformatedprice.toString(),"ether")
          // return {
          //   price,tokenId:tokenId.toNumber(),seller,owner,image,name,description,tokenURI
          // }
        })
      )
      console.log(items);
      return items;
    } catch (error) {
      console.log("Error fetching Listed Nfts");
    }
  }

  const buyNft=async(nft)=>{
      try {
        const contract= await connectingwithcontract();
        console.log(contract);
        console.log(nft.price);
        const price= (ethers.utils.parseUnits(nft.price.toString(),"ether"))
        console.log(price);
        console.log("heyyyyyy");
        const transaction= await contract.createMarketSale(nft.tokenId ,{ value: price})
        await transaction.wait();
        router.push("/Author")
      } catch (error) {
        console.log("Error while buying NFT",error);
      }
  }


  return (
    <NFtmarketplaceContext.Provider
      value={{ titledata, connectwallet, creatNFt, uploadtoipfs ,createsale,fetchNFt,chackifWalletconnect,FetchingNftorListedNft,buyNft ,currentAcc}}
    >
      {children}
    </NFtmarketplaceContext.Provider>
  );
};
