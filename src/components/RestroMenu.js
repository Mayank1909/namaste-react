import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestroMenu from "../utils/useRestroMenu";
import RestaurantsCategory from "./RestaurantsCategory";



const RestroMenu = () => {
    // const [resInfo, setresInfo] = useState(null)
    const { resId } = useParams()
    const resInfo = useRestroMenu(resId);
    if (resInfo === null) return <Shimmer />;
    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // console.log(itemCards);
    // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
            c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    // console.log(categories);
    return (
        <div className="text-center">
            {<h1 className="font-extrabold text-3xl font-serif my-6">{name}</h1>}
            <p className="font-sans font-medium text-lg">{cuisines.join(', ')}-{costForTwoMessage}</p>
            {/* building categories for each restraurats in form of accordian  */}
            {/* Header for accordian */}
            {categories.map((category) => (<RestaurantsCategory data={category?.card?.card} />))}
            {/* accrodian body  */}


        </div>
    )
};

export default RestroMenu;