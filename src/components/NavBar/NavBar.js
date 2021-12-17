import React from 'react';

// Components
import logo from '../../assets/clothes-shop.png';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => (
	<Navbar collapseOnSelect expand='sm' bg='dark' variant='dark' fixed='top'>
		<Link to='/' className='nav-link'>
			<Navbar.Brand>
				<img alt='Icono tienda' src={logo} width='32' height='32' className='d-inline-block align-top' />
				JustStore
			</Navbar.Brand>
		</Link>
		<Navbar.Toggle aria-controls='responsive-navbar-nav' />
		<Navbar.Collapse id='responsive-navbar-nav'>
			<Nav className='me-auto'>
				<NavLink to='/product/remeras' className='nav-link text-center' activeclassname='selected'>
					Remeras
				</NavLink>
				<NavLink to='/product/zapatillas' className='nav-link text-center' activeclassname='selected'>
					Zapatillas
				</NavLink>
				<NavLink to='/product/camperas' className='nav-link text-center' activeclassname='selected'>
					Camperas
				</NavLink>
				<NavLink to='/product/pantalones' className='nav-link text-center' activeclassname='selected'>
					Pantalones
				</NavLink>
				<NavLink to='/product/buzos' className='nav-link text-center' activeclassname='selected'>
					Buzos
				</NavLink>
				<NavLink to='/Cart' className='nav-link text-center' activeclassname='selected'>
					<CartWidget />
				</NavLink>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
);

export default NavBar;
