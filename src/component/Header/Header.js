import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
	return (
		<div className='header'>
			<img className="logo" src={logo} alt="" />
			<nav>
				<a href='/shop'>Shop</a>
				<a href="/orders">Order</a>
				<a href="/inventory">Manage Inventory</a>
			</nav>
			<div className="input">
				<input className="input-field" type="text" /><button>Search</button>
			</div>

		</div>
	);
};

export default Header;