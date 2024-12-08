import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Loading from './Loading';
import { Slide } from 'react-awesome-reveal';

const ProductSection = () => {
    const [equipments, setEquipments] = useState([]);


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    useEffect(() => {
        const fetchEquipments = async () => {
            try {
                const response = await fetch('https://equisports-server-olive.vercel.app/equipment');
                const data = await response.json();
                setEquipments(data);
            } catch (error) {
                console.error('Error fetching equipments:', error);
            }
        };
        if (!fetchEquipments) return <p><Loading /></p>;
        fetchEquipments();

    }, []);


    return (

        <section className="py-16 bg-blue-50">

            <div className="max-w-screen-xl mx-auto px-4 text-center">

                <Slide>
                    <h1 className="text-3xl md:text-7xl font-bold text-blue-600 mb-8 font-charm">Available <span className='text-black'>Equipment</span>
                    </h1>
                </Slide>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                    {equipments.slice(0, 6).map((equipment) => (

                        <div
                            key={equipment._id}
                            className="group bg-blue-400 p-6 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:shadow-2xl hover:scale-105"
                            data-aos="fade-up"
                        >
                            <figure>
                                <img
                                    className="h-60 w-full object-cover group-hover:scale-105 transform transition-transform duration-300"
                                    src={equipment.Image || 'https://via.placeholder.com/150'}
                                    alt={equipment.ItemName || 'Equipment'}
                                />
                            </figure>
                            <div className="p-4">
                                <h2 className="text-3xl font-semibold text-gray-800 font-charm">{equipment.ItemName}</h2>
                                <p className="text-xl text-gray-600 mt-2">Category: {equipment.CategoryName}</p>
                                <p className="text-xl text-gray-600 mt-2">Price: ${equipment.Price}</p>

                                <Link to={`/equipmentdetails/${equipment._id}`} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition-all font-mono">
                                    See More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductSection;