import React from 'react';
import { FaAngleRight } from "react-icons/fa";


const CategoryItems = ({ category, index}) => {
    const gradients = [
        "from-pink-200 to-blue-100", 
        "from-blue-100 to-purple-200", 
        "from-purple-200 to-pink-100", 
        "from-blue-100 to-pink-200", 

    ]; 
    return (
		<div className={`rounded-xl m-10 shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer bg-linear-to-br ${gradients[index%gradients.length]}`}>
			<div className="p-6 flex flex-col h-full">
				<div className='flex justify-between items-start mb-4'>
					<div className="h-10 w-10 rounded-full bg-pink-500 text-white font-bold text-xl flex items-center justify-center">{category.name.charAt(0)}</div>
					<span className="text-sm text-gray-600 bg-white/70 px-2 py-1 rounded-full">{category.product_count} items</span>
				</div>
				<h3 className="text-xl font-bold mb-2">{category.name}</h3>
				<p className="text-gray-600 text-sm mb-4 grow">{category.description}</p>
				<button className="text-pink-500 font-bold hover:text-pink-600 flex items-center transition-colors">
					Explore
					<FaAngleRight />
				</button>
			</div>
		</div>
	);
};

export default CategoryItems;