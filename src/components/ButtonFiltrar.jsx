import React from 'react';
import { AiTwotoneFilter } from 'react-icons/ai';
import './buttonfilter.scss';

const ButtonFiltrar = () => {
	return (
		<div className="container-filter">
			<div className="container-filter-center">
				<button className="button-filter">
					Filtrar <AiTwotoneFilter />
				</button>
			</div>
		</div>
	);
};

export default ButtonFiltrar;
