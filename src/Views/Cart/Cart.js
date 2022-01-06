import React, { useContext } from 'react';
import './Cart.css';

// Context
import { Context } from '../../Context';

// Components
import { Link } from 'react-router-dom';
import { Button, Typography, Stack, Divider } from '@mui/material';

// Icons
import ClearAllRoundedIcon from '@mui/icons-material/ClearAllRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';

const Cart = () => {
	// Carrito
	const { cartList, deleteItem, totalPrice, clearCart } = useContext(Context);

	return (
		<div className='cart'>
			{(cartList.length != 0 && (
				<Stack>
					{cartList.map((item) => (
						<Stack key={item.item.id}>
							<Stack direction='row' justifyContent='space-around' alignItems='center' spacing={2}>
								<Typography className='cart-item' variant='subtitle1'>
									Producto: {item.item.title}
								</Typography>
								<Typography variant='subtitle2' className='cart-item'>
									Precio: ${item.item.price * item.quantity}
								</Typography>
								<Typography className='cart-item'>Cantidad: {item.quantity}</Typography>
								<img src={item.item.img} height='200px' alt={item.item.title} />
								<Button onClick={() => deleteItem(item.item.id, item.quantity)}>
									<DeleteRoundedIcon color='error' />
								</Button>
							</Stack>
							<Divider orientation='horizontal' variant='inset' />
						</Stack>
					))}
					<Stack direction='row' justifyContent='flex-end' alignItems='center' spacing={2} mt={2} sx={{ marginBottom: '55%' }}>
						<Typography variant='h6'>Total ${totalPrice()}</Typography>
						<Button variant='outlined' color='warning' onClick={clearCart}>
							<Typography variant='button'>
								Vaciar carrito
								<ClearAllRoundedIcon />
							</Typography>
						</Button>
						<Link to='/checkout' className='btn-shop'>
							<Button variant='outlined' color='success'>
								Terminar compra
								<DoneRoundedIcon />
							</Button>
						</Link>
					</Stack>
				</Stack>
			)) || (
				<Stack sx={{ marginTop: '14.6%', marginBottom: '16.5%' }}>
					<Typography variant='body1'>Tu carrito está vacio</Typography>
					<Typography variant='body1'>¡Agregá productos!</Typography>
					<Link to='/product/remeras' className='btn-shop'>
						<Button variant='outlined' color='info'>
							Tienda
						</Button>
					</Link>
				</Stack>
			)}
		</div>
	);
};
export default Cart;
