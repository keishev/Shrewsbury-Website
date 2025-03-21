import React from "react";

const HeroSection = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center px-0 py-5 bg-main-pink text-main-red h-screen p-0">
            <div className="w-full md:w-1/5 flex justify-center md:mr-10"> 
                <img src="/assets/hero.png" alt="Shrewsbury Logo" className="max-w-xs md:max-w-md"/>
            </div>

            <div className="w-full md:w-1/2 text-center md:text-right">
                <h4 className="font-quicksand font-bold m-2">Welcome to</h4>
                <h1 className="font-poppins font-bold text-5xl border-b-4 border-main-red pb-2 inline-block mb-2">SHREWSBURY<br/>HOMESTAY</h1>
                <p className="text-md font-quicksand"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                    aliquip ex ea commodo consequat. </p>
                <p className="text-sm font-bold mt-4 font-poppins">EST. 20XX</p>
            </div>
        </div>

    )
}

export default HeroSection;