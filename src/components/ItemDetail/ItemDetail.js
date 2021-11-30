import React from 'react';
import './ItemDetail.css';
import { Typography, Card, CardMedia, CardContent } from '@mui/material';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ item }) => {
	return (
		<div className='contenedorCard'>
			<Card
				sx={{
					maxWidth: '100%',
					boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
				}}
				className='nikeSB'
			>
				<CardMedia component='img' alt={item.title} height='550' image={item.img} />
				<CardContent>
					<Typography gutterBottom variant='h5' component='div' textAlign='center'>
						{item.title}
					</Typography>
					<Typography variant='h6' color='text.primary' textAlign='center'>
						Precio: ${item.price}
					</Typography>
					<Typography variant='h6' color='text.secondary' textAlign='center'>
						{item.type}
					</Typography>
				</CardContent>
				<ItemCount />
			</Card>
		</div>
	);
};

export default ItemDetail;
