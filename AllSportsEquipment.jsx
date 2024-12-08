import Aos from 'aos';
import { useState, useEffect } from 'react';
import Loading from './src/Loading';
import NavBar from './src/NavBar';
import { Link } from 'react-router-dom';
import Footer from './src/Footer';
import { FaLongArrowAltDown, FaLongArrowAltUp } from 'react-icons/fa';
import { Fade } from 'react-awesome-reveal';

const AllSportsEquipment = () => {

    const [equipments, setEquipments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [sortOrder, setSortOrder] = useState('asc');

    useEffect(() => {

        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        document.title = "All Sports Equipment | EquiSports";
        Aos.init({ duration: 1000 });
        const fetchEquipments = async () => {
            try {
                const response = await fetch('https://equisports-server-olive.vercel.app/equipment');
                const data = await response.json();
                setEquipments(data);
            } catch (error) {
                console.error('Error fetching equipments:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchEquipments();
    }, []);


    const sortEquipments = () => {
        const sortedEquipments = [...equipments].sort((a, b) => {
            return sortOrder === 'asc'
                ? a.Price - b.Price
                : b.Price - a.Price;
        });
        setEquipments(sortedEquipments);
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); // Toggle sort order
    };


    if (isLoading) {
        return <Loading></Loading>;
    }


    return (
        <div>
            <NavBar></NavBar>
            <div className='max-w-screen-xl mx-auto p-10 text-center'>

                <Fade>
                    <h1 className='text-3xl md:text-7xl font-bold text-blue-600 mb-8 font-charm'>
                        All Sports <span className='text-black'>Equipment</span>
                    </h1>
                </Fade>


                <div className='flex justify-end mb-4'>
                    <button
                        onClick={sortEquipments}
                        className='mx-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition-all mb-4 flex items-center justify-center font-charm'
                    >
                        {sortOrder === 'asc' ? (
                            <>
                                <FaLongArrowAltUp className='mr-2' />
                                Sort (High to Low)
                            </>
                        ) : (
                            <>
                                <FaLongArrowAltDown className='mr-2' />
                                Sort (Low to High)
                            </>
                        )}
                    </button>
                </div>

                <div className='overflow-x-auto' data-aos="fade-up">
                    <table className='w-full bg-white rounded-lg shadow-lg border border-gray-200'>

                        <thead>

                            <tr className='bg-blue-400 text-white text-center'>
                                <th className="py-2">Image</th>
                                <th className="py-2">Name</th>
                                <th className="py-2">Category</th>
                                <th className="py-2">Price</th>
                                <th className="py-2">Rating</th>
                                <th className="py-2">Actions</th>
                            </tr>

                        </thead>

                        <tbody>
                            {equipments.length > 0 ? (
                                equipments.map((equipment) => (
                                    <tr
                                        key={equipment._id}
                                        className='transition-transform duration-300 hover:bg-blue-50'
                                    >
                                        <td className='text-center py-2'>
                                            <div className='flex justify-center items-center'>
                                                <img
                                                    src={equipment.Image || 'https://via.placeholder.com/32'}
                                                    alt={equipment.ItemName || 'Equipment'}
                                                    className='w-8 h-8 rounded-full object-cover'
                                                />
                                            </div>
                                        </td>

                                        <td className='text-center py-2 flex items-center justify-center'>
                                            {equipment.ItemName}
                                        </td>

                                        <td className="text-center py-2">{equipment.CategoryName}</td>

                                        <td className="text-center py-2">${equipment.Price}</td>

                                        <td className="text-center py-2">{equipment.Rating} ★</td>

                                        <td className="text-center py-2">
                                            <Link
                                                to={`/equipmentdetails/${equipment._id}`}
                                                className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition-all font-mono'
                                            >
                                                Details
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className='text-center py-4 text-gray-600'>
                                        No equipment found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllSportsEquipment;