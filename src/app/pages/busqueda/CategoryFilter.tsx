import { useEffect, useState } from "react";

export default function CategoryFilter() {
    const [open, setOpen] = useState(true);


    const categories = [
        { id: "Falabella", name: "Falabella", count: 56 },
        { id: "Mercado Libre", name: "Mercado Li..", count: 42 },
        { id: "Precop", name: "Menor a", count: 56 },
        { id: "asus", name: "", count: 97, checked: true },
        
    ];

    return (
        <div className="flex flex-col ">
            <button
                type="button"
                onClick={() => setOpen(!open)}
                className=" mx-6 my-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5.5 py-0.5 inline-flex items-center"
            >
                Filtrar
                <svg
                    className="w-2 h-2 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>

            {open && (
                <div className="absolute top-26 z-10 w-40 p-3 bg-white rounded-lg shadow dark:bg-gray-800">
                    <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                        
                    </h6>
                    <ul className="space-y-2 text-sm">
                        {categories.map(({ id, name, count, checked }) => (
                            <li key={id} className="flex items-center">
                                <input
                                    id={id}
                                    type="checkbox"
                                    defaultChecked={checked}
                                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                />
                                <label
                                    htmlFor={id}
                                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                                >
                                    {name} ({count})
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}


