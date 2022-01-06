import React from 'react';
import './Home.css';

// Imagenes
import img from '../../assets/img-presentacion.jpg';
import LogoHurley from '../../assets/brands/logo-hurley.svg';
import LogoNike from '../../assets/brands/logo-nikesb.svg';
import LogoVans from '../../assets/brands/logo-vans.svg';
import LogoWoodoo from '../../assets/brands/logo-woodoo.svg';
import LogoSantaCruz from '../../assets/brands/logo-santa-cruz.svg';
import imagenUno from '../../assets/img/imagen-uno.jpg';
import imagenDos from '../../assets/img/imagen-dos.jpg';
import imagenTres from '../../assets/img/imagen-tres.jpg';

// Components
import { Typography, Box, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<Stack className='Home'>
			<img src={img} alt='imagen presentacion' />
			<Box>
				<Typography variant='h2' align='center' sx={{ marginTop: '25px' }}>
					¿Quiénes somos?
				</Typography>
				<Typography variant='h5' align='center' sx={{ margin: '25px', paddingLeft: '20%', paddingRight: '20%' }}>
					JustStore es una tienda de ropa para un estilo de vida activo. Ofrecemos modelos exclusivos de calzado e indumentaria de marcas globales como NikeSB, Hurley & Vans. Nos dedicamos a este rubro hace mas de 7 años, brindando a nuestros clientes una gran cantidad de productos seleccionados
					para que vistas con el mejor estilo.
				</Typography>
				<Box sx={{ display: 'flex', justifyContent: 'space-evenly', flexDirection: 'row', backgroundColor: 'white', paddingTop: '72px', paddingBottom: '72px' }}>
					<Link to='/product/pantalones' className='contenedor-img'>
						<img src={LogoHurley} alt='Logo Hurley' height='55' width='100' className='img-brand' />
					</Link>
					<Link to='/product/zapatillas' className='contenedor-img'>
						<img src={LogoNike} alt='Logo NikeSB' height='55' width='75' className='img-brand' />
					</Link>
					<Link to='/product/remeras' className='contenedor-img'>
						<img src={LogoWoodoo} alt='Logo Woodoo' height='55' width='60' className='img-brand' />
					</Link>
					<Link to='/product/camperas' className='contenedor-img'>
						<img src={LogoVans} alt='Logo Vans' height='55' width='90' className='img-brand' />
					</Link>
					<Link to='/product/buzos' className='contenedor-img'>
						<img src={LogoSantaCruz} alt='Logo Santa Cruz' height='55' width='60' className='img-brand' />
					</Link>
				</Box>
				<Box sx={{ paddingTop: '100px', paddingBottom: '100px', display: 'flex', justifyContent: 'space-evenly' }}>
					<Link to='/product/zapatillas'>
						<img src={imagenUno} alt='Imagen Converse' height='540' width='360' />
					</Link>
					<Link to='/product/buzos'>
						<img src={imagenDos} alt='Imagen Thrasher' height='540' width='360' />
					</Link>
					<Link to='/product/zapatillas'>
						<img src={imagenTres} alt='Imagen NikeSB' height='540' width='360' />
					</Link>
				</Box>
			</Box>
		</Stack>
	);
};

export default Home;
