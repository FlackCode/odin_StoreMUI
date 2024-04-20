import { Link }  from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'
export default function CartHeader() {
    return (
        <div className="md:px-12 md:py-6 xsm:px-6 xsm: py-3 border-b bg-black flex flex-row items-center justify-between ">
            <Link to='/'>
            <div className='flex flex-row gap-2 items-center hover:cursor-pointer'>
                <BsArrowLeft className='text-white text-xl '/>
                <h1 className='text-white font-bold xl:text-2xl xsm: text-lg select-none'>Return to home page</h1>
            </div>
            </Link>
        </div>
    )
}