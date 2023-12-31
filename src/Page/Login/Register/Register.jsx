import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";
import GoogleLogin from "../../../components/GoogleLogin";

import useAxios from "../../../hook/useAxios";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet";

const Register = () => {

    const axiosAuth = useAxios()

    const { createUser, auth } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const blood = form.get('blood');
        const district = form.get('district');
        const upazila = form.get('upazila');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name,blood,district,upazila, photo, email, password);

        const isValidCarPassword = /^(?=.*[A-Z]).+$/.test(password);
        const isValidSpacialPassword = /^(?=.*[A-Z])(?=.*[^A-Za-z0-9]).+$/.test(password);

        if (password.length < 6) {
            toast.error("PLease provide 6 character password!")
            return
        }

        if (!isValidCarPassword) {
            toast.error("PLease provide capital letter!")
            return
        }
        if (!isValidSpacialPassword) {
            toast.error("PLease provide special character!")
            return
        }



        createUser(email, password)
            .then((user) => {
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photo || "https://www.w3schools.com/howto/img_avatar.png"
                }).then(() => {

                    const userInfo = {
                        email: user.user.email,
                        name: user?.user?.displayName,
                        photo: user?.user?.photoURL,
                        role: 'donor',
                        blood,
                        district,
                        upazila,


                    }
                    axiosAuth.post('/user', userInfo)
                        .then(res => {
                            Swal.fire({
                                title: "Good job!",
                                text: "You clicked the button!",
                                icon: "success"
                            });
                            navigate('/')
                        })
                }).catch((error) => {
                    console.log(error)
                });
            }).catch(() => {

            })


    }

    return (
        <div>
            <Helmet>
                <title>Blood Donation | Register</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-100">
                        <div className="text-center pt-5">
                            <h5 className="text-2xl font-bold text-blue-600">Sing up</h5>
                        </div>
                        <div className="px-5 pt-5">
                            <GoogleLogin></GoogleLogin>
                        </div>
                        <div class="pt-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">Or</div>
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text block">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text block">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
                            </div>
                            <div class="space-y-2">
                                <label for="af-submit-app-category" class="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
                                    Blood Group
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
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text block">District</span>
                                </label>
                                <input type="text" placeholder="District" name="district" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text block">Upazila</span>
                                </label>
                                <input type="text" placeholder="Upazila" name="upazila" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text block">Email</span>
                                </label>
                                <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text block">Password</span>
                                </label>
                                <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover block">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn  bg-blue-600 hover:bg-blue-500 text-[#FFF] capitalize">Register</button>
                            </div>
                        </form>
                        <div className="w-3/4 mx-auto"></div>
                        <p className="text-center pb-4 text-black">Already have an account?
                            <Link to="/login"><span className="text-blue-600">Login</span></Link></p>
                    </div>

                </div>

            </div>


        </div>
    );
};

export default Register;