import React, { useEffect, useState } from 'react';

// Firebase
import { collection, query, getDocs, where, documentId } from 'firebase/firestore';
import { db } from '../../Firebase/FirebaseConfig';

// Components
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
	// Item
	const [item, setItem] = useState([]);

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
		getItem();
	}, [id]);

	// Y luego mapeo el ItemDetail
	// Y le paso como prop la informacion antes filtrada

	return (
		<>
			{item.map((itemInfo) => (
				<ItemDetail item={itemInfo} key={itemInfo.id} />
			))}
		</>
	);
};

export default ItemDetailContainer;
