import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div id='footer' className="text-black pt-10 pb-5 border-t border-gray-300">
            <div className="max-w-screen-xl mx-auto px-4">

                <div className="flex justify-between items-center mb-8">

                    <Link to="/" className="text-4xl font-bold">
                        <span className="text-blue-600">Equi</span><span className="text-black">Sports</span>
                    </Link>

                    <div className="flex space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-500 transition-all">
                            <FaFacebook className='text-blue-600 hover:text-gray-500 text-3xl' />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-500 transition-all">
                            <FaTwitter className='text-blue-600 hover:text-gray-500 text-3xl' />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-500 transition-all">
                            <FaLinkedin className='text-blue-600 hover:text-gray-500 text-3xl' />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-500 transition-all">
                            <FaGithub className='text-blue-600 hover:text-gray-500 text-3xl' />
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">


                    <div>
                        <h4 className="text-2xl font-semibold text-blue-600 mb-4">About Us</h4>
                        <p className="text-sm text-gray-600">
                            EquiSports is your go-to platform for premium sports equipment and expert advice. We strive to empower athletes and sports enthusiasts by providing top-quality gear and guidance.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-2xl font-semibold text-blue-600 mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="/" className="text-gray-600 hover:text-blue-600 transition-all text-lg">Home</a>
                            </li>
                            <li>
                                <a href="/allSportsEquipment" className="text-gray-600 hover:text-blue-600 transition-all text-lg">All Sports Equipment</a>
                            </li>
                            <li>
                                <a href="/addEquipments" className="text-gray-600 hover:text-blue-600 transition-all text-lg">Add Equipments</a>
                            </li>
                            <li>
                                <a href="/myEquipmentList" className="text-gray-600 hover:text-blue-600 transition-all text-lg">My Equipment List</a>
                            </li>
                        </ul>
                    </div>


                    <div>
                        <h4 className="text-2xl font-semibold text-blue-600 mb-4">Contact</h4>
                        <p className="text-sm text-gray-600">Email: support@equisports.com</p>
                        <p className="text-sm text-gray-600">Phone: +880 1234567890</p>
                        <p className="text-sm text-gray-600">Address: 456 Sports Ave, Dhaka, Bangladesh</p>
                    </div>
                </div>


                <div className="text-center text-sm text-gray-500">
                    <p>© 2024 EquiSports. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
