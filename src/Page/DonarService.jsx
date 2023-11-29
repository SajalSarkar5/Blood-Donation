import useDonarAllData from "../hook/useDonarAllData";


const DonarService = () => {
    const { isPending, error, alldonardata } = useDonarAllData()
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12 text-center">


            {
                alldonardata?.map((item, i) => {
                    return <div key={i}>
                        <a href="#" class="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                            <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white"><span className="text-xl font-semibold">Name : </span>{item.name}</h5>
                            <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white"><span className="text-xl font-semibold">Date : </span>{item.date}</h5>
                            <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white"><span className="text-xl font-semibold">Location : </span>{item.location}</h5>
                            <div className="space-y-2">
                                <p class="font-normal text-gray-700 dark:text-gray-400"><span className="text-xl font-semibold">Information : </span>{item.information}</p>
                            </div>
                        </a>

                    </div>
                })
            }


        </div>
    );
};

export default DonarService;