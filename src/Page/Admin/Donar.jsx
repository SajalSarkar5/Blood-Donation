import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet";


const Donar = () => {
    const { user } = useContext(AuthContext);


    return (
        <div>
            <Helmet>
                <title>Blood Donation | Donor</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <div className="hero h-[50vh]" style={{ backgroundImage: 'url(https://i.ibb.co/S0dGjDT/istockphoto-1399755086-612x612.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Welcome To New User’s</h1>
                        <p className="mb-5">{user.displayName}</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center gap-6 my-10">
                <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <div class="flow-root">
                        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                            <li class="py-3 sm:py-4">
                                <div class="flex items-center">
                                    <div class="flex-shrink-0">
                                        <img class="w-8 h-8 rounded-full" src="https://i.ibb.co/zHCFd64/download-5.png" alt="Neil image" />
                                    </div>
                                    <div class="flex-1 min-w-0 ms-4">
                                    <h5 className="text-lg font-semibold">title</h5>
                                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            Neil Sims
                                        </p>
                                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                            email@windster.com
                                        </p>
                                    </div>

                                    <div class="flex-shrink-0">
                                        <img class="w-8 h-8 rounded-full" src="https://i.ibb.co/SPHNF8y/pexels-photo-614810.webp" alt="Neil image" />
                                    </div>

                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
                <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <div class="flow-root">
                        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                            <li class="py-3 sm:py-4">
                                <div class="flex items-center">
                                    <div class="flex-shrink-0">
                                        <img class="w-8 h-8 rounded-full" src="https://i.ibb.co/r0DbKNt/download-3.png" alt="Neil image" />
                                    </div>
                                    <div class="flex-1 min-w-0 ms-4">
                                    <h5 className="text-lg font-semibold">title</h5>
                                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            Neil Sims
                                        </p>
                                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                            email@windster.com
                                        </p>
                                    </div>
                                    <div class="flex-shrink-0">
                                        <img class="w-8 h-8 rounded-full" src="https://i.ibb.co/mBnP7jQ/pexels-photo-1300402.webp" alt="Neil image" />
                                    </div>

                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
                <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <div class="flow-root">
                        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                            <li class="py-3 sm:py-4">
                                <div class="flex items-center">
                                    <div class="flex-shrink-0">
                                        <img class="w-8 h-8 rounded-full" src="https://i.ibb.co/r0DbKNt/download-3.png" alt="Neil image" />
                                    </div>
                                    <div class="flex-1 min-w-0 ms-4">
                                        <h5 className="text-lg font-semibold">title</h5>
                                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            Neil Sims
                                        </p>
                                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                            email@windster.com
                                        </p>
                                    </div>
                                    <div class="flex-shrink-0">
                                        <img class="w-8 h-8 rounded-full" src="https://i.ibb.co/7CwtRCQ/pexels-photo-91227.webp" alt="Neil image" />
                                    </div>

                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donar;