const RestaurantsCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, sla, costForTwo ,cloudinaryImageId} = resData?.info;
    const URL = "https://media-assets.swiggy.com/swiggy/image/upload/"
    return (
       <div className="res-card" >
          <img className="res-logo" alt="restaurtant Image" src={URL+cloudinaryImageId}></img>
          <h2>{name}</h2>
          <h3>{cuisines.join(", ")}</h3>
          <h3>{costForTwo}</h3>
          <h4>{avgRating}Rating</h4> 
          <h5>{sla.slaString} min Delivery Time</h5>
       </div>
    )
 }

 export default RestaurantsCard;