import { Dialog, Label, Pane, toaster } from 'evergreen-ui';
import React, { useState } from 'react';
import walletQR from '../images/qrcode.jpeg';
import { Typography } from '@mui/material';
import WesternUnionLogo from '../images/western-union.png';
import usdtLogo from '../images/20865360.jpg';

const PaymentDialog = ({ isShown, setIsShown }) => {
	const [westernunion, setWesternUnion] = useState(false);
	const [usdt, setUsdt] = useState(false);

	return (
		<Pane>
			<Dialog
				onConfirm={() => {
					toaster.success(
						'All set, once you make the payment please send the invoice to our Discord Account so we can verify your payment and send the invitation link in 24 to 48 hours',
						{ duration: 10 }
					);
					setIsShown(false);
					setWesternUnion(false);
					setUsdt(false);
				}}
				onCancel={() => {
					setWesternUnion(false);
					setUsdt(false);
					setIsShown(false);
				}}
				isShown={isShown}
				title='Subscription Payment'
				onCloseComplete={() => setIsShown(false)}
				confirmLabel='Done'>
				<Label>Select a Payment Method</Label>
				<div className='paymentLogosCont'>
					<button
						className='logoBackground'
						onClick={() => {
							setWesternUnion(true);
							setUsdt(false);
						}}>
						<img
							src={WesternUnionLogo}
							alt='westernunion'
							className='westernUnionImg'
						/>
					</button>
					<button
						className='logoBackground'
						onClick={() => {
							setWesternUnion(false);
							setUsdt(true);
						}}>
						<img src={usdtLogo} alt='westernunion' className='usdtImg' />
					</button>
				</div>
				{usdt === true ? (
					<div>
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
								Please make sure to send the payment invoice to our Discord
								Account: oaforexmarkettrading.Include your order details and
								transaction ID in the invoice.
							</Typography>
						</div>
					</div>
				) : null}

				{westernunion === true ? (
					<div>
						<div>
							<Label>Recipient Name:</Label>
							<Typography>Omar Ayoub</Typography>
						</div>
						<div>
							<Label>Note:</Label>
							<Typography>
								Please make sure to send the western union invoice to our
								Discord Account: oaforexmarkettrading .Include your order
								details and transaction ID in the invoice.
							</Typography>
						</div>
					</div>
				) : null}
			</Dialog>
		</Pane>
	);
};

export default PaymentDialog;
