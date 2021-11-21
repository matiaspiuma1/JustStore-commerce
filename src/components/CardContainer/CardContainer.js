import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Box } from '@mui/material';
import ItemCount from '../ItemListContainer/ItemCount';

const CardContainer = ({ stock }) => {
	return (
		<Box margin={2}>
			<Grid container spacing={2} columns={12}>
				<Grid item xs={12} sm={6} md={4} lg={3}>
					<Card>
						<CardMedia component='img' height='140' image='' alt='' />
						<CardContent>
							<Typography gutterBottom variant='h5' component='div' textAlign='center'>
								Remera Nike
							</Typography>
							<Typography variant='body2' color='text.secondary'>
								Talle L
							</Typography>
							<Typography variant='body2' color='text.secondary'>
								Stock: {stock}
							</Typography>
							<Typography variant='body2' color='text.secondary'>
								Precio: 2450$
							</Typography>
						</CardContent>
						<ItemCount />
					</Card>
				</Grid>
			</Grid>
		</Box>
	);
};

export default CardContainer;
