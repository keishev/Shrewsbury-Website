import React from "react";

import Service from "../components/Service";

const Services = () => {
    return (
        <div className="bg-main-red pt-16 pb-5 flex items-center h-screen">
            <div className="justify-start pl-16 mx-10 mr-9 font-poppins font-bold text-4xl text-white">
                <h1>services</h1>
                <h1>included.</h1>
            </div>
            <div className="">
                <Service
                    number='1'
                    title="Laundry & Cleanings"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <Service
                    number='2'
                    title="Wi-Fi and Utilities"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <Service
                    number='3'
                    title="Guardianship & Airport Pickup"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
            </div>
        </div>
    )
}

export default Services;