import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Components
import NavBar from './components/NavBar/NavBar';

//Views
import About from './Views/About/About';
import Store from './Views/Store/Store';
import Contact from './Views/Contact/Contact';
import Faq from './Views/FAQ/Faq';
import Home from './Views/Home/Home';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

const App = () => {
	return (
		<Router>
			<>
				<NavBar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/About' element={<About />} />
					<Route path='/Store' element={<Store />} />
					<Route path='/Contact' element={<Contact />} />
					<Route path='/Faq' element={<Faq />} />
					<Route path='/item/:id' element={<ItemDetailContainer />} />
				</Routes>
			</>
		</Router>
	);
};

export default App;
