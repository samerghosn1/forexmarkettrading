import { Dialog, Label, Pane, toaster } from 'evergreen-ui';
import React from 'react';
import walletQR from '../images/qrcode.jpeg';
import { Typography } from '@mui/material';

const PaymentDialog = ({ isShown, setIsShown }) => {
	return (
		<Pane>
			<Dialog
				onConfirm={() => {
					toaster.success(
						'Thank you for subscribing, Please send the invoice to our Discord Account and we will verify your payment in 24 to 48 hours',
						{ duration: 10 }
					);
					setIsShown(false);
				}}
				isShown={isShown}
				title='Subscription Payment'
				onCloseComplete={() => setIsShown(false)}
				confirmLabel='Done'>
				<div className='QRCodeCont'>
					<img src={walletQR} alt='qrcode' />
				</div>
				<div style={{ marginTop: 10 }}>
					<Label>Wallet ID</Label>
					<Typography>TV7ZLHL47q4t88EVyhKF5Hfs5Ca2vLavFU</Typography>
				</div>
				<div style={{ marginTop: 10 }}>
					<Label>Network</Label>
					<Typography>Tron (TRC20)</Typography>
				</div>
				<div>
					<Label>Note:</Label>
					<Typography>
						Please make sure to send the payment invoice to our Discord Account:
						Omar Ayoub#2471.Include your order details and transaction ID in the
						invoice.
					</Typography>
				</div>
			</Dialog>
		</Pane>
	);
};

export default PaymentDialog;
