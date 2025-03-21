import React from "react";

const RoomType = ({type, description, imagePath}) => {
    return (
        <div className="w-80 h-96 border-2 rounded-2xl m-5 overflow-hidden shadow-lg border-main-red">
            <div className="h-1/2">
                <img
                    src={imagePath}
                    alt={type}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="h-1/2 justify-center p-4">
                <h2 className="font-poppin font-bold text-xl text-main-red">{type}</h2>
                <p className="font-quicksand text-main-red text-center text-sm mt-3">{description}</p>
            </div>
        </div>
    )
}

export default RoomType;