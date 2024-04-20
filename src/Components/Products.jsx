import agccover from './Assets/agccover.jpg'
export default function Products() {
    const gridItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <div className=" bg-gray-950 py-16 lg:px-24 xsm: px-8">
            <div className="grid xsm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 h-full gap-6">
                {gridItems.map((gridItem) => (
                    <div className="bg-gray-800 rounded-2xl flex flex-col items-center p-2">
                        <img src={agccover} className='w-full rounded-2xl' />
                        <h1 className="text-white font-bold text-xl">Product</h1>
                        <p className="text-white font-semibold text-base">Short description about the product, info regarding the material, color, etc</p>
                    </div>
                ))}
            </div>
        </div>
    )
}