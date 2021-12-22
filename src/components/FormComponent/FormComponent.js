import React, { useState } from 'react';
import './FormComponent.css';

import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../Firebase/FirebaseConfig';

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
		console.log(values);

		const docRef = await addDoc(collection(db, 'buyer'), { values });

		setValues(initialState);
		console.log('Documento creado con Firebase', docRef.id);
	};

	return (
		<>
			<form onSubmit={onSubmitEvent} className='form-container'>
				<input placeholder='Name' name='name' value={values.name} onChange={onChangeHandler} />
				<input placeholder='Last Name' name='lastName' value={values.lastName} onChange={onChangeHandler} />
				<input placeholder='Adress' name='adress' value={values.adress} onChange={onChangeHandler} />
				<input placeholder='Email' name='email' value={values.email} onChange={onChangeHandler} />
				<button type='submit'>Buy</button>
			</form>
		</>
	);
};

export default FormComponent;
