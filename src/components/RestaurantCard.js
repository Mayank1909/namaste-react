import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData?.info;
    return (
        <div className="m-4 p-4 w-[300px] bg-gray-100 rounded-lg hover:bg-gray-200">
            <img src={`${CDN_URL}${resData?.info?.cloudinaryImageId}`} className="rounded-lg w-[450px] h-[300px]" alt="img-logo" />
            <h3 className="font-medium py-4 text-lg">{name}</h3>
            <span className="font-serif">{cuisines.join(", ")}</span>
            <h4>{avgRating} stars</h4>
            <h4>{sla.deliveryTime} min</h4>
            <h4>Rs.{costForTwo} for two</h4>
        </div>
    )
};

//Higher order component
// input -restruarantCard ==>RestaurantsPromoted

export const withPromotedLable = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <lable className="absolute bg-black text-white rounded-lg m-2 p-2">Open Now</lable>
                <RestaurantCard {...props} />
            </div>
        );
    };
};
export default RestaurantCard;
