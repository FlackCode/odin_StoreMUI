import { useContext } from "react"
import { ShoppingContext } from "../context/ShoppingContext"
export default function CartItem(props) {
    const {id, image, name, price, description} = props.data
    const { addToCart, removeFromCart, cartItems, updateCartItemCount } = useContext(ShoppingContext)
    return (
        <div className='bg-black border-2 shadow-white shadow-sm px-4 md:py-6 xsm:py-3 rounded-xl flex flex-row gap-4 justify-between'>
            <div className='md:w-1/2 xsm:w-1/3'>
                <img src={image} className='md:rounded-2xl xsm:rounded-xl'/>
            </div>
            <div className='flex flex-col justify-between'>
                <div className='flex flex-col md:gap-2 xsm: gap-1'>
                    <h1 className="text-white font-bold md:text-xl xsm:text-lg">{name}</h1>
                    <p className='text-white font-semibold text-base'>Price: ${price}</p>
                    <p className='text-white font-semibold md:text-base xsm:text-sm'>{description}</p>
                </div>
                <div className='flex flex-row justify-end items-center gap-2'>
                    <h1 className='font-bold text-white w-2/6 text-center'>Quantity: </h1>
                    <div className='flex flex-row gap-2 text-white rounded-2xl w-2/6 justify-around items-center bg-gray-950'>
                        <button className='bg-black w-1/3 rounded-xl' onClick={() => removeFromCart(id)}>-</button>
                        <input type="number" className='outline-none select-none w-1/3 text-center bg-gray-950 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' 
                        value={cartItems[id]} onChange={(e) =>updateCartItemCount(Number(e.target.value), id)}/>
                        <button className='bg-black w-1/3 rounded-xl' onClick={() => addToCart(id)}>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}