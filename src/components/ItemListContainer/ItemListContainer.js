import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';
//Components
import Item from '../Item/Item';
import { RequestData } from '../../data/RequestData';
import { Box, Grid } from '@mui/material';
import Spinner from 'react-bootstrap/Spinner';

const ItemListContainer = () => {
	//Seteo los states para los productos
	const [products, setProducts] = useState([]);
	//Seteo un loader
	const [loader, setLoader] = useState(false);

	//Uso un efecto para simular una carga
	useEffect(() => {
		setLoader(true);
		async function pedirDatos() {
			//Creo una la variable para que almacene los datos
			let datosIngresando = await RequestData();
			//Seteo los productos con los datos
			setProducts(datosIngresando);
			//Seteo nuevamente el loader en false
			setLoader(false);
		}
		pedirDatos();
	}, []);

	return (
		//Los productos cargan en 2 segundos, mientras, aparece un spinner. Cuando ya cargaron desaparece y cargan los productos
		<div>
			{loader ? (
				<div className='d-flex justify-content-center spinner'>
					<Spinner animation='border' size='xxl' />
				</div>
			) : (
				<Box sx={{ flexGrow: 1 }}>
					<Grid container justifyContent='space-evenly' sx={{ marginTop: '75px' }}>
						{products.map((product) => {
							return <Item data={product} key={product.title} />;
						})}
					</Grid>
				</Box>
			)}
		</div>
	);
};

export default ItemListContainer;
