import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import ErrorAlert from "../../ErrorAlert";
import apiClient from "../../../services/api-client";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const Products = () => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	useEffect(() => {
		setIsLoading(true);
		apiClient
			.get("/products/")
			.then((res) => setProducts(res.data.results))
			.catch((err) => setError(err.message))
			.finally(() => setIsLoading(false));
	}, []);

	return (
		<section className="py-10 bg-gray-100">
			<div className="flex flex-col md:flex-row justify-between items-center px-10 md:px-20 mb-5">
				<h2 className="text-4xl md:text-4xl font-bold text-pink-600 text-center mb-3 sm:mb-0">
					Trending Products
				</h2>
				<a href="#" className="btn btn-secondary rounded-full">
					{" "}
					View All
				</a>
			</div>
			{/* Loading Spinner */}
			{isLoading && (
				<div className="flex justify-center items-center">
					<span className="loading loading-spinner loading-xl  text-secondary"></span>
				</div>
			)}
			{error && <ErrorAlert err={error} />}

			{/*Product Slider*/}
			{!isLoading && !error && products.length > 0 && (
				<Swiper
					effect={"coverflow"}
					slidesPerView={1}
					spaceBetween={10}
					coverflowEffect={{
						rotate: 0,
						stretch: 10,
						depth: 300,
						modifier: 1,
						slideShadows: false,
					}}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
					pagination={{
						clickable: true,
						dynamicBullets: true,
					}}
					navigation={true}
					breakpoints={{
						640: { slidesPerView: 1 },
						1024: { slidesPerView: 3 },
						2056: { slidesPerView: 5 },
					}}
					className="mt-20 px-4 container"
					modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}>
					{products.map((product) => (
						<SwiperSlide key={product.id}>
							<ProductItem product={product} />
						</SwiperSlide>
					))}
				</Swiper>
			)}

			{!isLoading && !error && products.length === 0 && (
				<div>
					<p className="text-pink-600 font-bold text-4xl text-center my-10">Not Available</p>
				</div>
			)}
		</section>
	);
};

export default Products;
