import React, { useState, useEffect, useContext } from 'react';

//Components
import { useParams } from 'react-router-dom';
import ItemDetail from '../../Components/ItemDetail/ItemDetail';
import { Context } from '../../Context';

const ItemDetailContainer = () => {
	//Context
	const [items] = useContext(Context);

	//useParams para detectar el id por la URL
	let { id } = useParams();

	//Seteo un array vacio que luego se llena con la información solamente del producto seleccionado
	const [product, setProducts] = useState({});

	let getItem = new Promise((res, reject) => {
		setTimeout(() => {
			items ? res(items) : reject('Error 404');
		}, 500);
	});

	useEffect(() => {
		id
			? getItem
					.then((res) => {
						setProducts(res.find((a) => a.id === parseInt(id)));
					})
					.catch((err) => console.log(err))
			: getItem
					.then((res) => {
						setProducts(res);
					})
					.catch((err) => console.log(err));
	});

	return (
		<>
			<ItemDetail item={product} />
		</>
	);
};

export default ItemDetailContainer;
