import { BsBagFill } from 'react-icons/bs'
import { Link }  from 'react-router-dom'
export default function Header() {
    return(
        <div className="md:px-12 md:py-6 xsm:px-6 xsm: py-3 bg-black border-b border-white flex flex-row items-center justify-between ">
            <div>
                <h1 className='text-white font-bold text-2xl select-none'>AGC Shop</h1>
            </div>
            <Link to='cart'>
            <div className='p-4 hover:cursor-pointer'>
                <BsBagFill className='text-white text-xl '/>
            </div>
            </Link>
        </div>
    )
}