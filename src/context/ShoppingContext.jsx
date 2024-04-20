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
    const contextValue = {cartItems, addToCart, removeFromCart}
    return (
        <ShoppingContext.Provider value={contextValue}>{props.children}</ShoppingContext.Provider>
    )
}
