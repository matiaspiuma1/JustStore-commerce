import React from 'react';

//Components
import { IconButton, Badge, Toolbar, AppBar, Box, Typography } from '@mui/material';
import logo from '../../assets/clothes-shop.png';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<Box>
			<AppBar sx={{ background: '#322F3D' }}>
				<Toolbar>
					<Link to='/' className='nav-link'>
						<IconButton edge='start' aria-label='menu' sx={{ mr: 4 }} src='../../index.html'>
							<img src={logo} alt='Icono Tienda' height='38px' />
							<Typography variant='h6' sx={{ color: 'white' }}>
								JustStore
							</Typography>
						</IconButton>
					</Link>
					<Typography>
						<Link to='/Store' className='nav-link'>
							Tienda
						</Link>
						<Link to='/About' className='nav-link'>
							Nosotros
						</Link>
						<Link to='/Contact' className='nav-link'>
							Contacto
						</Link>
						<Link to='/Faq' className='nav-link'>
							FAQ
						</Link>
					</Typography>
					<IconButton sx={{ ml: 'auto', color: 'white' }}>
						<Badge badgeContent={2}>
							<CartWidget />
						</Badge>
					</IconButton>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default NavBar;
