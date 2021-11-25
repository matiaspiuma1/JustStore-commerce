import React from 'react';
import { Card, CardContent, Typography, Grid, CardMedia } from '@mui/material';
import ItemCount from './ItemCount';

const Product = ({ data }) => {
	return (
		<Grid
			item
			xs={12}
			sm={6}
			md={3}
			lg={3}
			xl={3}
			sx={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', margin: '15px' }}
		>
			<Card>
				<CardMedia component='img' height='240' image={`../../assets/images/${data.id}.jpg`} alt={data.title} />
				<CardContent>
					<Typography gutterBottom variant='h6' component='div' textAlign='center'>
						{data.title}
					</Typography>
					<Typography variant='body2' color='text.primary' fontSize={20} textAlign='center'>
						${data.price}
					</Typography>
					<Typography variant='body2' color='text.secondary' fontSize={20} textAlign='center'>
						Talle: {data.size}
					</Typography>
				</CardContent>
				<ItemCount />
			</Card>
		</Grid>
	);
};

export default Product;
