import React from "react";

import RoomType from "../components/RoomType";

const Rooms = () => {
    return (
        <div id='rooms' className="pt-5 h-[90vh]">
            <h1 className="font-poppins font-bold text-4xl inline-block m-4 text-main-red">room types.</h1>

            <div className="flex mb-4 justify-center">
                <RoomType 
                    type={"Single Room"} 
                    description={"- Shared bathroom with 2 other people\n"} 
                    imagePath={"/assets/single.jpg"}>
                </RoomType>
                <RoomType 
                    type={"Common Room"} 
                    description={"- Shared bathroom\n- Shared with a roommate"} 
                    imagePath={"/assets/common.jpg"}>
                </RoomType>
                <RoomType 
                    type={"Master Room"} 
                    description={"- Shared bathroom with a roommate"} 
                    imagePath={"/assets/master.jpg"}>
                </RoomType>
            </div>
        </div>
    )
}

export default Rooms;
