import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';

import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import logoheader from '../images/TOAR.png';

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
				<Toolbar
					sx={{ flexWrap: 'wrap', backgroundColor: 'black' }}
					className='headerCont'>
					<img src={logoheader} alt='logomain' className='headerImg' />

					<nav>
						<Link
							variant='button'
							className='headerNavLinks'
							href='https://crm.fiper.me/registration-live?ref_id=4985471'
							sx={{ my: 1, mx: 1.5 }}>
							Recommended Broker Fiper
						</Link>
						<Link
							variant='button'
							className='headerNavLinks'
							href='https://discord.com/users/Omar%20Ayoub#2471'
							sx={{ my: 1, mx: 1.5 }}>
							Contact Us
						</Link>
						<Link
							variant='button'
							className='headerNavLinks'
							href='https://oaforexmarkettrading-netlify-app.translate.goog/?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp'
							sx={{ my: 1, mx: 1.5 }}>
							AR
						</Link>
					</nav>
				</Toolbar>
			</AppBar>
		</ThemeProvider>
	);
}
