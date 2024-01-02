import { CDN_URL } from "../utils/constants";


const ItemList = ({ items }) => {
    console.log(items);
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
                    <img src={CDN_URL + item?.card?.info?.imageId} className="h-[110px] w-[120px] rounded-lg "
                        alt="myimage" />
                </div>
            </div>

        ))}

    </div >
}
export default ItemList;

