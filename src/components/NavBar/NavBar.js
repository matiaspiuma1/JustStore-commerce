import React from 'react';
import './NavBar.css';

// Components
import logo from '../../assets/icon.png';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => (
	<Navbar collapseOnSelect expand='md' bg='dark' variant='dark' fixed='top'>
		<Link to='/' className='nav-link'>
			<Navbar.Brand>
				<img alt='Icono tienda' src={logo} width='32' height='32' className='d-inline-block align-top' />
				JustStore
			</Navbar.Brand>
		</Link>
		<Navbar.Toggle aria-controls='responsive-navbar-nav' style={{ border: 'none' }} />
		<Navbar.Collapse id='responsive-navbar-nav'>
			<Nav className='me-auto'>
				<NavLink to='/product/remeras' className='nav-link text-center' activeclassname='selected'>
					REMERAS
				</NavLink>
				<NavLink to='/product/zapatillas' className='nav-link text-center' activeclassname='selected'>
					ZAPATILLAS
				</NavLink>
				<NavLink to='/product/camperas' className='nav-link text-center' activeclassname='selected'>
					CAMPERAS
				</NavLink>
				<NavLink to='/product/pantalones' className='nav-link text-center' activeclassname='selected'>
					PANTALONES
				</NavLink>
				<NavLink to='/product/buzos' className='nav-link text-center' activeclassname='selected'>
					BUZOS
				</NavLink>
				<NavLink to='/Cart' className='nav-link text-center' activeclassname='selected'>
					<CartWidget />
				</NavLink>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
);

export default NavBar;
