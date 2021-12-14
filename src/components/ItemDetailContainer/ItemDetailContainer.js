import React, { useEffect, useState } from 'react';

//Firebase
import { db } from '../../Firebase/FirebaseConfig';
import { collection, query, getDocs } from 'firebase/firestore';

//Components
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
	//Item
	const [item, setItem] = useState({});

	//ID de los productos para poder filtrarlo
	let { id } = useParams();

	//Llamo a los productos desde la base de datos y luego filtro al item que se quiere ver
	useEffect(() => {
		const getItem = async () => {
			const q = query(collection(db, 'products'));
			const item = [];
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				item.push({ ...doc.data(), id: doc.id });
			});
			setItem(item.find((itemID) => itemID.id === id));
		};
		getItem();
	}, [id]);

	//Y luego lo paso como prop
	return (
		<>
			<ItemDetail item={item} />;
		</>
	);
};

export default ItemDetailContainer;
