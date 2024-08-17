import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoPersonCircleOutline } from "react-icons/io5";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import logo from "./../../assets/im.png"
import { IoCartOutline } from "react-icons/io5";
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const Links = (
        <>
            <li className="text-lg font-semibold mr-2 uppercase"><NavLink
                className={({ isActive }) =>
                    `transition-colors duration-300 transform hover:bg-base-100 rounded-md hover:text-[#017a5c] ${isActive ? 'bg-base-100 focus:bg-base-00 text-[#5D0911]' : 'text-white'
                    }`
                }
                to='/'>Home</NavLink></li>
            {
                user && <>
                    <li className="text-lg font-semibold mr-2 uppercase"><NavLink
                        className={({ isActive }) =>
                            `transition-colors duration-300 transform hover:bg-base-100 rounded-md hover:text-[#017a5c] ${isActive ? 'bg-base-100 focus:bg-base-00 text-[#5D0911]' : 'text-white'
                            }`
                        }
                        to='/coming'>Offer's</NavLink></li>

                </>
            }

            <li className="text-lg font-semibold mr-2 uppercase"><NavLink
                className={({ isActive }) =>
                    `transition-colors duration-300 transform hover:bg-base-100 rounded-md hover:text-[#017a5c] ${isActive ? 'bg-base-100 focus:bg-base-00 text-[#5D0911]' : 'text-white'
                    }`
                }
                to='/coming'>About Us</NavLink></li>
            <li className="text-lg font-semibold mr-2 uppercase"><NavLink
                className={({ isActive }) =>
                    `transition-colors duration-300 transform hover:bg-base-100 rounded-md hover:text-[#017a5c] ${isActive ? 'bg-base-100 focus:bg-base-00 text-[#5D0911]' : 'text-white'
                    }`
                }
                to='/coming'>Cart <IoCartOutline size={30} /></NavLink></li>
        </>
    );
    const handleLogout = () => {
        logOut()
    }
    return (
        <>
            <div className="relative ">
                <div className={`navbar bg-gradient-to-r from-[#08e07b] to-[#017a5c] pr-10 lg:px-24`}>
                    <div className="navbar navbar-start ">
                        <div className="dropdown text-white ">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-gradient-to-r from-[#08e07b] to-[#017a5c] text-white">
                                {Links}
                            </ul>
                        </div>
                        <div className="flex gap-3 items-center">
                            <Link to='/' className="text-xl text-white md:text-4xl font-extrabold">
                                <div className="w-[100px] md:w-[150px] ">
                                    <img src={logo} alt="" />
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1  text-white">
                                {Links}
                            </ul>
                        </div>
                        {user ? (
                            <div className="navbar-end flex items-center gap-2">
                                <div className="dropdown dropdown-end border-2 rounded-full">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="rounded-full flex justify-center items-center">
                                            <IoPersonCircleOutline size={40} />
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box">
                                        <li><Link to='/login'
                                            onClick={handleLogout}
                                            className="uppercase">Logout</Link></li>
                                    </ul>
                                </div>
                            </div>
                        ) : (
                            <div className="navbar-end flex items-center gap-2 md:pl-8">
                                <Link to='/login' className=" md:text-[16px] font-bold btn p-2 md:p-3 bg-transparent text-white">Login</Link>
                                <Link to='/register' className="md:text-[16px] font-bold p-2 md:p-3  btn bg-transparent text-white">Register</Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;