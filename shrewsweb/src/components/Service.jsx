import React from "react";

const Service = ({ number, title, description }) => {
    return (
        <div className="flex items-center justify-center m-8">
            <div className="font-poppins font-bold w-[70px] h-[70px] text-main-red bg-main-pink p-3 mx-3 flex justify-center items-center">
                <p className="whitespace-nowrap"># {number}</p>
            </div>

            <div className="text-white ml-4 my-2 text-left w-[65%] ">
                <h4 className="font-poppins font-bold text-3xl">{title}</h4>
                <p className="font-quicksand text-normal">{description}</p>
            </div>
        </div>
    )
}

export default Service;