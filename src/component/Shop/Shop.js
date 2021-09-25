import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState([]);
	const [displayProducts, setDisplayProducts] = useState([])

	useEffect(() => {
		fetch('./products.JSON')
			.then(res => res.json())
			.then(data => {
				setProducts(data);
				setDisplayProducts(data);
			});
	}, [])

	// console.log("lemgtn is", products);

	useEffect(() => {
		if (products.length) {
			const saveCart = getStoredCart();
			const storedCart = [];
			for (const key in saveCart) {

				const addedProduct = products.find(product => product.key === key);
				if (addedProduct) {
					// object e property add
					const quantity = saveCart[key];
					addedProduct.quantity = quantity;

					storedCart.push(addedProduct);

				}
			}
			setCart(storedCart)
		}
	}, [products])

	const handleAddtoCart = (product) => {
		const newCart = [...cart, product];
		setCart(newCart);
		// console.log(product.product.key);
		// save to local storge for now
		addToDb(product.key);

	}

	const handleSearch = (a) => {
		// console.log(a.target.value);
		const searchText = a.target.value;
		const matchProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
		setDisplayProducts(matchProducts);
		console.log(matchProducts.length);

	}

	return (
		<div>
			<div className="search-container">
				<input className="search-container-input" onChange={handleSearch} placeholder="Search product" type="text" />
			</div>
			<div className="shop-container">
				<div className="product-container">

					{
						displayProducts.map(product => <Product
							key={product.key}
							product={product}
							handleAddtoCart={handleAddtoCart}
						/>)


					}
				</div>
				<div className="cart-container">
					<Cart cart={cart}></Cart>
				</div>
			</div>
		</div>

	);
};

export default Shop;