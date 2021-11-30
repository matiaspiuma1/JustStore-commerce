import React, { useState, useEffect } from 'react';

//Components
import Item from '../Item/Item';
import { RequestData } from '../../data/RequestData';
import { Box, Grid } from '@mui/material';

const ItemListContainer = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		async function pedirDatos() {
			let datosIngresando = await RequestData();
			setProducts(datosIngresando);
		}
		pedirDatos();
	}, []);

	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<Grid container justifyContent='space-evenly' sx={{ marginTop: '60px', columnGap: '70px' }}>
					{products.map((product) => {
						return <Item data={product} key={product.title} />;
					})}
				</Grid>
			</Box>
		</>
	);
};

export default ItemListContainer;
