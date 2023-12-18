import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";




const Body = () => {
    const [ListofRestro, setListofRestro] = useState([]);
    const [searchText, setsearchText] = useState("");
    const [filteredrestro, setFilteredRestro] = useState([]);


    useEffect(() => {
        fetchdata();
    }, []);

    const fetchdata = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        console.log(json);
        setListofRestro(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestro(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    return ListofRestro.length === 0 ? <Shimmer /> : (
        <div className="Body">
            <div className="Search">
                <input type="search" placeholder="searh restraunts" value={searchText} onChange={(e) => {
                    setsearchText(e.target.value)
                }} />
                <button className="search-btn" onClick={() => {
                    // filter the list by searched item
                    //console.log(searchText)
                    const filteredrestro = ListofRestro.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))

                    setFilteredRestro(filteredrestro);

                }}>search</button>
            </div>
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const newlist = ListofRestro.filter(
                        (res) => res?.info?.avgRating > 4
                    );

                    setListofRestro(newlist);
                }}>Top-rated restaurants</button>
            </div>


            <div className="res-container">
                {
                    filteredrestro.map((restaurant) => (
                        <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id} ><RestaurantCard resData={restaurant} /></Link>
                    ))
                }

            </div>
        </div>
    );
}
export default Body;