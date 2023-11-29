import Swal from "sweetalert2";
import useAxios from "../../hook/useAxios";
import { Helmet } from "react-helmet";


const AddBlog = () => {

    const axiosData = useAxios()


    const handleSubmit = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const text = form.get('text');
        const photo = form.get('photo');
        const editor = form.get('editor');
        const admindata = { text, photo, editor }

        axiosData.post('/admindata', admindata)
            .then(res => {
                Swal.fire({
                    title: "Good job!",
                    text: "You clicked the button!",
                    icon: "success"
                });
                e.target.reset();

            })
    }



    return (
        <div>
             <Helmet>
                <title>Blood Donation | Add Blog</title>
                <meta name="description" content="Helmet application" />
            </Helmet>

            <form onSubmit={handleSubmit} class="w-full ">
                <div class="mb-5">
                    <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">title</label>
                    <input type="text" id="large-input" placeholder="title of the blog" name="text" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div class="mb-5">
                    <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">thumbnail image</label>
                    <input type="photo" id="base-input" placeholder="thumbnail image" name="photo" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div>
                    <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">text editor</label>
                    <input type="editor" id="large-input" placeholder="blog content" name="editor" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div className="mt-5">
                    <button type="submit" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                        Create Button
                    </button>
                </div>
            </form>

        </div>
    );
};

export default AddBlog;