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
				let cart = cartList;
				cart[index].quantity = cart[index].quantity + quantity;
				cartList.push(cart);
			} else setCartList([...cartList, { item, quantity }]);
		} else setCartList([{ item, quantity }]);
		setQtyItems(qtyItems + quantity);
	};

	return <Context.Provider value={{ addItem, cartList, qtyItems }}>{children}</Context.Provider>;
};
