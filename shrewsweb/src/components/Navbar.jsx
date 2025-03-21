import { React, useState, useEffect } from "react";
import { Link } from "react-scroll";


const Navbar = () => {
    const [currentSection, setCurrentSection] = useState ('homepage')

    return (
        // <nav className="flex justify-between items-center px-8 py-4 border-b border-red-300 bg-red-50 text-red-600">
        <nav className="sticky top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-4 sm:px-8 sm:py-4 border-b-4 border-main-red bg-main-pink text-main-red font-poppins">
            <div className="space-x-6 text-sm font-semibold"> 
                <Link to="homepage" smooth={true} duration={500} spy={true} offset={-80}
                    activeClass="bg-main-red text-white rounded-lg px-3 py-1 hover:text-white"
                    className="cursor-pointer px-3 py-1 hover:text-red-800 rounded-lg"
                >ABOUT
                </Link>

                <Link to="rooms" smooth={true} duration={500} spy={true} offset={-80}
                    className="cursor-pointer px-3 py-1 hover:text-red-800 rounded-lg"
                    activeClass="bg-main-red text-white rounded-lg px-3 py-1 hover:text-white"
                >ROOMS
                </Link>
            </div>

            <div className="font-bold text-xl italic"> SHREWS </div>
            
            <div className="space-x-6 text-sm font-semibold">    
                <Link to="services" smooth={true} duration={500} spy={true} offset={-80}
                    className="cursor-pointer px-3 py-1 hover:text-red-800 rounded-lg"
                    activeClass="bg-main-red text-white rounded-lg px-3 py-1 hover:text-white"
                >SERVICES
                </Link>

                <Link to="location" smooth={true} duration={500} spy={true} offset={-80}
                    className="cursor-pointer px-3 py-1 hover:text-red-800 rounded-lg"
                    activeClass="bg-main-red text-white rounded-lg px-3 py-1 hover:text-white"
                >LOCATION
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;