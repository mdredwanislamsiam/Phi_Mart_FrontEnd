import React from "react";

import ProductItem from "../home/products/ProductItem";

const ProductList = ({error, isLoading, products}) => {
    
    return (
		<section className="my-20">
			{/* Loading Spinner */}
			{isLoading && (
				<div className="flex justify-center items-center min-h-screen">
					<span className="loading loading-spinner loading-xl  text-secondary"></span>
				</div>
			)}
			{error && <ErrorAlert err={error} />}
			<div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
					{products.map((product) => (
						<ProductItem key={product.id} product={product} />
					))}
				</div>
			</div>
		</section>
	);
};

export default ProductList;