import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData?.info;
    return (
        <div className="res-card">
            <img src={`${CDN_URL}${resData?.info?.cloudinaryImageId}`} className="img-logo" alt="img-logo" />
            <h3>{name}</h3>
            <span>{cuisines.join(", ")}</span>
            <h4>{avgRating} stars</h4>
            <h4>{sla.deliveryTime} min</h4>
            <h4>Rs.{costForTwo} for two</h4>
        </div>
    )
};
export default RestaurantCard;
