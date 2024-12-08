import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGoogle } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { IoEyeOffSharp } from "react-icons/io5";
import { AuthContext } from "./provider/AuthProvider";
import { Slide } from "react-awesome-reveal";


const Register = () => {

    useEffect(() => {
        document.title = "Register | ElevateU";
        window.scrollTo(0, 0);
    }, []);

    const { createNewUser, setUser, updateUserProfile, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);

        const passwordError = {};
        if (!/[A-Z]/.test(value)) {
            passwordError.uppercase = "Must include at least one uppercase letter";
        }
        if (!/[a-z]/.test(value)) {
            passwordError.lowercase = "Must include at least one lowercase letter";
        }
        if (value.length < 6) {
            passwordError.length = "Must be at least 6 characters long";
        }

        setError((prev) => ({
            ...prev,
            password: Object.keys(passwordError).length ? passwordError : null,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const name = form.get("name");
        const email = form.get("email");
        const photo = form.get("photo");
        const password = form.get("password");

        if (name.length < 4) {
            setError({ ...error, name: "Must be more than 4 characters long" });
            toast.error("Name Must be more than 4 characters long!");
            return;
        }

        if (error.password) {
            toast.error("Please fix the password errors before submitting.");
            return;
        }

        console.log({ name, email, photo, password });

        createNewUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        toast.success("Registration successful!", { autoClose: 3000 });
                        setTimeout(() => {
                            navigate("/");
                        }, 2000);
                    })
                    .catch((err) => {
                        toast.error("Error updating profile: " + err.message);
                        console.log(err);
                    })
            })
            .catch((err) => {
                toast.error("Registration failed: " + err.message);
                console.log(err);
            });
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

                    <h2 className="text-center text-blue-600 font-bold text-4xl mb-5">
                        Register for <span className="text-black">EquiSports</span>
                    </h2>

                    <p className="text-center text-gray-600 mb-8">
                        Create your account to access premium sports equipment.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">

                        <div className="form-control">

                            <label className="label text-gray-600">
                                <span className="label-text text-lg">Name</span>
                            </label>

                            <input name="name" type="text" placeholder="name" className="input input-bordered" required />
                        </div>
                        {
                            error.name && (
                                <label className="label text-xs text-red-500">
                                    {error.name}
                                </label>
                            )
                        }

                        <div className="form-control">

                            <label className="label text-gray-600">
                                <span className="label-text text-lg">Photo URL</span>
                            </label>

                            <input name="photo" type="text" placeholder="photo-url" className="input input-bordered" required />
                        </div>

                        <div className="form-control">

                            <label className="label text-gray-600">
                                <span className="label-text text-lg">Email</span>
                            </label>

                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control relative">

                            <label className="label text-gray-600">
                                <span className="label-text text-lg">Password</span>
                            </label>

                            <input
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                placeholder="password"
                                className="input input-bordered"
                                value={password}
                                onChange={handlePasswordChange}
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
                                error.password && (
                                    <div className="text-xs text-red-500 mt-1">
                                        {
                                            Object.values(error.password).map((err, index) => (
                                                <p key={index}>{err}</p>
                                            ))
                                        }
                                    </div>
                                )}

                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary w-full" disabled={!!error.password}>
                                Register
                            </button>
                        </div>
                    </form>

                    <div className="divider text-gray-500">OR</div>


                    <form onSubmit={handleSubmit}>
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

                    <p className="text-center text-gray-600 mt-5">Already Have An Account ? <Link className="text-blue-600 underline hover:text-blue-800" to="/auth/login">Login</Link>
                    </p>

                </div>
            </Slide>

        </div>
    );
};

export default Register;