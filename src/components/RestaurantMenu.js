import { useEffect, useState } from "react";
import { MENU_URL } from "./../utils/constant";
import { useParams } from "react-router-dom";
import  Shimmer  from "./Shimmer";

const RestaurantMenu = () => {
    const [resInfo,setResInfo] = useState(null);
    const param = useParams();

    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async () => {
        const data = await fetch(MENU_URL+param.resId);
        const json = await data.json();
        setResInfo(json.data);
        console.log("fetch",json.data)
        console.log("json",json.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card)
    } 

    if(resInfo == null){
        return <Shimmer/>
    } 

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    

    return (
        <div><h2>{name}</h2>
        <h3>{cuisines.join(", ")}:{costForTwoMessage}</h3>
        <h1>Menu</h1>
        <ul>
           {  itemCards.map((ele)=><li key={ele.card.info.id} > { ele.card.info.name }</li>)}
        </ul>
       </div>
    )
}

export default RestaurantMenu;