import React, { useContext } from 'react';
import './Cart.css';

// Context
import { Context } from '../../Context';

const Cart = () => {
	// Carrito
	const { cartList } = useContext(Context);

	return (
		<div>
			{cartList.map((item, i) => (
				<div key={i} className='carrito'>
					<h1>Producto: {item.item.title}</h1>
					<h1>Precio: ${item.item.price}</h1>
					<h1>Cantidad: {item.quantity}</h1>
				</div>
			))}
		</div>
	);
};
export default Cart;
