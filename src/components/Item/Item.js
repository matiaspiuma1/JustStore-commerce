import React from 'react';
import './Item.css';

//Components
import { Card, CardContent, Typography, Grid, CardMedia, Button, Divider } from '@mui/material';
import { Link } from 'react-router-dom';

const Item = ({ data }) => {
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
				<CardMedia component='img' height='350' image={data.img} alt={data.title} />
				<CardContent>
					<Typography gutterBottom variant='inherit' component='div' align='center'>
						{data.title}
					</Typography>
					<Typography variant='body1' color='text.primary' textAlign='center'>
						${data.price}
					</Typography>
				</CardContent>
				<Divider />
				<Link to={`/detail/${data.id}`} className='itemLink'>
					<Button fullWidth size='large' sx={{ background: 'rgba(199, 199, 199, 0.41)' }}>
						Ver más
					</Button>
				</Link>
			</Card>
		</Grid>
	);
};

export default Item;
