import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { PiSealCheckFill } from "react-icons/pi";
import { BiSolidOffer } from "react-icons/bi";
import { RiSecurePaymentFill } from "react-icons/ri";

const Features = () => {

    const featureCards = [
		{
			icon: <FaShoppingCart className="mx-auto text-red-400 text-4xl" />,
			title: "Free Delivery",
			subtitle: "Get your orders delivered at no extra cost, fast and hassle-free",
		},
		{
			icon: <PiSealCheckFill className="mx-auto text-red-400 text-4xl" />,
			title: "Quality Guarantee",
			subtitle: "We ensure top-notch quality for every product you purchase",
		},
		{
			icon: <BiSolidOffer className="mx-auto text-red-400 text-4xl" />,
			title: "Daily Offers",
			subtitle: "Exclusive discounts and special deals available every day",
		},
		{
			icon: <RiSecurePaymentFill className="mx-auto text-red-400 text-4xl" />,
			title: "100% Secure Payment",
			subtitle: "Your payment information is encrypted and completely secure",
		},
	];


    return (
		<section className="px-8 py-15">
			<div className="grid grid-cols-1 md:grid-cols-4 gap-10">
				{featureCards.map((card, index) => (
					<div key={index} className="text-center">
						{card.icon}
						<p className="text-lg text-gray-700 font-bold">{card.title}</p>
						<p className="text-sm text-gray-400">{card.subtitle}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Features;