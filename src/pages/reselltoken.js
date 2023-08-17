import React,{useContext ,useState ,useEffect} from "react";
import { useRouter } from 'next/router';    
// Import Internal

import Style from "../styles/reselltoken.module.css";
import formStyle from "../Accountpage/Form/Form.module.css";
import { Button } from "../Componets/Com_index";

// import contract
 
import { useNFtmarketplaceContext } from "../context/NFTmarketplaceContext";
import axios from "axios";

const Reselltoken = () => {
    const { Createsale }= useContext(useNFtmarketplaceContext);

    const [price, setprice] = useState("");
    const [image, setimage] = useState("");
    const router=useRouter()
    const { id ,tokenURI} =router.query;

    const FetchNFt = async()=>{
        if(!tokenURI) return ;
        try{
          const url = tokenURI.replace('ipfs://','');
          console.log("-----");
          const metadatauri=`https://ipfs.io/ipfs/${url}`;
          const  data1 = await axios.get(metadatauri);
          console.log("===============",data1);
          const im= data1.data.image;
          const i = im.replace('/nft.png','.ipfs.dweb.link/nft.png');
          const image1 = i.replace('ipfs://','https://');
          console.log(image1);
          setimage(image1)
        }catch(error){
          console.log("This is FetchNFt ",error);
        }
        
    }

    useEffect(() => {
        FetchNFt()
    }, [id])

    const resell =async()=>{
      try {
        await  Createsale(tokenURI,price,true,id)
        router.push("/Author")  
      } catch (error) {
        console.log("Error while resell ",error);
      }
    }
    
  return (
    <div className={Style.Reselltoken}>
      <div className={Style.Reselltoken_box}>
        <h1>Resell your Token ,Set price</h1>
        <div className={formStyle.Form_box_input}>
          <label htmlFor="name">Price</label>
          <input
            type="number"
            min={1}
            placeholder="Resell Price"
            className={formStyle.Form_box_input_userName}
            onChange={(e)=>setprice(e.target.value)}
          />
        </div>

        <div className={Style.Reselltoken_box_image}>
            {
                image && (  <img src={image} alt="resell nft" width={400} height={400} /> )
            }
        </div>
        <div className={Style.Reselltoken_box_btn}>
            <Button btnName="Resell NFT" handleclick={()=>resell()} />
        </div>
      </div>
    </div>
  );
};

export default Reselltoken;
