import React from 'react';
import './Footer.css';

// Components
import { Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

// Icons
import CopyrightIcon from '@mui/icons-material/Copyright';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import Logo from '../../assets/icon.png';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
	return (
		<Box sx={{ display: 'flex', justifyContent: 'space-evenly', flexDirection: 'row', paddingTop: '50px', paddingBottom: '50px', backgroundColor: '#bbb', marginTop: '70px', alignItems: 'center' }} className='footer'>
			<Link to='/' className='linkToHome'>
				<Typography variant='h6' align='center' sx={{ textDecoration: 'none' }}>
					<img src={Logo} alt='Icono tienda' />
					JustStore
				</Typography>
			</Link>
			<Typography variant='h6' color='inherit'>
				<CopyrightIcon />
				Todos los derechos reservados.
			</Typography>
			<Typography variant='h6' color='inherit'>
				Seguinos
				<a href='https://es-la.facebook.com/'>
					<FacebookRoundedIcon sx={{ marginRight: '5px' }} className='linkToHome' />
				</a>
				<a href='https://www.instagram.com/'>
					<InstagramIcon sx={{ marginRight: '5px' }} className='linkToHome' />
				</a>
			</Typography>
		</Box>
	);
};

export default Footer;
