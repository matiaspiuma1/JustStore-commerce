import React, { createContext, useState } from 'react';

//Creo el contexto
export const Context = createContext([]);

//Creo un array de objetos con los productos y lo igualo al state
const Items = [
	{
		id: 1,
		title: 'NIKE SB CHERUB BLACK',
		price: 4799,
		size: 'L',
		type: 'Remera',
		img: 'https://drifters.com.ar/uploads/product_image/24760/DriftersPDP_APP_DJ1218-010_Shot1.jpg',
		stock: 10,
	},
	{
		id: 2,
		title: 'NIKE SB TE LOGO PINK',
		price: 4450,
		size: 'M',
		type: 'Remera',
		img: 'https://drifters.com.ar/uploads/product_image/22983/650w_DriftersPDP_APP_CV7539-629_Shot1.jpg',
		stock: 4,
	},
	{
		id: 3,
		title: 'WOODOO LABEL BRICK',
		price: 2490,
		size: 'XL',
		type: 'Remera',
		img: 'https://drifters.com.ar/uploads/product_image/24710/DriftersPDP_APP_WO00001905-600_Shot1.jpg',
		stock: 6,
	},
	{
		id: 4,
		title: 'WOODOO HALLOWEEN BLACK',
		price: 2490,
		size: 'L',
		type: 'Remera',
		img: 'https://drifters.com.ar/uploads/product_image/24694/DriftersPDP_APP_WO00001904-001_Shot1.jpg',
		stock: 12,
	},
	{
		id: 5,
		title: 'NIKE SB BLAZER MID FADED',
		price: 21999,
		size: '9 US',
		type: 'Zapatillas',
		img: 'https://drifters.com.ar/uploads/product_image/23551/DriftersPDP_FTW_DA1839-001_Shot1.jpg',
		stock: 24,
	},
	{
		id: 6,
		title: 'NIKE SB CHRON 2 GREY',
		price: 10999,
		size: '8.5 US',
		type: 'Zapatillas',
		img: 'https://drifters.com.ar/uploads/product_image/24661/DriftersPDP_FTW_DM3494-003_Shot1.jpg',
		stock: 14,
	},
	{
		id: 7,
		title: 'NIKE SB SHANE T',
		price: 14999,
		size: '9.5 US',
		type: 'Zapatillas',
		img: 'https://drifters.com.ar/uploads/product_image/24156/DriftersPDP_FTW_CU9224-101_Shot1.jpg',
		stock: 31,
	},
	{
		id: 8,
		title: 'THRASHER HOODIE SAN FRANCISCO',
		price: 7500,
		size: 'XL',
		type: 'Buzo',
		img: 'https://drifters.com.ar/uploads/product_image/23885/DriftersPDP_APP_TRSH003414-080_Shot1.jpg',
		stock: 11,
	},
	{
		id: 9,
		title: 'VANS CLASSIC FULL ZIP BLACK',
		price: 9700,
		size: 'M',
		type: 'Campera',
		img: 'https://drifters.com.ar/uploads/product_image/24024/DriftersPDP_APP_AR-0VCFNGO-001_Shot1.jpg',
		stock: 4,
	},
	{
		id: 10,
		title: 'SANTA CRUZ DOUBLEN PRINT BLACK',
		price: 7499,
		size: 'XS',
		type: 'Campera',
		img: 'https://drifters.com.ar/uploads/product_image/23030/DriftersPDP_APP_STC2946000-F20_Shot1.jpg',
		stock: 19,
	},
	{
		id: 11,
		title: 'HURLEY OAO STRETCH',
		price: 6990,
		size: '32',
		type: 'Pantalon',
		img: 'https://drifters.com.ar/uploads/product_image/20037/BV1696%20235%20A.jpg',
		stock: 15,
	},
	{
		id: 12,
		title: 'VOLCOM EWW BLACK',
		price: 7000,
		size: '34',
		type: 'Pantalon',
		img: 'https://drifters.com.ar/uploads/product_image/22869/DriftersPDP_APP_VOL0001095-F20_Shot1.jpg',
		stock: 18,
	},
];

export const ItemsProvider = ({ children }) => {
	const [items, setItems] = useState(Items);
	return <Context.Provider value={[items, setItems]}>{children}</Context.Provider>;
};
