import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';

const Accordion = styled((props) => (
	<MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
	border: `1px solid ${theme.palette.divider}`,
	'&:not(:last-child)': {
		borderBottom: 0,
	},
	'&:before': {
		display: 'none',
	},
}));

const AccordionSummary = styled((props) => (
	<MuiAccordionSummary
		expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
		{...props}
	/>
))(({ theme }) => ({
	backgroundColor:
		theme.palette.mode === 'dark'
			? 'rgba(255, 255, 255, .05)'
			: 'rgba(0, 0, 0, .03)',
	flexDirection: 'row-reverse',
	'& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
		transform: 'rotate(90deg)',
	},
	'& .MuiAccordionSummary-content': {
		marginLeft: theme.spacing(1),
	},
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	padding: theme.spacing(2),
	borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
	const [expanded, setExpanded] = React.useState(false);

	const handleChange = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
	};

	return (
		<div style={{ margin: 'auto' }}>
			<Accordion
				expanded={expanded === 'panel1'}
				onChange={handleChange('panel1')}>
				<AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
					<Typography>Payment Method</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						To subscribe to our plans, please follow these steps:
						<ul>
							<li>
								Select your desired plan from the Plans and Pricing section.
							</li>
							<li>
								Make the payment in the cryptocurrency USDT (Tether) to the
								wallet address shown when joning a plan
							</li>
							<li>
								After making the payment, send the payment invoice to our
								Discord Account: Omar Ayoub#2471. (Note: Please make sure to
								include your order details and transaction ID in the invoice.)
							</li>
							<li>
								Our team will verify your payment within 24 to 48 hours. Once
								your payment is confirmed, you will receive a Discord invitation
								link.
							</li>
							<li>
								Click on the Discord invitation link to join our community and
								gain access to the subscribed services.
							</li>
						</ul>
						For those who don't have a cryptocurrency wallet, we recommend
						creating an account on Binance, a popular cryptocurrency exchange.
						Follow the instructions below to create an account and
						deposit/withdraw funds
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === 'panel2'}
				onChange={handleChange('panel2')}>
				<AccordionSummary aria-controls='panel2d-content' id='panel2d-header'>
					<Typography>Creating an Account on Binance</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						<ul>
							<li>
								Visit the Binance website at https://www.binance.com/en (for
								english) and https://www.binance.com/ar (for arabic).
							</li>
							<li>Click on the "Register" button to create a new account.</li>
							<li>
								Fill in the required information, including your email address
								and a secure password.
							</li>
							<li>Complete the verification process as prompted by Binance.</li>
							<li>
								Once your account is verified, you can proceed with depositing
								funds.
							</li>
						</ul>
						If You need more help on how to create an account please follow the
						steps in this{' '}
						<span>
							<Link href='https://www.makeuseof.com/how-to-create-an-account-on-binance/'>
								link
							</Link>
						</span>
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === 'panel3'}
				onChange={handleChange('panel3')}>
				<AccordionSummary aria-controls='panel3d-content' id='panel3d-header'>
					<Typography>Depositing and Withdrawing Funds on Binance</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						<ul>
							<li>Log in to your Binance account.</li>
							<li>
								Navigate to the "Wallet" section and select "Spot Wallet" from
								the dropdown menu.
							</li>
							<li>
								Choose the cryptocurrency USDT (Tether) from the list of
								available cryptocurrencies.
							</li>
							<li>
								Send the desired amount of USDT to the provided wallet address.
							</li>
							<li>
								Wait for the transaction to be confirmed on the blockchain.
							</li>
							<li>
								To withdraw funds, follow a similar process, but choose the
								"Withdraw" option instead of "Deposit" and provide the
								destination wallet address.
							</li>
						</ul>
						If You need more help on Deposit/withdraw please follow the steps in
						this{' '}
						<span>
							<Link href='https://www.binance.com/en/support/faq/how-do-i-deposit-withdraw-cryptocurrency-on-binance-85a1c394ac1d489fb0bfac0ef2fceafd'>
								link
							</Link>
						</span>
					</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}
