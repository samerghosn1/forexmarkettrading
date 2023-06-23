import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';

import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LogoImg from '../images/OP4.png';

const defaultTheme = createTheme();

export default function Header() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<CssBaseline />
			<AppBar
				position='static'
				elevation={0}
				color='inherit'
				sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}>
				<Toolbar sx={{ flexWrap: 'wrap', backgroundColor: 'black' }}>
					<img src={LogoImg} alt='logomain' style={{ width: '80%' }} />
					<nav>
						<Link
							variant='button'
							href='#'
							style={{
								color: 'white',
								textDecoration: 'none',
								fontWeight: 'bold',
							}}
							sx={{ my: 1, mx: 1.5 }}>
							Sevice
						</Link>
						<Link
							variant='button'
							style={{
								color: 'white',
								textDecoration: 'none',
								fontWeight: 'bold',
							}}
							href='#'
							sx={{ my: 1, mx: 1.5 }}>
							Pricing
						</Link>
						<Link
							variant='button'
							style={{
								color: 'white',
								textDecoration: 'none',
								fontWeight: 'bold',
							}}
							href='#'
							sx={{ my: 1, mx: 1.5 }}>
							Payment Info
						</Link>
						<Link
							variant='button'
							style={{
								color: 'white',
								textDecoration: 'none',
								fontWeight: 'bold',
							}}
							href='#'
							sx={{ my: 1, mx: 1.5 }}>
							Recommended Broker
						</Link>
						<Link
							variant='button'
							style={{
								color: 'white',
								textDecoration: 'none',
								fontWeight: 'bold',
							}}
							href='#'
							sx={{ my: 1, mx: 1.5 }}>
							AR
						</Link>
					</nav>
				</Toolbar>
			</AppBar>
		</ThemeProvider>
	);
}
