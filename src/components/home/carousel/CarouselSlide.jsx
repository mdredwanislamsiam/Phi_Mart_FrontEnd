import React from 'react';
import bgImg from "../../../assets/images/banner-image-bg.jpg"

const CarouselSlide = ({title, subtitle, image}) => {
    return (
		<section
			className="w-full h-165 bg-cover bg-center flex justify-center px-8 "
			style={{ backgroundImage: `url(${bgImg})` }}>
			<div className="max-w-6xl flex flex-col md:flex-row items-center justify-between px-4 md:px-10 mx-auto">
				{/* Left Content */}
				<div className="w-full md:w-1/2 text-center md:text-left mt-10 md:mt-0 ">
					<h1 className="text-4xl md:text-5xl font-bold text-gray-900">{title}</h1>
					<p className="text-gray-600 italic my-5 px-2 ">{subtitle}</p>
					<button className="btn btn-secondary rounded-full px-7">Shop Product</button>
				</div>
				{/* Right Content */}
				<div className="w-full md:w-1/2 mb-15 md:mb-0">
					<img src={image} alt="" className="max-w-full md:max-w-md drop-shadow-lg" />
				</div>
			</div>
		</section>
	);
};

export default CarouselSlide;