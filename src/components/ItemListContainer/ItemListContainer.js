import React, { useContext } from 'react';
import './ItemListContainer.css';

//Components
import Item from '../Item/Item';
import { Box, Grid } from '@mui/material';
import { Context } from '../../Context';

const ItemListContainer = () => {
	//Contexto
	const [items] = useContext(Context);

	//Mapeo los items que llamo desde el Context
	return (
		<Box>
			<Grid container justifyContent='space-evenly' sx={{ marginTop: '75px' }}>
				{items.map((item) => {
					return <Item data={item} key={item.title} />;
				})}
			</Grid>
		</Box>
	);
};

export default ItemListContainer;
