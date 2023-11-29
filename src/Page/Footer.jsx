import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>

            <footer class="bg-white rounded-lg shadow dark:bg-gray-900">
                <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div class="sm:flex sm:items-center sm:justify-between">
                        <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img src="https://i.ibb.co/0M17Bz4/blood.png" class="h-8" alt="Flowbite Logo" />
                            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"><span className='text-red-600'>Blood </span>Donation
                            </span>
                        </a>
                        <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <Link to="/">
                                    <a class="hover:underline me-4 md:me-6">Home</a>
                                </Link>
                            </li>
                            <li>
                                <Link to="/donarservice">
                                    <a class="hover:underline me-4 md:me-6">Service</a>
                                </Link>
                            </li>
                            <li>
                                <Link to="/blogpage">
                                    <a class="hover:underline me-4 md:me-6">Blog Page</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div class="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">Or</div>
                    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Blood Donation</a>. All Rights Reserved.</span>
                </div>
            </footer>



        </div>
    );
};

export default Footer;