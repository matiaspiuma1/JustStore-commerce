import React from 'react';
import NavBar from './components/NavBar/NavBar';
import CardContainer from './components/ItemListContainer/CardContainer/CardContainer';

const App = () => {
	return (
		<>
			<NavBar />
			<CardContainer stock={5} />
		</>
	);
};

export default App;
