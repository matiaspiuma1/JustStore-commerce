import React from 'react';

//Firebase
// import { db } from './Firebase/FirebaseConfig';

//comps
import NavBar from './components/NavBar/NavBar';
import { ItemsProvider } from './Context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Views
import About from './Views/About/About';
import Store from './Views/Store/Store';
import Contact from './Views/Contact/Contact';
import Faq from './Views/FAQ/Faq';
import Home from './Views/Home/Home';
import Cart from './Views/Cart/Cart';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

const App = () => {
	return (
		<Router>
			<ItemsProvider>
				<NavBar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/About' element={<About />} />
					<Route path='/Store' element={<Store />} />
					<Route path='/Contact' element={<Contact />} />
					<Route path='/Faq' element={<Faq />} />
					<Route path='/Cart' element={<Cart />} />
					<Route path='/item/:id' element={<ItemDetailContainer />} />
				</Routes>
			</ItemsProvider>
		</Router>
	);
};

export default App;
