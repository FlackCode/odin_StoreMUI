import CHAOS from './Assets/agccoverrr.jpg'

export default function Banner() {
    return (
        <div className="flex flex-grow justify-center background border-b">
            <div className="dim-background">
                <div className="flex flex-grow justify-center p-12 h-full">
                    <div className='xl:w-1/2 xsm:w-full flex flex-col justify-center items-center opacity-100'>
                        <h1 className='md:text-7xl xsm:text-4xl font-bold text-white mb-4 text-center'>Welcome to our store!</h1>
                        <p className='text-center text-white font-semibold xsm:text-lg lg:text-2xl'>Dive into a vibrant collection where art meets fashion. From captivating graphics to bold designs, each piece reflects the artists visionary talent. Explore statement tees and accessories crafted to ignite inspiration and elevate your style.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
