
import Swal from 'sweetalert2';
import useAxios from '../../hook/useAxios';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const CreateDonationRequest = () => {
    const axiosData = useAxios()


    const handleSubmit = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const location = form.get('location');
        const date = form.get('date');
        const time = form.get('time');
        const blood = form.get('blood');
        const information = form.get('information');
        const status = 'pending'
        const donardata = {
            name, location, date, time, blood, information, status
        }
        axiosData.post('/donardata', donardata)
            .then(res => {
                Swal.fire({
                    title: "successfully",
                    text: "Your file has been successfully.",
                    icon: "success"
                });
                e.target.reset();
            })
    }



    return (
        <div>
            <Helmet>
                <title>Blood Donation | Create Donation</title>
                <meta name="description" content="Helmet application" />
            </Helmet>

            <div className='lg:px-[150px] px-10 pb-24 pt-28'>
                <div className='text-center'><h1 className='text-3xl Rancho'>Add Donar</h1></div>
                <form onSubmit={handleSubmit} className='p-10 rounded-md shadow-lg'>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-xl  bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="name" className="peer-focus:font-medium absolute text-xl text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                    </div>

                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="location" id="image" className="block py-2.5 px-0 w-full text-xl  bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="image" className="peer-focus:font-medium absolute text-xl text-black  dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Location</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="date" name="date" id="type" className="block py-2.5 px-0 w-full text-xl  bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="type" className="peer-focus:font-medium absolute text-xl text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">donation date</label>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="time" name="time" id="type" className="block py-2.5 px-0 w-full text-xl  bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="type" className="peer-focus:font-medium absolute text-xl text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">donation time</label>
                        </div>
                        <div class="space-y-2">
                            <label for="af-submit-app-category" class="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
                                blood group
                            </label>

                            <select id="af-submit-app-category" name='blood' class="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                                <option>A+</option>
                                <option>A-</option>
                                <option>B+</option>
                                <option>B-</option>
                                <option>AB+</option>
                                <option>AB-</option>
                                <option>O+</option>
                                <option>O-</option>
                            </select>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="information" id="type" className="block py-2.5 px-0 w-full text-xl  bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="type" className="peer-focus:font-medium absolute text-xl text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">donor information</label>
                        </div>

                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-xl w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add button</button>

                </form>
                <div className='flex justify-center items-center gap-10 py-3'>
                    <div>
                        <Link to="/donardashboard/editbutton">
                            <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                Edit
                            </button>
                        </Link>
                    </div>
                    <div>
                        <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-500 text-white hover:bg-red-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                            Delete
                        </button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default CreateDonationRequest;