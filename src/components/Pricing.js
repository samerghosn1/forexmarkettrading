import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';

const tiers = [
	{
		title: 'Monthly',
		price: '20',
		description: [
			'DXY Analysis',
			'Cryptocurrencies',
			'News updates',
			'Content videos',
			'Gold,Crude oil Analysis',
			'Major currencies Analysis',
			'Crosses currencies Analysis',
			'Up to dates content videos',
		],
		buttonText: 'Join Now',
		buttonVariant: 'contained',
	},
	{
		title: 'Quarterly',
		subheader: 'Save 15%',
		price: '60',
		description: [
			'DXY Analysis',
			'Cryptocurrencies',
			'News updates',
			'Content videos',
			'Gold,Crude oil Analysis',
			'Major currencies Analysis',
			'Crosses currencies Analysis',
			'Up to dates content videos',
		],
		buttonText: 'Join Now',
		buttonVariant: 'outlined',
	},
];

export default function Pricing({ setIsShown }) {
	return (
		<Container maxWidth='md' component='main'>
			<Grid
				container
				spacing={5}
				style={{ paddingTop: 10, justifyContent: 'center' }}>
				{tiers.map((tier) => (
					<Grid item key={tier.title}>
						<Card>
							<CardHeader
								title={tier.title}
								subheader={tier.subheader}
								titleTypographyProps={{ align: 'center', color: 'white' }}
								subheaderTypographyProps={{
									align: 'center',
									color: 'white',
									fontSize: 14,
								}}
								sx={{
									backgroundColor: 'green',
									padding:
										tier.title === 'Quarterly'
											? '7px !important'
											: '16px !important',
								}}
							/>
							<CardContent>
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'baseline',
										mb: 2,
									}}>
									<Typography component='h2' variant='h3' color='text.primary'>
										{tier.title === 'Quarterly' ? (
											<div style={{ display: 'flex', gap: 5 }}>
												<div
													style={{
														textDecoration: 'line-through',
														opacity: 0.5,
													}}>
													${tier.price}
												</div>
												$50
											</div>
										) : (
											<div> ${tier.price}</div>
										)}
									</Typography>
									<Typography variant='h6' color='text.secondary'>
										{tier.title === 'Quarterly' ? '/3mo' : '/mo'}
									</Typography>
								</Box>
								<ul>
									{tier.description.map((line) => (
										<Typography
											component='li'
											variant='subtitle1'
											align='center'
											key={line}>
											{line}
										</Typography>
									))}
								</ul>
							</CardContent>
							<CardActions>
								<Button
									fullWidth
									variant={tier.buttonVariant}
									onClick={() => setIsShown(true)}>
									{tier.buttonText}
								</Button>
							</CardActions>
						</Card>
					</Grid>
				))}
			</Grid>
		</Container>
	);
}
