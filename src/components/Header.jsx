import React from 'react';
import { FaBars, FaSearch } from 'react-icons/fa';
import { BsFillCartFill } from 'react-icons/bs';
import { Logo } from '../utils/icons';
import './header.scss';

const Header = () => {
	return (
		<header>
			<nav className="nav-header">
				<div className="nav-header-body">
					<div className="nav-header-container-logo">
						<FaBars className="bars" />
						<a href="/">
							<Logo className={'nav-header-logo'} />
						</a>
					</div>

					<div className="nav-header-buttons">
						<button
							type="button"
							className="nav-header-search-button"
						>
							<FaSearch className="search" />
						</button>

						<button
							type="button"
							className="nav-header-cart-button"
						>
							<span className="cart-button-number">
								<span className="cart-button-number">
									9
								</span>
							</span>
							<BsFillCartFill className="cart" />
						</button>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
