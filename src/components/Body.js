
import RestaurantsCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const Body = () =>{
   const [listOfRestaurtant,setlistOfRestaurtant] = useState([]);
   const [filteredListOfRes,setFilteredLstOfRes] = useState([]);
   const [searchTxt,setSearchText]= useState('');
   // console.log("arr",arr);
   // const listOfRestaurtant = arr[0];
   // const setlistOfRestaurtant = arr[1];

   useEffect( () => {
      fetchData();
   },[]);

   const fetchData = async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setlistOfRestaurtant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredLstOfRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
   }

   if(listOfRestaurtant.length === 0){
      return <Shimmer/>
   }

    return (
    <div className="body">
       <div className="filter">
         <div>
            <input type="text" className="searchInput" value={searchTxt} onChange={ (e) => {
               setSearchText(e.target.value)
            }}/>
            <button className="search" onClick={ () => {
               console.log("btn",searchTxt);
               const list = listOfRestaurtant.filter((ele)=>ele?.info?.name?.toLowerCase().includes(searchTxt.toLowerCase()));
               console.log("search result:",list)
               setFilteredLstOfRes(list);
            }}>Search</button>
         </div>
         <button className="filter-btn"  onClick = { () => {
            const list = listOfRestaurtant.filter((ele)=>ele.info.avgRating >= 4);
            setlistOfRestaurtant(list);
         }
         }>Top Rated Restaurtants</button>   
      </div>
       <div className="res-container">
          {
             filteredListOfRes?.map((restaurtant) => (
               <Link key={restaurtant.info.id}  to={"/restaurants/"+ restaurtant.info.id}>
               <RestaurantsCard resData={restaurtant} /> </Link>)
               )
          }
       </div>
    </div>
    )
 }

 export default Body;