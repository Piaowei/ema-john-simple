import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import Rating from 'react-rating';
const Product = (props) => {
	const { name, img, seller, price, stock, star } = props.product;
	const element = <FontAwesomeIcon icon={faShoppingCart} />
	// console.log(props.handleAddtoCart);
	return (
		<div className='product'>
			<div><img src={img} alt="" /></div>
			<div>
				<h4 className="product-name" >{name}</h4>
				<p><small>by:{seller} </small></p>
				<p>Price:{price}</p>
				<p><small>Only{stock} in stock - order soon</small></p>
				<Rating
					initialRating={star}
					emptySymbol="far fa-star icon-color"
					fullSymbol="fas fa-star icon-color "
					readonly></Rating>
				<br />
				<button onClick={() => props.handleAddtoCart(props.product)} className="btn-regular">{element}add to cart</button>
			</div>

		</div>
	);
};

export default Product;