import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice.js";
import { CDN_URL } from "../utils/constants";


const ItemList = ({ items }) => {

    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        //dispatch an action
        dispatch(addItem(item))
    }


    return <div>

        {items.map((item) => (
            <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                <div >
                    <div>
                        <span className="font-medium">{item?.card?.info?.name}</span>
                    </div>
                    <span>₹{item?.card?.info?.price ? item?.card?.info?.price / 100 : item?.card?.info?.defaultPrice / 100}</span>
                    <p className="text-xs">{item?.card?.info?.description}</p>
                </div>
                <div className="">
                    <div className="absolute my-20 -mx-10">
                        <button className="p-2 mx-16 bg-white shadow-lg rounded-lg w-20 text-green-600 font-bold bg-"
                            onClick={() => handleAddItem(item)}>
                            ADD +
                        </button>
                    </div>
                    <img src={CDN_URL + item?.card?.info?.imageId} className="h-[110px] w-[120px] rounded-lg "
                        alt="myimage" />
                </div>
            </div>

        ))}

    </div >
}
export default ItemList;

