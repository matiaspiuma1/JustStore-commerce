import React from 'react';

//Components
import logo from '../../assets/clothes-shop.png';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
	return (
		<>
			<Navbar collapseOnSelect expand='sm' bg='dark' variant='dark' fixed='top'>
				<Link to='/' href='#home' className='nav-link'>
					<Navbar.Brand>
						<img alt='Icono tienda' src={logo} width='32' height='32' className='d-inline-block align-top' />
						JustStore
					</Navbar.Brand>
				</Link>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='me-auto'>
						<NavLink to='/Store' className='nav-link text-center' activeclassname='selected'>
							Tienda
						</NavLink>
						<NavLink to='/About' className='nav-link text-center' activeclassname='selected'>
							Nosotros
						</NavLink>
						<NavLink to='/Contact' className='nav-link text-center' activeclassname='selected'>
							Contacto
						</NavLink>
						<NavLink to='/Faq' className='nav-link text-center' activeclassname='selected'>
							FAQ
						</NavLink>
						<NavLink to='/Cart' className='nav-link text-center' activeclassname='selected'>
							<CartWidget />
						</NavLink>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
};

export default NavBar;
