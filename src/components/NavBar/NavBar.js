import React from 'react';
import { IconButton, Badge, Toolbar, AppBar, Box, Typography, Link } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import { teal } from '@mui/material/colors';
import logo from '../../assets/clothes-shop.png';

const color = teal[900];

const NavBar = () => {
	return (
		<Box mt={4}>
			<AppBar sx={{ background: teal[400] }}>
				<Toolbar>
					<IconButton size='large' edge='start' aria-label='menu' sx={{ mr: 2 }}>
						<img src={logo} alt='Icono Tienda' />
					</IconButton>
					<Typography>
						<Link href='#' component='button' variant='h6' color='inherit' underline='none' sx={{ mr: 2 }}>
							Inicio
						</Link>
						<Link href='#' component='button' variant='h6' color='inherit' underline='none' sx={{ mr: 2 }}>
							Tienda
						</Link>
						<Link href='#' component='button' variant='h6' color='inherit' underline='none' sx={{ mr: 2 }}>
							Nosotros
						</Link>
						<Link href='#' component='button' variant='h6' color='inherit' underline='none'>
							Contacto
						</Link>
					</Typography>
					<IconButton sx={{ ml: 'auto' }}>
						<Badge badgeContent={5}>
							<AddShoppingCart />
						</Badge>
					</IconButton>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default NavBar;
