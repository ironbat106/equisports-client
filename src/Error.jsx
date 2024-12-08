import { Link } from "react-router-dom";
import ErrorAni from "./assets/ErrorAni.json";
import Lottie from "lottie-react";


const Error = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">

            <h1 className="text-7xl lg:text-9xl font-charm text-blue-600">
                Error:404!
            </h1>

            <p className="text-xl lg:text-3xl mt-4 text-gray-300 text-center px-4 font-charm">
                Looks like this page is out living its best life while you're stuck here.
            </p>

            <p className="text-lg lg:text-xl mt-2 text-gray-400 italic text-center">
                Guess it decided to take a vacation without leaving a forwarding address. Typical.
            </p>



            {/* <img
                src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnF0bmt6am1pNWtpbXlhYWRvNXByeTNrYnFoenM0M3kxOG5ncWJncyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8L0Pky6C83SzkzU55a/giphy.gif"
                alt="Lost Anime Character"
                className="mt-8 rounded-lg shadow-lg w-80 lg:w-96"
            /> */}
            <Lottie animationData={ErrorAni}></Lottie>

            <div className="mt-8">
                <Link
                    to="/"
                    className="btn btn-primary text-lg px-6 py-2 hover:bg-blue-300 transition-all"
                >
                    Go Home!
                </Link>
            </div>

            <p className="mt-6 text-sm text-gray-500">
                (P.S. If you think this is a mistake, maybe refresh... or just blame the internet.)
            </p>

        </div>
    );
};

export default Error;