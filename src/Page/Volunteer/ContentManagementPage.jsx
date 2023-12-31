import React from 'react';
import useContentManagement from '../../hook/useContentManagement';

const ContentManagementPage = () => {
    const { isPending, error, allcontent, refetch } = useContentManagement()
    return (
        <div>
            <h1>Content Management Page</h1>

            <div>
                <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

                    <div class="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
                        <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Read our latest news</h2>
                        <p class="mt-1 text-gray-600 dark:text-gray-400">We've helped some great companies brand, design and get to market.</p>
                    </div>



                    <div >

                        {
                            allcontent?.length > 0 ?
                                <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 lg:mb-14">
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

            </div>

        </div>
    );
};

export default ContentManagementPage;