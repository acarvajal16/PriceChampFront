import { useEffect, useState } from "react";

export default function CategoryFilter() {
    const [open, setOpen] = useState(true);


    const categories = [
        { id: "apple", name: "Apple", count: 56 },
        { id: "fitbit", name: "Fitbit", count: 56 },
        { id: "dell", name: "Dell", count: 56 },
        { id: "asus", name: "Asus", count: 97, checked: true },
        { id: "logitech", name: "Logitech", count: 97, checked: true },
        { id: "msi", name: "MSI", count: 97, checked: true },
        { id: "bosch", name: "Bosch", count: 176, checked: true },
        { id: "sony", name: "Sony", count: 234 },
        { id: "samsung", name: "Samsung", count: 76, checked: true },
        { id: "canon", name: "Canon", count: 49 },
        { id: "microsoft", name: "Microsoft", count: 45 },
        { id: "razor", name: "Razor", count: 49 },
    ];

    return (
        <div className="flex flex-col ">
            <button
                type="button"
                onClick={() => setOpen(!open)}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 inline-flex items-center"
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
                <div className="absolute top-26 z-10 w-64 p-3 bg-white rounded-lg shadow dark:bg-gray-700">
                    <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                        Categorías
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


