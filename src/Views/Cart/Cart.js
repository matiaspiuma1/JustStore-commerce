import React from 'react';

//Components
import { Table } from 'react-bootstrap';
import './Cart.css';

const Cart = () => {
	return (
		<div className='Cart'>
			<Table responsive='sm'>
				<thead>
					<tr>
						<th>Producto</th>
						<th>Cantidad</th>
						<th>Total</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Producto</td>
						<td>Cantidad</td>
						<td>Total</td>
					</tr>
				</tbody>
			</Table>
		</div>
	);
};

export default Cart;
