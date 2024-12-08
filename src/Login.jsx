import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGoogle } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { IoEyeOffSharp } from "react-icons/io5";
import { AuthContext } from "./provider/AuthProvider";
import { Slide } from "react-awesome-reveal";


const Login = () => {

    useEffect(() => {
        document.title = "Login | EquiSports";
        window.scrollTo(0, 0);
    }, []);

    const { userLogin, setUser, googleSignIn } = useContext(AuthContext);
    const [error, setError] = useState({});
    const [email, setEmail] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(location);


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log({ email, password });

        userLogin(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                toast.success("Login successful!", {
                    style: {
                        background: 'white',
                        color: 'blue'
                    }
                });
                setTimeout(() => {
                    navigate(location?.state ? location.state : "/");
                }, 2000);
            })
            .catch((err) => {
                setError({ ...error, login: err.code });
                toast.error("Login failed: " + err.message, {
                    style: {
                        background: 'white',
                        color: 'red'
                    }
                });
            })

    };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                setUser(user);
                toast.success("Google Sign-In successful!");
                setTimeout(() => {
                    navigate(location?.state || "/");
                }, 2000);
            })
            .catch((err) => {
                toast.error("Google Sign-In failed: " + err.message);
            });
    };


    return (

        <div className="min-h-screen flex justify-center items-center text-black py-10">
            <ToastContainer position="top-center" />

            <Slide>
                <div className="bg-white shadow-lg rounded-lg p-10 max-w-lg w-full border-2">


                    <h2 className="text-center text-blue-600 font-bold text-4xl mb-5">Login to <span className="text-black">EquiSports</span>
                    </h2>

                    <p className="text-center text-gray-600 mb-8">
                        Access your account and explore premium sports equipment.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">

                        <div className="form-control">

                            <label className="label text-gray-600">
                                <span className="label-text text-lg">Email</span>
                            </label>

                            <input
                                name="email"
                                type="email"
                                placeholder="email"
                                className="input input-bordered"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                        </div>

                        <div className="form-control relative">

                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>

                            <input
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                placeholder="password"
                                className="input input-bordered"
                                required
                            />

                            <button
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-2 top-12 text-gray-600 hover:text-blue-600">
                                {
                                    showPassword ? <IoEyeSharp /> : <IoEyeOffSharp />
                                }
                            </button>

                            {
                                error.login && (
                                    <label className="label text-sm text-red-500 mt-2">
                                        {error.login}
                                    </label>
                                )
                            }

                            <label className="text-left">
                                <Link
                                    to='/auth/forgot-password'
                                    state={{ email }}
                                    className="label-text-alt link link-hover underline"
                                >
                                    Forgot password?
                                </Link>
                            </label>

                        </div>

                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary w-full">Login</button>
                        </div>
                    </form>

                    <div className="divider text-gray-500">OR</div>

                    <form onSubmit={handleSubmit} >
                        <div className="form-control">
                            <button
                                className="btn btn-outline border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white w-full"
                                onClick={handleGoogleSignIn}
                            >
                                Login with Google
                                <FaGoogle className="mr-2" />
                            </button>
                        </div>
                    </form>

                    <p className="text-center text-gray-600 mt-5">Don't Have An Account ? <Link className="text-blue-600 underline hover:text-blue-800" to="/auth/register">Register</Link>
                    </p>

                </div>
            </Slide>
        </div>
    );
};

export default Login;