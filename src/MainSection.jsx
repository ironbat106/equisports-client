import { Fade } from "react-awesome-reveal";
import Footer from "./Footer";
import ProductSection from "./ProductSection";
import SportsCategories from "./SportsCategories";

const MainSection = () => {

    return (

        <div
            className="h-screen bg-cover bg-center relative"
            style={{
                backgroundImage: "url('https://i.ibb.co.com/rygsqGS/pexels-steshkawillems-1661950.jpg')",
            }}
        >

            <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
            <div className="relative z-20 max-w-screen-xl mx-auto px-4 h-full flex items-center justify-center text-center">
                <div>
                    <Fade>
                        <h1 className="lg:text-9xl text-5xl md:text-6xl font-bold text-white font-charm"
                            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}>
                            <span className="text-blue-600">Equi</span>
                            <span className="text-white">Sports</span>
                        </h1>


                        <p className="mt-6 text-lg md:text-xl text-gray-300"
                            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}>
                            Your ultimate destination for premium sports equipment and expert advice.
                        </p>
                    </Fade>

                    <div className="mt-6 space-x-4">

                        <button
                            onClick={() => {
                                const sportCategories = document.getElementById("sportCategories");
                                if (sportCategories) {
                                    sportCategories.scrollIntoView({ behavior: "smooth" });
                                }
                            }}
                            className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-500 transition-all font-mono"
                        >
                            Explore Now
                        </button>

                        <button
                            onClick={() => {
                                const footer = document.getElementById("footer");
                                if (footer) {
                                    footer.scrollIntoView({ behavior: "smooth" });
                                }
                            }}
                            className="px-6 py-3 bg-gray-100 text-black rounded hover:bg-gray-300 transition-all font-mono"
                        >
                            Contact Us
                        </button>


                    </div>
                </div>
            </div>

            <div className="absolute top-[230px] md:top-[400px] lg:top-[600px] left-2/4 transform -translate-x-1/3 w-11/12 sm:w-3/4 z-30">
                <div className="carousel w-5/6 sm:w-3/4">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                            className="w-full rounded-lg"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h2 className="lg:text-6xl text-2xl md:text-xl text-blue-400 font-bold bg-black/50 px-4 py-2 rounded-md font-charm" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}>
                                Gear Up for Success
                            </h2>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide4" className="btn btn-circle opacity-50">
                                ❮
                            </a>
                            <a href="#slide2" className="btn btn-circle opacity-50">
                                ❯
                            </a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                            className="w-full rounded-lg"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h2 className="lg:text-6xl text-2xl md:text-xl text-blue-400 font-bold bg-black/50 px-4 py-2 rounded-md font-charm" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}>
                                Unleash Potential with Quality Gear
                            </h2>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn btn-circle opacity-50">
                                ❮
                            </a>
                            <a href="#slide3" className="btn btn-circle opacity-50">
                                ❯
                            </a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                            className="w-full rounded-lg"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h2 className="lg:text-6xl text-2xl md:text-xl text-blue-400 font-bold bg-black/50 px-4 py-2 rounded-md font-charm" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}>
                                Find Your Winning Edge
                            </h2>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn btn-circle opacity-50">
                                ❮
                            </a>
                            <a href="#slide4" className="btn btn-circle opacity-50">
                                ❯
                            </a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                            className="w-full rounded-lg"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h2 className="lg:text-6xl text-2xl md:text-xl text-blue-400 font-bold bg-black/50 px-4 py-2 rounded-md font-charm" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}>
                                Equip Yourself for Every Challenge
                            </h2>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide3" className="btn btn-circle opacity-50">
                                ❮
                            </a>
                            <a href="#slide1" className="btn btn-circle opacity-50">
                                ❯
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <ProductSection></ProductSection>
            <SportsCategories></SportsCategories>
            <Footer></Footer>
        </div>
    );
};

export default MainSection;