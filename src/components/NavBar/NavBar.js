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
					<IconButton edge='start' aria-label='menu' sx={{ mr: 4 }} src='../../index.html'>
						<img src={logo} alt='Icono Tienda' height='38px' />
						<Typography variant='h6' sx={{ color: 'white' }}>
							JustStore
						</Typography>
					</IconButton>
					<Typography className='links' fontSize='20px' variant='h6'>
						<Link to='/Store'>Tienda</Link>
						<Link to='/About'>Nosotros</Link>
						<Link to='/Contact'>Contacto</Link>
						<Link to='/Faq'>FAQ</Link>
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
