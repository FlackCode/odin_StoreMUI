import agccover from './Assets/agccover.jpg'
import products from './ProductsArray'
import { ShoppingContext } from '../context/ShoppingContext'
import { useContext } from 'react'
import CartItem from './CartItem'
export default function CartBody() {
    const { cartItems, getTotalCartAmount } = useContext(ShoppingContext)
    const totalAmount = getTotalCartAmount()
    return (
        <div className='flex flex-grow md:flex-row xsm:flex-col justify-between bg-gray-900 overflow-hidden'>
            <div className='md:w-2/5 xl:w-1/5 xsm:w-full flex flex-col gap-4 p-2 overflow-auto'>
                {products.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product}/>
                    }
                })}
            </div>
            <div className='md:w-1/5 xsm:w-full md:h-full xsm:h-1/5 px-2 md:py-4 xsm:py-2 bg-gray-950 flex flex-col justify-between '>
                <div>
                    <h1 className='text-center text-white text-3xl font-bold'>Checkout</h1>
                </div>
                <div>
                    <h1 className='text-white md:text-xl xsm:text-base font-bold mb-2'>Total: ${totalAmount}</h1>
                    <button className='text-white font-bold bg-gray-800 w-full py-2 rounded-xl hover:cursor-pointer hover:bg-gray-900 transition-all duration-200'>Proceed to checkout</button>
                </div>
            </div>
        </div>
    )
}