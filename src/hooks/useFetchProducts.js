import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useFetchProducts = (currentPage, priceRange, selectedCategory, debouncedSearch, sortOrder) => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [totalPages, setTotalPages] = useState(0);

	useEffect(() => {
		const fetchProducts = async () => {
			setIsLoading(true);
			const url = `/products/?price__gt=${priceRange[0]}&price__lt=${priceRange[1]}&page=${currentPage}&category_id=${selectedCategory}&search=${debouncedSearch}&ordering=${sortOrder}`;
			try {
				const response = await apiClient.get(url);
				const data = await response.data;
				// console.log(data);
				setProducts(data.results);
				// console.log(debouncedSearch);
				setTotalPages(Math.ceil(data.count / 10));
			} catch (error) {
				console.log(error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchProducts();
	}, [currentPage, priceRange, selectedCategory, debouncedSearch, sortOrder]);

	return { products, isLoading, totalPages };
};

export default useFetchProducts;
