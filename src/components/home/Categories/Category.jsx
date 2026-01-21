import React, { useEffect, useState } from "react";
import apiClient from "../../../services/api-client";
import CategoryItems from "./CategoryItems";
import ErrorAlert from "../../ErrorAlert";

const Category = () => {
	const [categories, setCategories] = useState([]);
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		apiClient
			.get("/categories/")
			.then((res) => setCategories(res.data))
			.catch((err) => setError(err.message))
			.finally(() => setIsLoading(false));
	}, []);
    return (
		<section className="py-12  mx-auto">
			{/* Category Heading */}
			<div className="flex flex-col md:flex-row justify-between items-center px-10 md:px-20 mb-5">
				<h2 className="text-4xl md:text-4xl font-bold text-pink-600 text-center mb-3 sm:mb-0">
					Browse Categories
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
			{/* Category Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-5">
				{categories.map((category, index) => (
					<CategoryItems key={category.id} category={category} index={index} />
				))}
			</div>
		</section>
	);
};

export default Category;
