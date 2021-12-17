import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';

// Firebase
import { collection, query, getDocs, where } from 'firebase/firestore';
import { Box, Grid } from '@mui/material';
import { db } from '../../Firebase/FirebaseConfig';

// Components
import Item from '../Item/Item';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
	// Items
	const [items, setItems] = useState([]);

	// Me fijo en la url el tipo de producto seleccionado
	const { type } = useParams();

	// Llamo a la base de datos de Firebase y obtengo todos los productos
	// Los seteo para que se guarden en un array vacio ya antes creado (items)
	useEffect(() => {
		const getProducts = async () => {
			const q = query(collection(db, 'products'), where('type', '==', type));
			const docs = [];
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
			});
			setItems(docs);
		};
		getProducts();
	}, [type]);

	console.log(items);

	// Mapeo los items que llamo desde Firebase
	return (
		<Box>
			<Grid container justifyContent='space-evenly' sx={{ marginTop: '75px' }}>
				{items.map((item) => (
					<Item data={item} key={item.title} />
				))}
			</Grid>
		</Box>
	);
};

export default ItemListContainer;
