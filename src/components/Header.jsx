import React from 'react';
import { FaBars, FaSearch } from 'react-icons/fa';
import { BsFillCartFill } from 'react-icons/bs';
import { Logo } from '../utils/icons';

const Header = () => {
	return (
		<header>
			<nav className="border-gray-200 px-4 lg:px-6 py-2.5 bg-gray-900">
				<div className="flex container flex-wrap justify-between items-center mx-auto max-w-screen-xl">
					<div className="flex items-center">
						<FaBars className="text-white h-4 mr-3" />
						<a href="/">
							<Logo
								className={
									'mr-3 h-6 sm:h-9 w-6 sm:w-9 text-white'
								}
							/>
						</a>
					</div>

					<div className="flex items-center lg:order-2">
						<button
							type="button"
							className="inline-flex items-center p-1 text-sm text-white rounded-lg lg:hidden focus:outline-none"
						>
							<FaSearch className="w-4 h-4" />
						</button>

						<button
							type="button"
							className="inline-flex items-center p-1 ml-1 text-sm text-white rounded-lg lg:hidden focus:outline-none relative"
						>
							<span className="w-[1rem] h-[1rem] flex items-center justify-center bg-blue-700 absolute -top-0.5 -right-0.5 rounded-full text-[10px] leading-none text-white font-medium">
								<span
									className="mt-[1px]"
									suppressHydrationWarning
								>
									9
								</span>
							</span>
							<BsFillCartFill className="w-5 h-5" />
						</button>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
