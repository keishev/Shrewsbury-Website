import React from "react";

const Navbar = () => {
    return (
        // <nav className="flex justify-between items-center px-8 py-4 border-b border-red-300 bg-red-50 text-red-600">
        <nav className="sticky top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-4 sm:px-8 sm:py-4 border-b-4 border-main-red bg-main-pink text-main-red font-poppins">
            <div className="space-x-6 text-sm font-semibold"> 
                <a href="#" className="hover:text-red-800">ABOUT</a>
                <a href="#" className="hover:text-red-800">LOCATION</a>
            </div>
            <div className="font-bold text-xl italic"> SHREWS </div>
            <div className="space-x-6 text-sm font-semibold">
                <a href="#" className="hover:text-red-800">ROOMS</a>
                <a href="#" className="hover:text-red-800">SERVICES</a>
            </div>
        </nav>
    )
}

export default Navbar;