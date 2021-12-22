import React, { useContext } from 'react';
import './Cart.css';

// Context
import { Context } from '../../Context';
import { Link } from 'react-router-dom';

const Cart = () => {
	// Carrito
	const { cartList } = useContext(Context);

	return (
		<div className='carrito'>
			<h2>Carrito</h2>
			{cartList.length === 0 && (
				<div>
					<p>Tu carrito esta vacio</p>
					<p>¡Agrega productos!</p>
					<Link to='/product/remeras'>
						<button type='button'>Tienda</button>
					</Link>
				</div>
			)}

			{cartList.map((item, i) => (
				<div key={i}>
					<h1>Producto: {item.item.title}</h1>
					<h1>Precio: ${item.item.price}</h1>
					<h1>Cantidad: {item.quantity}</h1>
					<img src={item.item.img} height='150px' alt={item.item.title} />
				</div>
			))}
		</div>
	);
};
export default Cart;
