import React, {useEffect,useState} from "react";
import { BsSearch, BsArrowRight } from "react-icons/bs";

// Internal imports
import Style from "./SearchBar.module.css";


const SearchBar = ({onClearSearch,onHandleSearch}) => {

    const [search, setsearch] = useState("")
    const [searchitem, setsearchitem] = useState(search)

    useEffect(() => {
      const timer=setTimeout(()=> setsearch(searchitem),1000);

      return ()=>clearTimeout(timer)
    }, [searchitem])
    
    useEffect(()=>{
      if(search){
        onHandleSearch(search)
      } else{
        onClearSearch()
      }
    },[search])

    return (
      <div className={Style.SearchBar}>
        <div className={Style.SearchBar_box}>
          <BsSearch className={Style.SearchBar_box_icon} />
          <input type="text" placeholder="Type yout keyword..."  onChange={(e)=> setsearchitem(e.target.value)} value={searchitem}/>
          <BsArrowRight className={Style.SearchBar_box_icon} />
        </div>
      </div>
    );
  };

export default SearchBar