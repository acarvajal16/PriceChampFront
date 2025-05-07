import Sidebar from "@/shared/components/SideBar";

function Historial() {
    return (
        <div className="container max-w-full flex p-4">
            <div>
                <Sidebar />
            </div>
            <div className="m-5 w-full  rounded-2xl bg-white shadow-xl">
                <div className="px-8 pt-6">
                    <h2 className="text-2xl font-bold font-radio">Historial</h2>
                    <div
                        className="my-1 h-0.5 w-full bg-blue-900">
                    </div>
                </div>
                <div className="">
                    <div className="flex flex-col">
                        <div className="overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 px-4 sm:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                    <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
                                        <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                                            <tr>
                                                <th scope="col" className="px-6 py-4">#</th>
                                                <th scope="col" className="px-6 py-4">First</th>
                                                <th scope="col" className="px-6 py-4">Last</th>
                                                <th scope="col" className="px-6 py-4">Handle</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {[
                                                { id: 1, first: "Mark", last: "Otto", handle: "@mdo" },
                                                { id: 2, first: "Jacob", last: "Thornton", handle: "@fat" },
                                                { id: 3, first: "Larry", last: "Wild", handle: "@twitter" },
                                            ].map(({ id, first, last, handle }) => (
                                                <tr
                                                    key={id}
                                                    className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600"
                                                >
                                                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                        {id}
                                                    </td>
                                                    <td className="whitespace-nowrap px-6 py-4">{first}</td>
                                                    <td className="whitespace-nowrap px-6 py-4">{last}</td>
                                                    <td className="whitespace-nowrap px-6 py-4">{handle}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Historial;