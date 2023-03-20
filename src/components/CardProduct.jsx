import React from 'react';

const CardProduct = props => {
	const { title, description, price, img } = props;
	return (
		<div className="border border-gray-200 flex justify-between flex-col">
			<div className="flex-grow flex justify-between flex-col">
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
				<button className="w-full bg-gray-200 text-blue-700 py-2 font-bold">
					Agregar
				</button>
			</div>
		</div>
	);
};

export default CardProduct;
