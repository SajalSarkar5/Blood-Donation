import { Helmet } from "react-helmet";
import Banner from "./Banner";
import CardSection from "./CardSection";
import ContactUs from "./ContactUs";
import FeaturedSection from "./FeaturedSection ";
import useDonarAllData from "../hook/useDonarAllData";
import { useState } from "react";


const Home = () => {
    const { isPending, error, alldonardata, refetch } = useDonarAllData()
    console.log(alldonardata)

    const [data, setData] = useState()
    const handelModal = (item) => {
        setData(item)
        document.getElementById('my_modal_1').showModal()
    }

    return (
        <div>
            <Helmet>
                <title>Blood Donation | Home</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <Banner></Banner>
            <CardSection></CardSection>
            <FeaturedSection></FeaturedSection>
            <ContactUs></ContactUs>


            <div class="flex flex-col">
                <div class="-m-1.5 overflow-x-auto">
                    <div class="p-1.5 min-w-full inline-block align-middle">
                        <div class="overflow-hidden">
                            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead>
                                    <tr>
                                        <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Name</th>
                                        <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Location</th>
                                        <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Date</th>
                                        <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Blood</th>
                                        <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Time</th>
                                        <th scope="col" class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Action</th>
                                    </tr>
                                </thead>
                                {
                                    alldonardata?.map((item, i) => {
                                        return <>
                                            {
                                                item?.status === 'pending' && <tbody key={i} class="divide-y divide-gray-200 dark:divide-gray-700">
                                                    <tr>
                                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{item.name}</td>
                                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{item.location}</td>
                                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{item.date}</td>
                                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{item.blood}</td>
                                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{item.time}</td>
                                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{item.status}</td>


                                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                                            <button className="btn" onClick={() => handelModal(item)}>open modal</button>
                                                        </td>


                                                    </tr>
                                                </tbody>
                                            }
                                        </>

                                    })
                                }
                            </table>




                        </div>
                    </div>
                </div>
            </div>


            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <div>

                        <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                            <h5 class="mb-1 text-xl font-semibold tracking-tight text-gray-900 dark:text-white"><span>Name : </span>{data?.name}</h5>
                            <h5 class="mb-1 text-xl font-semibold tracking-tight text-gray-900 dark:text-white"><span>Date : </span>{data?.date}</h5>
                            <h5 class="mb-1 text-xl font-semibold tracking-tight text-gray-900 dark:text-white"><span>Location : </span>{data?.location}</h5>
                            <h5 class="mb-1 text-xl font-semibold tracking-tight text-gray-900 dark:text-white"><span>Blood : </span>{data?.blood}</h5>
                            <h5 class="mb-1 text-xl font-semibold tracking-tight text-gray-900 dark:text-white"><span>Time : </span>{data?.time}</h5>
                            <p class="font-normal text-gray-700 dark:text-gray-400"><span className="text-lg font-semibold">Information : </span> {data?.information}</p>
                        </a>

                    </div>
                    <div className="modal-action">
                        <form method="dialog">

                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>



        </div>
    );
};

export default Home;