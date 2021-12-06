import React, { useState } from 'react';

//Components
import { CardActions, Button, Typography } from '@mui/material';

//Le paso la prop de la data de cada item para usar el stock disponible de cada producto
const ItemCount = ({ data }) => {
	//Seteo un counter inicial en 1
	const [counter, setCounter] = useState(1);

	const addProduct = () => {
		//Y dependiendo el stock de cada producto el cliente va a poder sumar o restar productos
		if (counter < data.stock) {
			setCounter(counter + 1);
		}
	};

	//Función para eliminar los productos
	const deleteProduct = () => {
		if (counter > 1) {
			setCounter(counter - 1);
		}
	};

	//Función para agregar al carrito
	const onAdd = (e) => {
		//Variables para el precio final
		e.preventDefault();
		const price = data.price;
		let total = price * counter;
		alert(`Agregaste a tu carrito: ${counter} ${data.title}, Talle: ${data.size}, Precio final: $${total} `);
	};

	return (
		<>
			<CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
				<Button size='small' variant='outlined' onClick={deleteProduct}>
					-
				</Button>
				<Typography textAlign='center' marginRight='15px' marginLeft='15px'>
					{counter} producto/s
				</Typography>
				<Button id='agregarBtn' size='small' variant='outlined' onClick={addProduct}>
					+
				</Button>
			</CardActions>
			<Button onClick={onAdd} size='large' fullWidth={true} sx={{ marginRight: '10px' }}>
				Agregar carrito
			</Button>
		</>
	);
};

export default ItemCount;
