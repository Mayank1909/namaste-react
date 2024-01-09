import { useState } from "react";
import ItemList from "./ItemList";



const RestaurantsCategory = ({ data, showItems, setShowIndex, index }) => {
    // console.log(data);


    const [showdown, setshowdown] = useState("⬇")
    const handleClick = () => {
        showItems ? setShowIndex(null) : setShowIndex(index);
        setshowdown(
            prevDirection =>
                prevDirection === '⬆' ? '⬇' : '⬆'
        );

    }
    return (
        <>
            <div className="w-7/12 mx-auto my-4 shadow-lg p-4 bg-gray-50 ">
                <div className="flex justify-between cursor-pointer" onClick={handleClick} >
                    <span className="font-bold " >{data?.title}({data.itemCards.length})</span>
                    <span className="text-lg" >{showdown}</span>
                </div>
                {showItems && <ItemList items={data.itemCards} />}
            </div>
        </>
    )

}
export default RestaurantsCategory;