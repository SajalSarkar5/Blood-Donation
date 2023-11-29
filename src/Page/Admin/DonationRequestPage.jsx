import { useContext } from "react";
import useDonarAllData from "../../hook/useDonarAllData";
import { AuthContext } from "../../providers/AuthProvider";
import useAxios from "../../hook/useAxios";
import { Helmet } from "react-helmet";


const DonationRequestPage = () => {

    const { user } = useContext(AuthContext);
    const { isPending, error, alldonardata, refetch } = useDonarAllData()
    const axiosData = useAxios()


    const handelUpded = (id, status) => {
        axiosData.patch(`/statuschange?id=${id}&status=${status}`)
            .then(res => {
                console.log(res.data)
                refetch();
            })
    }

    return (
        <div>
            <Helmet>
                <title>Blood Donation | Donation Request</title>
                <meta name="description" content="Helmet application" />
            </Helmet>

            <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

                <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                    <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">My Donation Requests</h2>
                </div>



                <div>
                    <h1>My Donation Requests</h1>


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
                                                return <tbody key={i} class="divide-y divide-gray-200 dark:divide-gray-700">
                                                    <tr>
                                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{item.name}</td>
                                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{item.location}</td>
                                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{item.date}</td>
                                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{item.blood}</td>

                                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{item.time}</td>
                                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{item?.status}</td>



                                                        <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                            <button onClick={() => handelUpded(item._id, 'pending')} type="button" class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">pending</button>
                                                        </td>
                                                        <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                            <button onClick={() => handelUpded(item._id, 'inprogress')} type="button" class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">inprogress</button>
                                                        </td>
                                                        <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                            <button onClick={() => handelUpded(item._id, 'done')} type="button" class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">done</button>
                                                        </td>
                                                        <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                            <button onClick={() => handelUpded(item._id, 'canceled')} type="button" class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">canceled</button>
                                                        </td>


                                                    </tr>


                                                </tbody>
                                            })
                                        }
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default DonationRequestPage;