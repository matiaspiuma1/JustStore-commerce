import React from 'react';
import './CartWidget.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';

const CartWidget = () => {
	return (
		<Badge color='default' badgeContent={5}>
			<ShoppingCartIcon />
		</Badge>
	);
};

export default CartWidget;
