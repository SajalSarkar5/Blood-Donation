import useContentManagement from "../hook/useContentManagement";


const CardSection = () => {
    const { isPending, error, allcontent } = useContentManagement()
    console.log(allcontent)
    return (
        <div>
            <div className="text-center">
                <h1 className="text-3xl font-semibold">All Service</h1>
            </div>

            <div className="my-10">

                {
                    allcontent?.length > 0 ?
                        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 lg:mb-14">
                            {
                                allcontent?.map((item, i) => {
                                    return <a key={i} class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                        <div class="aspect-w-16 aspect-h-9">
                                            <img class="w-full object-cover rounded-t-xl" src={item?.photo} alt="Image Description" />
                                        </div>
                                        <div class="p-4 md:p-5">
                                            <p class="mt-2 text-lg uppercase text-gray-600 dark:text-gray-400">
                                                {item.editor}
                                            </p>
                                            <h3 class="mt-2 text-sm  text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
                                                {item.text}
                                            </h3>
                                        </div>
                                    </a>
                                })
                            }
                        </div>
                        : <div className='flex justify-center items-center'>
                            <h1 className='text-3xl font-semibold'>No Data Here</h1>
                        </div>
                }

            </div>

        </div>
    );
};

export default CardSection;