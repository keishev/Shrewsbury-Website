import { React, useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { motion } from "framer-motion";
import "./styles.css"


const categories = [
    { name: "BBQ", image: "/assets/activities/bbq1.jpeg" },
    { name: "HOTPOT", image: "/assets/activities/bbq2.jpeg" },
    { name: "SPORTS", image: "/assets/activities/lol.jpeg" },
    { name: "MALA", image: "/assets/activities/bbq3.jpeg" },
    { name: "JB TRIP", image: "/assets/activities/etc2.jpeg" },
    { name: "ETC", image: "/assets/activities/etc.jpeg" }
];

const CategoryItem = ({ category }) => {
    const [{ isDragging }, drag] = useDrag (() => ({
        type: "CATEGORY",
        item: { ...category},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging ()
        })
    }), []);

    return (
        <div
            ref={drag}
        >
            <motion.div
                className={`flex items-center bg-main-red text-white px-4 py-2 rounded-full cursor-pointer font-bold h-[30px] ${isDragging ? "opacity-50" : "opacity-100"}`}
                initial={{ scale: 1, boxShadow: "none" }}
                animate={{
                    scale: isDragging ? 1.2 : 1,
                    boxShadow: isDragging ? "0px 15px 20px rgba (0, 0, 0, 0.3)" : "none"
                }}
                transition={{ type: "spring", stiffness: 200 }}>
                {category.name}
            </motion.div>
        </div>
    );
};

const DropArea = ({ selectedCategory, setSelectedCategory }) => {
    const [{ isOver }, drop] = useDrop (() => ({
        accept: "CATEGORY",
        drop: (item) => setSelectedCategory (item),
        collect: (monitor) => ({
            isOver: !!monitor.isOver (),
        })
    }));

    return (
        <div ref={drop}>
            <motion.div
                className="w-64 h-64 border-2 border-dashed rounded-xl border-main-red flex items-center justify-center"
                initial={{ scale: 1 }}
                animate={{ scale: isOver ? 1.1 : 1 }}
                transition={{ type: "spring", stiffness: 200 }}
            >
                {selectedCategory ? (
                    <div className="flex items-center justify-center">
                        <motion.img
                            src={selectedCategory.image}
                            alt={selectedCategory.name}
                            className="w-[70%] h-auto m-3"
                            initial={{ opacity: 0, scale:0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        />
                    
                    </div>
                
                ) : (
                    <p className="text-main-red">choose a category!</p>
                )}
            </motion.div>
        </div>
        
    )
}

const Activities = () => {
    const [selectedCategory, setSelectedCategory] = useState (null);

    return (
        <DndProvider backend={HTML5Backend}>
            <div className='flex items-center justify-center h-[90vh] gap-20'>
                <div className='m-10 mr-20'>
                    <div className='flex-col'>
                        <div className="font-poppins text-main-red font-bold text-3xl">
                            <h3>fun at</h3>
                            <h3>shrewsbury!</h3>
                        </div>
                        <div>
                            <input
                                type="text"
                                className='border-2 border-main-red rounded-full px-4 py-2 w-72 text-center text-poppins text-main-red font-bold m-5 w-[25vw] liquid-input'
                                value={selectedCategory?.name || ""}
                                readOnly
                            />
                        </div>
                    </div>

                    {/* Drag the items */}
                    <div className='flex gap-4 flex-wrap justify-center w-[30vw]'>
                        {categories.map ((category) => (
                            <CategoryItem key={category.name} category={category} />
                        ))}
                    </div>
                </div>
                <div className='text-poppins font-bold'>
                    <p className="text-main-red m-5">drag & drop ↓</p>
                    <DropArea selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                </div>
            </div>
        </DndProvider>
    )
}

export default Activities;