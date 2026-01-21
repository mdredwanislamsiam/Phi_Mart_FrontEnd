import React, { useEffect, useState } from "react";
import ProductItem from "../home/products/ProductItem";
import ProductList from "./ProductList";
import ProductPagination from "./ProductPagination";
import useFetchProducts from "../../hooks/useFetchProducts";
import FilteringSection from "./FilteringSection";
import useFetchCategory from "../../hooks/useFetchCategory";

const ShopPage = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [priceRange, setPriceRange] = useState([0, 1000]);
	const [selectedCategory, setSelectedCategory] = useState("");
	const [searchQuery, setSearchQuery] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState(searchQuery);
	const [sortOrder, setSortOrder] = useState("");

    useEffect(() => {
		const timer = setTimeout(() => {
			setDebouncedSearch(searchQuery);
			setCurrentPage(1); 
		}, 400); 

		return () => clearTimeout(timer);
    }, [searchQuery, sortOrder, selectedCategory]);
    
	const { products, isLoading, totalPages, error } = useFetchProducts(
		currentPage,
		priceRange,
		selectedCategory,
		debouncedSearch,
		sortOrder
	);
	const categories = useFetchCategory();

	const handlePriceChange = (index, value) => {
		setPriceRange((prev) => {
			const newRange = [...prev];
			newRange[index] = value;
			return newRange;
		});
		setCurrentPage(1);
	};

	return (
		<div className="max-w-7xl mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-8">Shop Our Products</h1>
			<FilteringSection
				priceRange={priceRange}
				handlePriceChange={handlePriceChange}
				categories={categories}
				selectedCategory={selectedCategory}
				handleCategoryChange={setSelectedCategory}
				searchQuery={searchQuery}
				handleSearchQuery={setSearchQuery}
				sortOrder={sortOrder}
				handleSorting={setSortOrder}
			/>
			<ProductList products={products} isLoading={isLoading} error={error} />
			<ProductPagination totalPages={totalPages} currentPage={currentPage} handlePageChange={setCurrentPage} />
		</div>
	);
};

export default ShopPage;
