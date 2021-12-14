import React, { createContext, useState } from 'react';

//Creo el contexto
export const Context = createContext();

//Exporto el context
export const ItemsProvider = ({ children }) => {
	//Carrito
	const [cart, setCart] = useState([]);
	//Cantidad de productos
	const [qtyItems, setQtyItems] = useState(0);

	//Función para agregar productos al carrito
	const addItem = (item, quantity) => {
		if (cart.length !== 0) {
			const index = cart.findIndex((obj) => {
				return obj.item.id === item.id;
			});
			if (index !== -1) {
				const newCart = cart;
				newCart[index].quantity = newCart[index].quantity + quantity;
				setCart(newCart);
			} else setCart([...cart, { item, quantity: quantity }]);
		} else setCart([{ item, quantity: quantity }]);
		setQtyItems(qtyItems + quantity);
	};

	//Función para no duplicar productos
	const isInCart = () => {
		console.log('Estoy en el carrito');
	};

	return <Context.Provider value={{ addItem, isInCart, cart, qtyItems }}>{children}</Context.Provider>;
};
