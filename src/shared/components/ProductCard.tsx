export const ProductCard = ({ i }: { i: number }) => {
    return (
        <div className="flex flex-col items-center p-2 w-[210px] h-[310px] bg-white rounded-lg">
            <div className="m-2 bg-gray-300 w-[170px] h-[200px] rounded-md">

            </div>
            <div className="flex w-full pl-2.5">
                <div className="justify-start ">
                    <div className="flex">
                        <h2 className="font-radiobold text-lg">Producto #{i}</h2>
                        <img src="Heart Icon.svg" alt="Favoritos" className="mt-1.5 ml-13 size-5" />
                    </div>
                    <h4 className="text-xs font-bold text-gray-500 -mt-1.5">RF#000{i}</h4>
                    <div className="flex items-center justify-between w-full">
                        <span className=" mt-2 text-xl font-radio  text-gray-900 dark:text-white">$599</span>
                        <a href="#" className="text-white ml-11  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ver más</a>
                    </div>
                </div>
                <div className="">


                </div>
            </div>
        </div>
    )
}