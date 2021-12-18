import React from 'react';

// Components
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import { ItemsProvider } from './Context';
import Home from './Views/Home/Home';
import Cart from './Views/Cart/Cart';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

const App = () => (
	<ItemsProvider>
		<Router>
			<NavBar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/Cart' element={<Cart />} />
				<Route path='/detail/:id' element={<ItemDetailContainer />} />
				<Route path='/product/:type' element={<ItemListContainer />} />
			</Routes>
		</Router>
	</ItemsProvider>
);

export default App;
