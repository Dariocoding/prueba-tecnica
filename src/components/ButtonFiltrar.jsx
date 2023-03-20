import React from 'react';
import { AiTwotoneFilter } from 'react-icons/ai';

const ButtonFiltrar = () => {
	return (
		<div className="fixed bottom-2 right-0 left-0">
			<div className="flex items-center justify-center">
				<button className="px-4 mx-auto py-2 text-sm bg-blue-700 font-semibold text-white rounded-lg flex items-center justify-center gap-1.5">
					Filtrar <AiTwotoneFilter />
				</button>
			</div>
		</div>
	);
};

export default ButtonFiltrar;
