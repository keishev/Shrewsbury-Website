import React from "react";
import { FaTrain, FaBus, FaShoppingCart, FaStore } from "react-icons/fa";
import { MdLocationCity } from "react-icons/md"

const Location = () => {
    return (
        <div id='location' className="pt-16 h-screen">
            <h1 className="font-poppins text-main-red font-bold text-4xl m-4">location.</h1>

            <div className="mt-10 mx-0 font-quicksand font-bold bg-main-red text-white p-10 flex items-center gap-10 w-full">
                <div className="flex-1 flex justify-center">
                    <img
                        src="/assets/maps.jpg"
                        className="w-[80%] max-w-full m-0"
                    />
                </div>

                <div className="flex-1 flex justify-center">
                    <ul className="space-y-2">
                        <li className="flex items-center">
                            <FaTrain className="text-white mr-3"/>
                            <span className="font-semibold">Nearest MRT Station: Novena</span>
                        </li>
                        <li className="flex items-center">
                            <FaBus className="flex items-cemter mr-3"/>
                            <span className="font-semibold">3-4 Bus Stop Rides to Newton MRT Station</span>
                        </li>
                        <li className="flex items-start">
                            <FaBus className="text-white mr-3 mt-1"/>
                            <div>
                                <span className="font-semibold flex items-start mb-2">Nearest Bus Stops:</span>
                                <ul className="ml-0 space-y-1">
                                    <li className="flex items-center text-semibold">
                                        <MdLocationCity className="text-white mr-2"/>
                                        <span className="font-semibold">St. Joseph Instn. Jnr</span>
                                    </li>
                                    <li className="flex items-center text-semibold">
                                        <MdLocationCity className="text-white mr-2"/>
                                        <span className="font-semibold">Revival Ctr Ch</span>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="flex items-center">
                            <FaShoppingCart className="text-white mr-3"/>
                            <span className="font-semibold">Close to: 3 Malls - Velocity, Royal Square & United Square</span>
                        </li>
                        <li className="flex items-center">
                            <FaStore className="text-white mr-3"/>
                            <span className="font-semibold">Supermarkets: 2 Cold Storage & 1 Fair Price</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Location;