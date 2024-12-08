import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./provider/AuthProvider";
import { FaRegUserCircle } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import Trophy from "./assets/Trophy.json";
import Lottie from "lottie-react";


const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);

    return (
        <div className="navbar top-0">
            <div className="flex-1 text-4xl font-bold font-charm flex items-center gap-4">
                <div className="flex items-center">
                    <div className="w-8 h-8">
                        <Lottie animationData={Trophy} />
                    </div>
                    <Link to="/" className="text-4xl font-bold">
                        <span className="text-blue-600">Equi</span>
                        <span className="text-black">Sports</span>
                    </Link>
                </div>
                <ThemeToggle />
            </div>


            <div className="hidden lg:flex flex-none items-center space-x-4">
                <ul className="menu menu-horizontal px-1 space-x-4 flex items-center">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-blue-600 underline decoration-2 text-2xl font-charm"
                                    : "hover:text-gray-500 transition-all text-xl font-charm"
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/allSportsEquip"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-blue-600 underline decoration-2 text-2xl font-charm"
                                    : "hover:text-gray-500 transition-all text-xl font-charm"
                            }
                        >
                            All Sports Equipment
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/addEquipment"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-blue-600 underline decoration-2 text-2xl font-charm"
                                    : "hover:text-gray-500 transition-all text-xl font-charm"
                            }
                        >
                            Add Equipments
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/myEquipList"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-blue-600 underline decoration-2 text-2xl font-charm"
                                    : "hover:text-gray-500 transition-all text-xl font-charm"
                            }
                        >
                            My Equipment List
                        </NavLink>
                    </li>
                </ul>

                <div className="flex items-center space-x-4">
                    {user && user.email ? (
                        <div className="flex items-center space-x-2">
                            <img
                                className="w-8 h-8 md:w-10 md:h-10 rounded-full"
                                src={user.photoURL}
                                alt="User Avatar"
                                title={user.displayName}
                            />
                            <div className="font-charm text-lg">{user.email}</div>
                            <button onClick={logOut} className="btn btn-primary">
                                Log Out
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center space-x-2">
                            <Link to="/auth/login" className="btn btn-primary">
                                Login
                            </Link>
                            <Link to="/auth/register" className="btn btn-primary">
                                Register
                            </Link>
                        </div>
                    )}
                </div>
            </div>

            <div className="lg:hidden flex items-center">
                <button
                    className="btn btn-ghost text-white hover:text-gray-500"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke="black"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={
                                isMenuOpen
                                    ? "M6 18L18 6M6 6l12 12"
                                    : "M4 6h16M4 12h16M4 18h16"
                            }
                        />
                    </svg>
                </button>
            </div>

            {isMenuOpen && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden z-50">
                    <ul className="menu menu-vertical px-4 py-2 space-y-2">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-blue-600 font-bold underline decoration-2"
                                        : "hover:text-gray-300 transition-all"
                                }
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/allSportsEquip"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-blue-600 font-bold underline decoration-2"
                                        : "hover:text-gray-300 transition-all"
                                }
                                onClick={() => setIsMenuOpen(false)}
                            >
                                All Sports Equipment
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/addEquipment"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-blue-600 font-bold underline decoration-2"
                                        : "hover:text-gray-300 transition-all"
                                }
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Add Equipments
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/myEquipList"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-blue-600 font-bold underline decoration-2"
                                        : "hover:text-gray-300 transition-all"
                                }
                                onClick={() => setIsMenuOpen(false)}
                            >
                                My Equipment List
                            </NavLink>
                        </li>

                        <li className="pt-4">
                            <div className="flex flex-col items-center">
                                <div className="font-charm text-lg mb-2">
                                    {user && user.email}
                                </div>
                                {user && user?.email ? (
                                    <div className="mb-2">
                                        <img
                                            className="w-8 h-8 md:w-10 md:h-10 rounded-full"
                                            src={user?.photoURL}
                                            alt="User Avatar"
                                            title={user.displayName}
                                        />
                                    </div>
                                ) : (
                                    <FaRegUserCircle className="text-blue-600 hover:text-blue-400 text-3xl md:text-4xl cursor-pointer mb-2" />
                                )}
                                {user && user?.email ? (
                                    <button onClick={logOut} className="btn btn-primary">
                                        Log Out
                                    </button>
                                ) : (
                                    <div className="flex flex-col items-center">
                                        <Link
                                            to="/auth/login"
                                            className="btn btn-primary hover:bg-blue-500 font-mono mb-2"
                                        >
                                            Login
                                        </Link>
                                        <Link
                                            to="/auth/register"
                                            className="btn btn-primary hover:bg-blue-500 font-mono"
                                        >
                                            Register
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default NavBar;