import React from 'react';
import { IconButton, Badge, Toolbar, AppBar, Box, Typography, Link } from '@mui/material';
import logo from '../../assets/clothes-shop.png';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
	return (
		<Box>
			<AppBar sx={{ background: '#322F3D' }}>
				<Toolbar>
					<IconButton edge='start' aria-label='menu' sx={{ mr: 2 }}>
						<img src={logo} alt='Icono Tienda' height='38px' />
						<Typography variant='h6' sx={{ color: 'white' }}>
							JustStore
						</Typography>
					</IconButton>
					<Typography className='links'>
						<Link href='#' component='button'>
							Inicio
						</Link>
						<Link href='#' component='button'>
							Tienda
						</Link>
						<Link href='#' component='button'>
							Nosotros
						</Link>
						<Link href='#' component='button'>
							Contacto
						</Link>
					</Typography>
					<IconButton sx={{ ml: 'auto', color: 'white' }}>
						<Badge badgeContent={10}>
							<CartWidget />
						</Badge>
					</IconButton>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default NavBar;
