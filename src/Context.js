import React, { createContext, useState } from 'react';

// Creo el contexto
export const Context = createContext();

// Exporto el context
export const ItemsProvider = ({ children }) => {
	// Carrito
	const [cartList, setCartList] = useState([]);

	// Cantidad de productos
	const [qtyItems, setQtyItems] = useState(0);

	// Función para agregar productos al carrito
	const addItem = (item, quantity) => {
		if (cartList.length !== 0) {
			const index = cartList.findIndex((obj) => obj.item.id === item.id);
			if (index !== -1) {
				const newCart = cartList;
				newCart[index].quantity = newCart[index].quantity + quantity;
				setCartList(newCart);
			} else setCartList([...cartList, { item, quantity: quantity }]);
		} else setCartList([{ item, quantity: quantity }]);
		setQtyItems(qtyItems + quantity);
	};

	// Función para eliminar item del carrito
	const deleteItem = (itemId, quantity) => {
		setCartList(cartList.filter((obj) => obj.item.id != itemId));
		setQtyItems(qtyItems - quantity);
	};

	// Función para saber el total de items en el carrito
	const itemsTotal = () => {
		return cartList.reduce((acum, item) => acum + item.quantity, 0);
	};

	// Función para saber el precio total
	const totalPrice = () => {
		return cartList.reduce((acum, value) => acum + value.quantity * value.item.price, 0);
	};

	// Función para limpiar el carrito por completo
	const clearCart = () => {
		setCartList([]);
		setQtyItems(0);
	};

	return <Context.Provider value={{ addItem, cartList, qtyItems, deleteItem, itemsTotal, totalPrice, clearCart }}>{children}</Context.Provider>;
};
