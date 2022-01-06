import React, { useEffect, useState } from 'react';
import './ItemDetailContainer.css';

// Firebase
import { collection, query, getDocs, where, documentId } from 'firebase/firestore';
import { db } from '../../Firebase/FirebaseConfig';

// Components
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';

const ItemDetailContainer = () => {
	// Item
	const [item, setItem] = useState([]);

	// Spinner
	const [isLoading, setIsLoading] = useState(false);

	// ID de los productos para poder filtrarlo mediante la URL
	const { id } = useParams();

	// Llamo a los productos desde la base de datos
	useEffect(() => {
		const getItem = async () => {
			const q = query(collection(db, 'products'), where(documentId(), '==', id));
			const itemArray = [];
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				itemArray.push({ ...doc.data(), id: doc.id });
			});
			setItem(itemArray);
		};
		// Timeout para que se quede un segundo el spinner de carga
		setTimeout(() => {
			setIsLoading(true);
		}, 1000);
		getItem();
	}, [id]);

	// Y luego mapeo el ItemDetail
	// Y le paso como prop la informacion antes filtrada

	return (
		<>
			{isLoading ? (
				<Box>
					{item.map((itemInfo) => (
						<ItemDetail item={itemInfo} key={itemInfo.id} />
					))}
				</Box>
			) : (
				<CircularProgress color='inherit' className='spinner' />
			)}
		</>
	);
};

export default ItemDetailContainer;
