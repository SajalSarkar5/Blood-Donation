import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Autosearch from '../common/Autosearch';



const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
}

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '700px'
}
const slideImages = [
    {
        url: 'https://i.ibb.co/4JYLHjc/blood-5053770-1280.jpg',
        caption: 'Slide 1'
    },
    {
        url: 'https://i.ibb.co/ZdXVPJW/blood-donation-2603649-1280.jpg',
        caption: 'Slide 2'
    },
    {
        url: 'https://i.ibb.co/ZdXVPJW/blood-donation-2603649-1280.jpg',
        caption: 'Slide 3'
    },
    {
        url: 'https://i.ibb.co/S3TGPkQ/earth-4861456-1280.jpg',
        caption: 'Slide 4'
    },
    {
        url: 'https://i.ibb.co/k8V22pM/donate-blood-2423397-1280.jpg',
        caption: 'Slide 5'
    },
];



const Banner = () => {

    return (
        <div className="slide-container my-12">
            <Slide>
                {slideImages.map((slideImage, index) => (
                    <div key={index}>
                        <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                            <div>
                                <div className='text-center px-10 md:px-10 lg:px-52'>
                                    <h1 className='text-2xl font-semibold text-white'>Join Us in Our Blood Donation Drive!</h1>
                                    <p className='text-white font-normal text-base'>Participate in our upcoming blood donation event! Your donation can save lives, providing a lifeline for those in need. Every contribution matters. Join us in this noble cause, and make a meaningful impact on someone's life.</p>
                                </div>
                                <div className='flex justify-center items-center gap-4 pt-5'>
                                    <Link to="/login">
                                        <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                            Join Us
                                            <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                        </button>
                                    </Link>
                                    <Link >
                                        <button type="button" onClick={() => document.getElementById('my_modal_10').showModal()} class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                            Search Donors
                                            <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slide>

            <dialog id="my_modal_10" className="modal">
                <div className="modal-box h-screen">
                    <Autosearch></Autosearch>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>

    );
};

export default Banner;