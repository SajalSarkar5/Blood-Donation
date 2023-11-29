import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Helmet } from 'react-helmet';

const DonarDashboardHome = () => {
    const { user } = useContext(AuthContext);



    return (
        <div>
            <Helmet>
                <title>Blood Donation | Donar Dashboard</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <div className="hero h-[50vh]" style={{ backgroundImage: 'url(https://i.ibb.co/S0dGjDT/istockphoto-1399755086-612x612.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Welcome To New User’s</h1>
                        <p className="mb-5 text-2xl font-semibold">{user.displayName}</p>
                    </div>
                </div>
            </div>


            <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

                <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                    <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Donation Request</h2>
                </div>



                <div class="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
                    <div class="text-center">
                        <img class="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto" src="https://i.ibb.co/7CwtRCQ/pexels-photo-91227.webp" alt="Image Description" />
                        <div class="mt-2 sm:mt-4">
                            <h3 class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
                                David Forren
                            </h3>
                            <p class="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                                Founder / CEO
                            </p>
                        </div>
                    </div>


                    <div class="text-center">
                        <img class="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto" src="https://i.ibb.co/mBnP7jQ/pexels-photo-1300402.webp" alt="Image Description" />
                        <div class="mt-2 sm:mt-4">
                            <h3 class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
                                Amil Evara
                            </h3>
                            <p class="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                                UI/UX Designer
                            </p>
                        </div>
                    </div>


                    <div class="text-center">
                        <img class="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto" src="https://i.ibb.co/SPHNF8y/pexels-photo-614810.webp" alt="Image Description" />
                        <div class="mt-2 sm:mt-4">
                            <h3 class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
                                Ebele Egbuna
                            </h3>
                            <p class="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                                Support Consultant
                            </p>
                        </div>
                    </div>

                </div>

            </div>




        </div>
    );
};

export default DonarDashboardHome;