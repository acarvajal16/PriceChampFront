import { useState } from "react";
const Detalle = () => {

    const [isDropdownOpen, setDropdownOpen] = useState(false);
    return (
        <div className="flex justify-center p-8 dark:bg-gray-600">
            <div className="bg-white dark:bg-gray-800 h-[650px] w-[960px] rounded-xl">
                <div className="container flex justify-center p-6 mt-2 ">
                    <div className="bg-gray-200 h-[510px] w-[580px] rounded-lg m-1">
                        <div className="justify-center">
                            /*Galería IMG*/
                        </div>
                    </div>
                    <div className="w-[700px] ml-5  inline-flex flex-col">
                        <strong className="text-xl pb-2 dark:text-white">Nombre Producto</strong>
                        <div className="flex items-center">
                            {[...Array(4)].map((_, i) => (
                                <svg
                                    key={i}
                                    className="w-5 h-5 text-yellow-300 ml-1"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                            ))}
                            <svg
                                className="w-5 h-5 ml-1 text-gray-300 dark:text-gray-500"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 20"
                            >
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                        </div>
                        <div className="py-6">
                            <span className="font-bold text-base dark:text-white">Descripción</span>
                            <br />
                            <p className="dark:text-white">pd</p>
                        </div>
                        <div className="flex flex-col">
                            <div className="inline-block">
                                <span className="font-bold dark:text-white">Comprar en:</span>
                                <div className="flex ">
                                    <div className=" bg-gray-200 mr-1.5 h-6 w-1/2 dark:bg-gray-500 rounded-xs">

                                    </div>
                                    <div className=" bg-gray-200 h-6 w-1/2 dark:bg-gray-500 rounded-xs">

                                    </div>
                                </div>
                                <div className=" bg-gray-200 dark:bg-gray-600 p-3 rounded-md h-auto w-full my-5">
                                    <div className="flex items-start gap-2.5">
                                        <img
                                            className="w-8 h-8 rounded-full"
                                            src="ai-lighter.svg"
                                            alt="AI"
                                        />
                                        <div className="flex flex-col w-full max-w-[320px] leading-[1.5] p-4 border border-gray-200 bg-gray-100 rounded-e-xl rounded-ss-xl dark:bg-gray-700">
                                            <div className="flex items-center space-x-2">
                                                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                                                    Bonnie Green
                                                </span>
                                                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                                    11:46
                                                </span>
                                            </div>
                                            <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
                                                That's awesome. I think our users will really appreciate the
                                                improvements.
                                            </p>
                                            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                                Delivered
                                            </span>
                                        </div>
                                        <div className="relative">
                                            <button
                                                onClick={() => setDropdownOpen((prev) => !prev)}
                                                className="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600"
                                                type="button"
                                            >
                                                <svg
                                                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 4 15"
                                                >
                                                    <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                                                </svg>
                                            </button>
                                            {isDropdownOpen && (
                                                <div className="absolute right-0 z-10 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-40 dark:bg-gray-700 dark:divide-gray-600">
                                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                                        {["Reply", "Forward", "Copy", "Report", "Delete"].map((item) => (
                                                            <li key={item}>
                                                                <a
                                                                    href="#"
                                                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                                >
                                                                    {item}
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex items-end m-1.5 rounded-lg">
                                        <input type="text" name="User" id="" className=" ml-57 rounded-t-lg rounded-l-lg" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Detalle;