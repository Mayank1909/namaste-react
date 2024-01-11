import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
    const cartItems = useSelector((store) => store?.cart?.items);// subscribing to the store
    // always subscribe to the small portion of the store
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="text-center m-4 p-4">
            <h1 className="font-bold text-2xl">Cart</h1>
            <div className="w-6/12 m-auto">
                <button className="p-2 m-2 bg-black text-white rounded-lg"
                    onClick={handleClearCart}>
                    clear cart
                </button>
                {cartItems.length === 0 &&
                    <span className="text-xl font-bold ">Add items to update your cart</span>}
                <ItemList items={cartItems} />
            </div>
        </div>

    )
}
export default Cart;