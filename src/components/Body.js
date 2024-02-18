import RestaurantCard, { withPromotedLable } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Body = () => {
    const [ListofRestro, setListofRestro] = useState([]);
    const [searchText, setsearchText] = useState("");
    const [filteredrestro, setFilteredRestro] = useState([]);

    const RestroCardPromoted = withPromotedLable(RestaurantCard);
    useEffect(() => {
        fetchdata();
    }, []);

    const fetchdata = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        // console.log(json);
        setListofRestro(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestro(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onlineStatus = useOnlineStatus();
    const { loggedInUser, setUserName } = useContext(UserContext);
    if (onlineStatus === false)
        return (
            <h1>Looks like you are Offline!!! , check your internet connection</h1>
        )
    return ListofRestro.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="flex">
                <div className="Search m-4 p-4">
                    <input type="search" data-testid="searchInput" className="border border-solid border-black p-2 rounded-lg" placeholder="search restaurants" value={searchText} onChange={(e) => {
                        setsearchText(e.target.value)
                    }} />
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg font-medium" onClick={() => {
                        // filter the list by searched item
                        //console.log(searchText)
                        const filteredrestro = ListofRestro.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))

                        setFilteredRestro(filteredrestro);

                    }}>Search</button>

                </div>

                <div className="flex item-center m-4 p-4">
                    <button className="px-4  bg-blue-200 m-4 rounded-lg font-medium" onClick={() => {
                        const newlist = ListofRestro.filter(
                            (res) => res?.info?.avgRating > 4
                        );

                        setListofRestro(newlist);
                    }}>Top-rated restaurants</button>
                </div>
                <div className="search my-11 item-center" >
                    <label>UserName : </label>
                    <input type="search" placeholder="Enter your name" className="border  border-black p-2 rounded-lg"
                        value={loggedInUser}
                        onChange={(e) => { setUserName(e.target.value) }}></input>
                </div>
            </div>


            <div className="flex flex-wrap items-center m-4 p-4 absolute">
                {
                    filteredrestro.map((restaurant) => (
                        <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id} >

                            {/* if the restro is promoted use the promoted labe card other wise use the mnormal card */}
                            {restaurant.info.isOpen ? (<RestroCardPromoted resData={restaurant} />) :
                                (<RestaurantCard resData={restaurant} />)}</Link>
                    ))
                }

            </div>
        </div>
    );
}
export default Body;