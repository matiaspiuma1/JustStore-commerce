import React, { useState } from 'react';
import './FormComponent.css';

// Firebase
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../Firebase/FirebaseConfig';

// Components
import { Stack, Typography, Button, TextField, Box } from '@mui/material';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const initialState = {
	name: '',
	lastName: '',
	adress: '',
	email: '',
};

const FormComponent = () => {
	const [values, setValues] = useState(initialState);

	const onChangeHandler = (e) => {
		const { value, name } = e.target;
		setValues({ ...values, [name]: value });
	};

	const onSubmitEvent = async (e) => {
		e.preventDefault();
		const docRef = await addDoc(collection(db, 'buyer'), { values });
		setValues(initialState);
		Swal.fire({
			icon: 'success',
			title: '¡Compra realizada con exito!',
			showConfirmButton: true,
			confirmButtonText: `<a style='text-decoration: none;' href='https://just-store-ecommerce.vercel.app/'>Cerrar</a>`,
			text: `Tu id de compra es ${docRef.id}`,
		});
	};

	return (
		<Stack sx={{ marginTop: '75px', textAlign: 'center' }}>
			<Typography variant='h4' sx={{ marginBottom: '50px' }}>
				Terminando compra
			</Typography>
			<form onSubmit={onSubmitEvent} className='form-container' style={{ marginBottom: '14%' }}>
				<TextField required id='filled-error' label='Requerido' helperText='Tu nombre' variant='filled' name='name' value={values.name} onChange={onChangeHandler} />
				<TextField required id='filled-error' label='Requerido' helperText='Tu apellido' variant='filled' name='lastName' value={values.lastName} onChange={onChangeHandler} />
				<TextField required id='filled-error' label='Requerido' helperText='Tu dirección' variant='filled' name='adress' value={values.adress} onChange={onChangeHandler} />
				<TextField required id='filled-error' label='Requerido' helperText='Tu email' variant='filled' name='email' value={values.email} onChange={onChangeHandler} />
				<Button variant='outlined' type='submit'>
					Comprar
				</Button>
			</form>
		</Stack>
	);
};

export default FormComponent;
