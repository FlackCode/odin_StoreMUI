import { Link }  from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'
import agccover from './Assets/agccover.jpg'
export default function Cart() {
    return(
        <div className='h-screen flex flex-col'>
            <div className="md:px-12 md:py-6 xsm:px-6 xsm: py-3 bg-gray-800 flex flex-row items-center justify-between ">
                <Link to='/'>
                <div className='flex flex-row gap-2 items-center hover:cursor-pointer'>
                    <BsArrowLeft className='text-white text-xl '/>
                    <h1 className='text-white font-bold text-2xl select-none'>Return to home page</h1>
                </div>
                </Link>
            </div>
            <div className='flex flex-grow flex-row justify-between bg-gray-900 overflow-hidden'>
                <div className='w-2/6 flex flex-col gap-4 p-2 overflow-auto'>
                    <div className='bg-gray-800 px-4 py-6 rounded-xl flex flex-row gap-4 justify-between'>
                        <div className='w-1/2'>
                            <img src={agccover} className='rounded-2xl'/>
                        </div>
                        <div className='flex flex-col justify-between'>
                            <div className='flex flex-col gap-2'>
                                <h1 className="text-white font-bold text-xl">Product</h1>
                                <p className='text-white font-semibold text-base'>Price: $49.99</p>
                                <p className='text-white font-semibold text-base'>Short description about the product, info regarding the material, color, etc</p>
                            </div>
                            <div>
                                <h1 className='font-bold text-white w-2/6 text-center'>Quantity: </h1>
                                <div className='flex flex-row gap-2 text-white border-2 rounded-2xl w-2/6 justify-around items-center bg-gray-950'>
                                    <button className='bg-black w-1/3 rounded-xl'>-</button>
                                    <p className='select-none w-1/3 text-center '>1</p>
                                    <button className='bg-black w-1/3 rounded-xl'>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-1/5 h-full px-2 py-4 bg-gray-950 flex flex-col justify-between '>
                    <div>
                        <h1 className='text-center text-white text-3xl font-bold'>Checkout</h1>
                    </div>
                    <div>
                        <h1 className='text-white text-2xl font-bold mb-2'>Total: $49.99</h1>
                        <button className='text-white font-bold bg-gray-800 w-full py-2 rounded-xl hover:cursor-pointer hover:bg-gray-900 transition-all duration-200'>Proceed to checkout</button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}