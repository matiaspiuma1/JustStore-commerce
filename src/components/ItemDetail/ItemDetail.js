import React, { useContext } from 'react';
import './ItemDetail.css';

// Components
import { Typography, Card, CardMedia, CardContent, Divider } from '@mui/material';
import ItemCount from '../ItemCount/ItemCount';

// Context
import { Context } from '../../Context';

const ItemDetail = ({ item }) => {
	// Función agregar carrito
	const { addItem } = useContext(Context);

	const onAdd = (quantity) => {
		addItem(item, quantity);
	};

	return (
		<div className='contenedorCard'>
			<Card sx={{ maxWidth: '100%', boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px', borderRadius: '10px' }} className='cardInfo'>
				<CardMedia component='img' alt={item.title} height='550' image={item.img} width='100%' />
				<CardContent>
					<Typography gutterBottom variant='h5' component='div' textAlign='center'>
						{item.title}
					</Typography>
					<Typography variant='h6' color='text.primary' textAlign='center'>
						Precio: ${item.price}
					</Typography>
					<Typography variant='h6' color='text.secondary' textAlign='center'>
						Talle: {item.size}
					</Typography>
					<Typography variant='h6' color='text.secondary' textAlign='center'>
						Stock disponible: {item.stock}
					</Typography>
				</CardContent>
				<Divider variant='middle' />
				<ItemCount item={item} onAdd={onAdd} />
			</Card>
		</div>
	);
};

export default ItemDetail;
