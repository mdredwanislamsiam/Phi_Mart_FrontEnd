import React from "react";

const FilteringSection = ({
	priceRange,
	handlePriceChange,
	categories,
	selectedCategory,
	handleCategoryChange,
	handleSearchQuery,
	searchQuery,
	sortOrder,
	handleSorting,
}) => {
	return (
		<div className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-5 bg-gray-100 ">
			{/* Price Range */}
			<div className="bg-white p-4 rounded-lg shadow">
				<label htmlFor="" className="block text-sm font-medium text-gray-700 mb-2">
					Price Range
				</label>
				<div className="flex items-center space-x-4 mb-2">
					<input
						min="0"
						value={priceRange[0]}
						onChange={(e) => handlePriceChange(0, Number(e.target.value))}
						max={priceRange[1]}
						type="number"
						className="w-20 px-2 py-1 border rounded-md focus:ring-1 focus:ring-pink-500 focus:outline-none focus:border-pink-500"
					/>
					<input
						value={priceRange[0]}
						onChange={(e) => handlePriceChange(0, Number(e.target.value))}
						min="0"
						max={priceRange[1]}
						step="10"
						type="range"
						className="w-full"
					/>
				</div>
				<div className="flex items-center space-x-4">
					<input
						value={priceRange[1]}
						onChange={(e) => handlePriceChange(1, Number(e.target.value))}
						min={priceRange[0]}
						max="1000"
						type="number"
						className="w-20 px-2 py-1 border rounded-md focus:ring-1 focus:ring-pink-500 focus:outline-none focus:border-pink-500"
					/>
					<input
						value={priceRange[1]}
						onChange={(e) => handlePriceChange(1, Number(e.target.value))}
						min={priceRange[0]}
						max="1000"
						step="10"
						type="range"
						className="w-full"
					/>
				</div>
				<div className="flex justify-between text-md text-gray-600 mt-2">
					<span>
						Min: <span className="font-semibold text-pink-600">${priceRange[0]}</span>
					</span>
					<span>
						Max: <span className="font-semibold text-pink-600">${priceRange[1]}</span>
					</span>
				</div>
			</div>
			{/* Category Filter */}
			<div className="bg-white p-4 rounded-lg shadow">
				<label htmlFor="" className="block text-sm font-medium text-gray-700 mb-2">
					{" "}
					Category
				</label>
				<select
					value={selectedCategory}
					onChange={(e) => handleCategoryChange(e.target.value)}
					name=""
					className="w-full p-2 border rounded-md focus:ring-1 focus:ring-pink-500 focus:outline-none focus:border-pink-500"
					id="">
					<option value="">All Categories</option>
					{categories.map((category) => (
						<option key={category.id} value={category.id}>
							{category.name}
						</option>
					))}
				</select>
			</div>

			{/* Search filter */}
			<div className="bg-white p-4 rounded-lg shadow">
				<label className="block text-sm font-medium text-gray-700 mb-2"> Search</label>
				<input
					type="text"
					value={searchQuery}
					onChange={(e) => handleSearchQuery(e.target.value)}
					placeholder="Search..."
					className="focus:ring-1 focus:ring-pink-500 focus:outline-none focus:border-pink-500 w-full p-2 border rounded-md"
				/>
			</div>

			{/* Sorting */}
			<div className="bg-white p-4 rounded-lg shadow">
				<label htmlFor="" className="block text-sm font-medium text-gray-700 mb-2">
					Sort By Price
				</label>
				<select
					value={sortOrder}
					onChange={(e) => handleSorting(e.target.value)}
					name=""
					className="w-full p-2 border rounded-md focus:ring-1 focus:ring-pink-500 focus:outline-none focus:border-pink-500"
					id="">
					<option value="">All Categories</option>
					<option value="price">Price: Low to High</option>
					<option value="-price">Price: High to Low</option>
				</select>
			</div>
		</div>
	);
};

export default FilteringSection;
