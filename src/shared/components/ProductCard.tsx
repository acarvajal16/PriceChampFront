import { Producto } from "@/interfaces/Api"

export const ProductCard = ({ producto }: { producto: Producto }) => {
    return (
        <div className="flex flex-col items-center p-2 w-[210px] h-[310px] bg-white rounded-lg">
            <div className="m-2 bg-gray-300 w-[170px] h-[200px] rounded-md">
                <img className="object-scale-down max-h-full" src={producto.imagen} ></img>
            </div>
            <div className="flex w-full pl-2.5">
                <div className="flex flex-col w-full">
                    <div className="flex items-center justify-between">
                        <h2 className="font-radiobold text-lg">{producto.producto}</h2>
                        <button
                            type="button"
                            className="rounded-full border border-transparent mr-1 p-2 text-sm text-slate-600 transition-colors hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-4 h-4"
                            >
                                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                            </svg>
                        </button>
                    </div>

                    <h4 className="text-xs font-bold text-gray-500 -mt-1.5">{""}</h4>

                    <div className="flex items-center justify-between w-full mt-2">
                        <span className="text-xl font-radio text-gray-900 dark:text-white">{producto.precio}</span>
                        <a
                            href="#"
                            className=" mr-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1.5 text-white text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Ver
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}