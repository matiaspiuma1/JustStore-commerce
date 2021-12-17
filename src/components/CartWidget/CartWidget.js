import React, { useContext } from 'react';

// Components
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';

// Context
import { Context } from '../../Context';

const CartWidget = () => {
	// Cantidad de items en el carrito

	const { qtyItems } = useContext(Context);

	return (
		<Badge color='default' badgeContent={qtyItems}>
			<ShoppingCartIcon />
		</Badge>
	);
};

export default CartWidget;
