import React from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import CardContainer from './components/CardContainer/CardContainer';

const App = () => {
	return (
		<>
			<NavBar />
			<ItemListContainer greeting='Soy una prop!' />
			<CardContainer stock={5} />
		</>
	);
};

export default App;
