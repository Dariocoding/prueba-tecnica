import React from 'react';
import './card.scss';

const CardProduct = props => {
	const { title, description, price, img } = props;
	return (
		<div className="card-product-container">
			<div className="card-product-body">
				<div>
					<div className="p-2">
						<img src={img} alt={title} className={'mx-auto'} />
					</div>

					<div className="p-2 mb-3">
						<h6 className="font-bold">{title}</h6>
						<p className="text-gray-600 text-xs">
							{description}
						</p>
					</div>
				</div>

				<div className="p-2 font-bold">
					{new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: 'USD',
						minimumFractionDigits: 3,
					}).format(price)}
				</div>
			</div>

			<div className="">
				<button className="btn-agregar">Agregar</button>
			</div>
		</div>
	);
};

export default CardProduct;
