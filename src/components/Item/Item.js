import React from 'react';

//Components
import { Card, CardContent, Typography, Grid, CardMedia } from '@mui/material';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({ data }) => {
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
				<Link to={`/item/${data.id}`}>
					<CardMedia component='img' height='550' image={data.img} alt={data.title} />
				</Link>
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

export default ItemDetail;
