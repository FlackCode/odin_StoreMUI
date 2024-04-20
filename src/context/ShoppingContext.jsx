import { createContext, useState } from "react";
import products from "../Components/ProductsArray";
export const ShoppingContext = createContext(null)
function getDefaultCart() {
    let cart = {}
    for (let i=1; i < products.length + 1; i++) {
        cart[i] = 0
    }
    return cart
}
export default function ShoppingContextProvider(props) {
    const [cartItems, setCartItems] = useState(getDefaultCart())

    function addToCart(itemId) {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }
    function removeFromCart(itemId) {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }
    function updateCartItemCount(newAmount,itemId) {
        setCartItems((prev) => ({...prev, [itemId]: newAmount}))
    }
    function getTotalCartAmount() {
        let totalAmount = 0
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = products.find((product) => product.id === Number(item))
                totalAmount += cartItems[item] * itemInfo.price
            }
        }
        return totalAmount
    }
    const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount}
    return (
        <ShoppingContext.Provider value={contextValue}>{props.children}</ShoppingContext.Provider>
    )
}
