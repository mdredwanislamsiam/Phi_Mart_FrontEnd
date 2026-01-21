import React from "react";
import bgImg from "../../../assets/images/banner-image-bg-1.jpg"
import book from "../../../assets/images/banner-image3.png"
import DiscountTimer from "./DiscountTimer";
const DiscountSection = () => {
	return (
		<section
			className="w-full h-200 md:h-165 bg-cover bg-center flex justify-center px-8"
			style={{ backgroundImage: `url(${bgImg})` }}>
			<div className="container flex flex-col md:flex-row items-center justify-between px-4 md:px-20 mx-auto">
				{/* Left Content */}
				<div className="flex justify-center">
					<img src={book} alt="" className="max-w-xs sm:max-w-full drop-shadow-lg mt-20 md:mt-0" />
				</div>
				{/* Right Content */}

				<div className="w-full md:w-1/2 text-center md:text-left mb-20 md:mb-0">
					<h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-5">
						<span className="text-pink-500 text-6xl md:text-8xl font-extrabold italic">30%</span> <br />
						Discount On All Items. Hurry Up!!!
					</h1>
					{/* Count Down Timer */}
					<DiscountTimer/> 
					<button className="btn btn-secondary rounded-full px-7 mt-8">Shop Collection</button>
				</div>
			</div>
		</section>
	);
};

export default DiscountSection;
