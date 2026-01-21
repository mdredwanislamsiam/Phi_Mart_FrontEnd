import React from 'react';

import default_img from "../../../assets/default_product.jpg"

const ProductItem = ({product}) => {
    return (
		<div>
			<div className="card bg-base-100 max-w-66 md:w-96 shadow-sm mx-auto">
				<figure className="px-10 pt-10">
					<img
						src={product.images.length > 0 ? product.images[0].image : default_img}
						alt="Shoes"
						className="rounded-xl"
					/>
				</figure>
				<div className="card-body items-center text-center">
                    <h2 className="card-title">{product.name}</h2>
                    <p className='text-xl font-semibold text-pink-600'>${product.price}</p>
					<p className='italic text-gray-500'>{product.description}</p>
					<div className="card-actions mt-3">
						<button className="btn btn-secondary">Buy Now</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductItem;