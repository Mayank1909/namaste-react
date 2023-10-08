import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useState } from "react";
const Body = () => {
    const [ListofRestro, setListofRestro] = useState(resList);
    return (
        <div className="Body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const newlist = ListofRestro.filter(
                        (res) => res?.info?.avgRating > 4
                    );

                    setListofRestro(newlist);
                }}>Top-rated restaurants</button>
            </div>
            <div className="res-container">
                <RestaurantCard resData={resList[1]} />
                {
                    ListofRestro.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant} />)
                }



            </div>
        </div>
    );
}
export default Body;