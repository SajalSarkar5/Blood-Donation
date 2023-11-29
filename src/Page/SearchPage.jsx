

// const SearchPage = () => {
//     return (
//         <div>

//             <div class="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
//                 <form>

//                     <div class="bg-white rounded-xl shadow dark:bg-slate-900">
//                         <div class="relative h-40 rounded-t-xl bg-[url('https://preline.co/assets/svg/component/abstract-bg-1.svg')] bg-no-repeat bg-cover bg-center">
//                             <div class="absolute top-0 end-0 p-4">
//                                 <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
//                                     <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" x2="12" y1="3" y2="15" /></svg>
//                                     Upload header
//                                 </button>
//                             </div>
//                         </div>

//                         <div class="pt-0 p-4 sm:pt-0 sm:p-7">

//                             <div class="space-y-4 sm:space-y-6">
//                                 <div>
//                                     <label class="sr-only">
//                                         Product photo
//                                     </label>

//                                     <div class="grid sm:flex sm:items-center sm:gap-x-5">
//                                         <img class="-mt-8 relative z-10 inline-block h-24 w-24 mx-auto sm:mx-0 rounded-full ring-4 ring-white dark:ring-gray-800" src="../assets/img/160x160/img1.jpg" alt="Image Description" />

//                                         <div class="mt-4 sm:mt-auto sm:mb-1.5 flex justify-center sm:justify-start gap-2">
//                                             <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
//                                                 <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" x2="12" y1="3" y2="15" /></svg>
//                                                 Upload logo
//                                             </button>
//                                             <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-red-500 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
//                                                 Delete
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>


//                                 <div class="space-y-2">
//                                     <label for="af-submit-app-category" class="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
//                                         blood group
//                                     </label>

//                                     <select id="af-submit-app-category" class="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
//                                         <option selected>Select a blood group</option>
//                                         <option>A+</option>
//                                         <option>A-</option>
//                                         <option>B+</option>
//                                         <option>B-</option>
//                                         <option>AB+</option>
//                                         <option>AB-</option>
//                                         <option>O+</option>
//                                         <option>O-</option>
//                                     </select>
//                                 </div>
//                                 <div class="space-y-2">
//                                     <label for="af-submit-app-category" class="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
//                                         district
//                                     </label>

//                                     <select id="af-submit-app-category" class="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
//                                         <option selected>Select a category</option>
//                                         <option>Khulna</option>
//                                         <option>Barishal</option>
//                                         <option>Chittagong</option>
//                                         <option>Dhaka</option>
//                                         <option>Sylhet</option>
//                                     </select>
//                                 </div>
//                                 <div class="space-y-2">
//                                     <label for="af-submit-app-category" class="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
//                                         Upazila
//                                     </label>

//                                     <select id="af-submit-app-category" class="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
//                                         <option selected>Select a category</option>
//                                         <option>Satkhira</option>
//                                         <option>Kaligunj</option>
//                                         <option>Asasuni</option>
//                                         <option>Devatha</option>
//                                         <option>Shyamnagar</option>
//                                     </select>
//                                 </div>

//                                 <div class="sm:col-span-3">
//                                     <label for="af-account-email" class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
//                                         Email
//                                     </label>
//                                 </div>
                                

//                                 <div class="sm:col-span-9">
//                                     <input id="af-account-email" type="email" class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Your Email"/>
//                                 </div>


//                             </div>


//                             <div class="mt-5 flex justify-center gap-x-2">
//                                 <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
//                                 Search Button
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default SearchPage;