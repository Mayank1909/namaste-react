import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestroMenu from "../utils/useRestroMenu";

const RestroMenu = () => {
    // const [resInfo, setresInfo] = useState(null)
    const { resId } = useParams()
    const resInfo = useRestroMenu(resId);
    if (resInfo === null) return <Shimmer />;
    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // console.log(itemCards);
    return (
        <div className="menu">
            {<h1>{name}</h1>}
            <p>{cuisines.join(', ')}-{costForTwoMessage}</p>
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>{item.card.info.name}- {(item.card.info.price) / 100}</li>
                ))}
            </ul>
        </div>
    )
};
export default RestroMenu;