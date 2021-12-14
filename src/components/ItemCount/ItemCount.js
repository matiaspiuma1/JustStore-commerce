import React, { useState } from 'react';
import './ItemCount.css';

//Components
import { CardActions, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

//Context

//Mediante la prop item puedo determinar cuanto stock hay de cada item
//La funcion onAdd sirve para almacenar el item y la cantidad
const ItemCount = ({ item, onAdd }) => {
	//Seteo un counter inicial en 1
	const [counter, setCounter] = useState(1);
	const [shopBtn, setShopBtn] = useState(false);

	//Funciones para agregar y borrar productos
	const addProduct = () => {
		if (counter < item.stock) {
			setCounter(counter + 1);
		}
	};

	//Función para eliminar los productos
	const removeProduct = () => {
		if (counter > 1) {
			setCounter(counter - 1);
		}
	};

	//Funcion para cambiar los botones y almacenar la cantidad del producto
	const handleOnAdd = () => {
		onAdd(counter);
		setShopBtn(true);
	};

	return (
		<>
			<div style={{ display: !shopBtn ? `${('flex', 'justifyContent: center')}` : 'none' }}>
				<CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
					<Button size='small' variant='outlined' onClick={removeProduct}>
						-
					</Button>
					<Typography textAlign='center' marginRight='15px' marginLeft='15px'>
						{counter} producto/s
					</Typography>
					<Button id='agregarBtn' size='small' variant='outlined' onClick={addProduct}>
						+
					</Button>
				</CardActions>
				<Button onClick={handleOnAdd} size='large' fullWidth={true}>
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
