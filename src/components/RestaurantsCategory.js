import ItemList from "./ItemList";



const RestaurantsCategory = ({ data }) => {
    // console.log(data);
    return (
        <>
            <div className="w-7/12 mx-auto my-4 shadow-lg p-4 bg-gray-50 ">
                <div className="flex justify-between">
                    <span className="font-bold">{data?.title}({data.itemCards.length})</span>
                    <span className="text-lg">⬇</span>
                </div>
                <ItemList items={data.itemCards} />
            </div>
        </>
    )

}
export default RestaurantsCategory;