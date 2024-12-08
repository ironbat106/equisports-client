import BallBounce from "./assets/BallBounce.json";
import Lottie from "lottie-react";

const Loading = () => {
    return (

        <div className='flex flex-col min-h-screen justify-center items-center space-y-4'>
            
            {/* <span className="loading loading-ball loading-lg text-primary"></span> */}
            <Lottie animationData={BallBounce}></Lottie>

            <p className="text-blue-400 text-lg">
                Hold your horses... or maybe a whole herd. Greatness obviously needs its beauty sleep!
            </p>
        </div>
    );
};

export default Loading;