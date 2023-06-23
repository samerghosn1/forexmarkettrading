import React from 'react';
import logo from '../images/mainLogo.jpeg';
import Header from './Header';
import Pricing from './Pricing';
import QuoteImg from '../images/img1.jpeg';
import QuoteImg2 from '../images/img2.jpeg';
import { Typography } from '@mui/material';
import CarouselMain from './Carousel';
// import CustomizedAccordions from './Accordion';

const Main = () => {
	return (
		<div className='mainContainer'>
			<Header />

			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
					paddingBottom: 50,
				}}>
				<h1 style={{ color: 'white', textAlign: 'center', fontSize: 50 }}>
					STEP INTO A WORLD OF ENDLESS
					<span style={{ color: 'green' }}> OPPORTUNITIES</span>
				</h1>
				<h3 style={{ color: 'white', textAlign: 'center' }}>
					At OA Forex Market Trading, we are passionate about helping you unlock
					the vast potential of the global foreign exchange market. Whether
					you're a seasoned trader or just starting your journey, our
					comprehensive suite of tools, expert guidance, and unparalleled
					support are designed to empower you to thrive in the exciting world of
					Forex trading.
				</h3>
			</div>

			<div style={{ margin: '80px 0px' }}>
				<h2
					style={{
						color: 'white',
						textAlign: 'center',
						fontSize: 42,
						backgroundColor: '#363842',
						padding: 30,
					}}>
					What we offer ?
				</h2>
				<p style={{ color: 'white', textAlign: 'center', fontSize: 18 }}>
					Our dedicated team of seasoned professionals, with their deep
					knowledge and years of experience in the financial industry, will
					guide you every step of the way. We understand that success in Forex
					trading requires more than just luck; it demands a strategic approach,
					a keen understanding of market dynamics, and the right tools at your
					fingertips.What sets us apart is our unwavering commitment to your
					success. Our educational resources, including webinars, tutorials, and
					market insights, are designed to sharpen your skills and deepen your
					understanding of the Forex market.
				</p>
			</div>
			<div
				style={{
					backgroundColor: 'green',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					padding: 20,
					margin: '80px 0px',
				}}>
				<div
					style={{
						backgroundColor: 'green',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}>
					<div style={{ display: 'flex' }}>
						<img
							src={QuoteImg}
							alt='Quote 1'
							style={{ padding: 10, width: 190, borderRadius: 50 }}
						/>

						<div>
							<svg width='48' height='50' viewBox='0 0 48 36' fill='white'>
								<path
									d='M21.2673 0C7.36634 1.12892 0 12.4181 0 22.5784C0 30.23 4.15842 36 11.4059 36C16.8713 36 21.0297 31.4843 21.0297 26.4669C21.0297 17.6864 11.4059 19.4425 11.4059 13.547C11.4059 9.40767 15.6832 6.39721 21.2673 5.64459V0ZM48 0C34.2178 1.12892 26.8515 12.4181 26.8515 22.5784C26.8515 30.23 31.0099 36 38.1386 36C43.604 36 47.8812 31.4843 47.8812 26.4669C47.8812 17.6864 38.1386 19.4425 38.1386 13.547C38.1386 9.40767 42.4158 6.39721 48 5.64459V0Z'
									fill='white'></path>
							</svg>
							<p style={{ color: 'white', fontSize: 25 }}>
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								exercitation ullamco laboris nisi ut aliquip ex ea commodo
								consequat.11"
							</p>
						</div>
					</div>
				</div>
			</div>

			<div
				style={{
					justifyContent: 'center',
					display: 'flex',
					flexDirection: 'column',
					paddingTop: 30,
					margin: '80px 0px',
				}}>
				<h2
					style={{
						color: 'white',
						fontSize: 40,
						textAlign: 'center',
						backgroundColor: '#363842',
						padding: 30,
					}}>
					Plans & Pricing
				</h2>

				<Pricing />
			</div>
			<div
				style={{
					backgroundColor: 'green',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					padding: 20,
					margin: '80px 0px',
				}}>
				<div
					style={{
						backgroundColor: 'green',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}>
					<div style={{ display: 'flex' }}>
						<img
							src={QuoteImg2}
							alt='Quote 2'
							style={{ padding: 10, width: 190, borderRadius: 50 }}
						/>

						<div>
							<svg width='48' height='50' viewBox='0 0 48 36' fill='black'>
								<path
									d='M21.2673 0C7.36634 1.12892 0 12.4181 0 22.5784C0 30.23 4.15842 36 11.4059 36C16.8713 36 21.0297 31.4843 21.0297 26.4669C21.0297 17.6864 11.4059 19.4425 11.4059 13.547C11.4059 9.40767 15.6832 6.39721 21.2673 5.64459V0ZM48 0C34.2178 1.12892 26.8515 12.4181 26.8515 22.5784C26.8515 30.23 31.0099 36 38.1386 36C43.604 36 47.8812 31.4843 47.8812 26.4669C47.8812 17.6864 38.1386 19.4425 38.1386 13.547C38.1386 9.40767 42.4158 6.39721 48 5.64459V0Z'
									fill='black'></path>
							</svg>
							<p style={{ color: 'black', fontSize: 25 }}>
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								exercitation ullamco laboris nisi ut aliquip ex ea commodo
								consequat.11"
							</p>
						</div>
					</div>
				</div>
			</div>

			<div
				style={{
					justifyContent: 'center',
					display: 'flex',
					flexDirection: 'column',
					paddingTop: 30,
					margin: '80px 0px',
				}}>
				<h2
					style={{
						color: 'white',
						fontSize: 40,
						textAlign: 'center',
						backgroundColor: '#363842',
						padding: 30,
					}}>
					Take An Idea of the Course
				</h2>
				<CarouselMain />
			</div>

			<div
				style={{
					justifyContent: 'center',
					display: 'flex',
					flexDirection: 'column',
					paddingTop: 30,
					margin: '80px 0px',
				}}>
				<h2
					style={{
						color: 'white',
						fontSize: 40,
						textAlign: 'center',
						backgroundColor: '#363842',
						padding: 30,
					}}>
					Frequently Asked Questions (FAQ)
				</h2>
				{/* <CustomizedAccordions /> */}
			</div>

			<div>
				<Typography
					variant='body2'
					color='text.secondary'
					align='center'
					sx={{ mt: 5, color: 'white', fontWeight: 'bold' }}>
					&copy; {new Date().getFullYear()} OA Forex Market Trading. All rights
					reserved.
				</Typography>
				<Typography
					variant='body2'
					color='text.secondary'
					align='center'
					sx={{ mt: 5, color: 'white', fontWeight: 'bold' }}>
					Developed By Samer Ghosn Development
				</Typography>
			</div>
		</div>
	);
};

export default Main;
