import Aos from "aos";
import { useEffect } from "react";
import { Slide } from "react-awesome-reveal";

const SportsCategories = () => {
    const categories = [
        { id: 1, name: 'Running', imageUrl: '/assets/running-category.jpg' },
        { id: 2, name: 'Basketball', imageUrl: '/assets/basketball-category.jpg' },
        { id: 3, name: 'Tennis', imageUrl: '/assets/tennis-category.jpg' },
        { id: 4, name: 'Soccer', imageUrl: '/assets/soccer-category.jpg' },
        { id: 5, name: 'Yoga', imageUrl: '/assets/yoga-category.jpg' },
        { id: 6, name: 'Cycling', imageUrl: '/assets/cycling-category.jpg' }
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "All Sports Equipment | EquiSports";
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <section id='sportCategories' className="py-16 bg-white">

            <div className="max-w-screen-xl mx-auto px-4 text-center">

                <Slide>
                    <h2 className="text-3xl md:text-7xl font-bold text-blue-600 mb-8 font-charm">Sports <span className="text-black">Categories</span>
                    </h2>
                </Slide>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8" data-aos="fade-up">
                    {categories.map(category => (
                        <div
                            key={category.id}
                            className="group bg-blue-500 p-6 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:shadow-2xl hover:scale-105">

                            <img
                                className="h-60 w-full object-cover group-hover:scale-105 transform transition-transform duration-300"
                                src={category.imageUrl}
                                alt={category.name} />

                            <div className="p-4">

                                <h3 className="text-3xl font-semibold text-gray-800 font-charm">{category.name}
                                </h3>

                                <button className="mt-4 px-4 py-2 bg-blue-800 text-white rounded hover:bg-blue-300 transition-all font-mono">
                                    Explore
                                </button>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SportsCategories;
