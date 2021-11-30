import React, { useState } from 'react';

//Components
import { CardActions, Button, Typography } from '@mui/material';

const ItemCount = () => {
	const [counter, setCounter] = useState(1);

	const sumarProducto = () => {
		if (counter < 5) {
			setCounter(counter + 1);
		}
	};

	const borrarProducto = () => {
		if (counter > 1) {
			setCounter(counter - 1);
		}
	};

	return (
		<>
			<CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
				<Button size='small' variant='outlined' onClick={borrarProducto}>
					Eliminar
				</Button>
				<Typography textAlign='center' marginRight='15px' marginLeft='15px'>
					{counter} producto/s
				</Typography>
				<Button id='agregarBtn' size='small' variant='outlined' onClick={sumarProducto}>
					Agregar
				</Button>
			</CardActions>
			<Button size='large' variant='outlined' color='inherit' fullWidth={true} sx={{ marginRight: '10px' }}>
				Agregar carrito
			</Button>
		</>
	);
};

export default ItemCount;
