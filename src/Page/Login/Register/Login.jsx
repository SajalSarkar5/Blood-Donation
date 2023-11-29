import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import toast from "react-hot-toast";
import GoogleLogin from "../../../components/GoogleLogin";
import { Helmet } from "react-helmet";


const Login = () => {
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log('location in the login page', location)

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                toast.success('"Good job!", "You clicked the button!", "success"')
                navigate(location?.state ? location.state : '/');

            })
            .catch(error => {
                console.error(error);
            })
    }



    return (
        <div>
            <Helmet>
                <title>Blood Donation | Login</title>
                <meta name="description" content="Helmet application" />
            </Helmet>

            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-100">
                        <div className="text-center pt-5">
                            <h5 className="text-2xl font-bold text-blue-600">Sing In</h5>
                        </div>
                        <div className="px-5 pt-5">
                            <GoogleLogin></GoogleLogin>
                        </div>
                        <div class="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">Or</div>
                        <form onSubmit={handleLogin} className="card-body">
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
                                <button className="btn bg-blue-600 hover:bg-blue-500 border-0 text-[#cae9ff] capitalize">Login</button>
                            </div>
                        </form>
                        <div className="w-3/4 mx-auto"></div>
                        <p className="text-center pb-4 text-black">Don't have an account? <Link to="/register"><span className="text-blue-600">Register</span></Link></p>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Login;