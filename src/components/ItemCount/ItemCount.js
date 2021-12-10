import React, { useState } from 'react';
import './ItemCount.css';

//Components
import { CardActions, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

//Le paso la prop de la data de cada item para usar el stock disponible de cada producto
const ItemCount = ({ item }) => {
	//Seteo un counter inicial en 1
	const [counter, setCounter] = useState(1);
	const [shopBtn, setShopBtn] = useState(false);

	const addProduct = () => {
		//Y dependiendo el stock de cada producto el cliente va a poder sumar o restar productos
		if (counter < item.stock) {
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
		const price = item.price;
		let total = price * counter;
		alert(`Agregaste a tu carrito: ${counter} ${item.title}, Talle: ${item.size}, Precio final: $${total}`);
		setShopBtn(true);
	};

	return (
		<>
			<div style={{ display: !shopBtn ? `${('flex', 'justifyContent: center')}` : 'none' }}>
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
				<Button onClick={onAdd} size='large' fullWidth={true}>
					Agregar carrito
				</Button>
			</div>
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<CardActions sx={{ display: shopBtn ? `${('flex', 'justifyContent: center')}` : 'none' }}>
					<Link to='/Cart' className='linkCarrito'>
						<Button size='large' fullWidth={true}>
							Terminar compra
						</Button>
					</Link>
					<Link to='/Store' className='linkCarrito'>
						<Button size='large' fullWidth={true}>
							Seguir comprando
						</Button>
					</Link>
				</CardActions>
			</div>
		</>
	);
};

export default ItemCount;
