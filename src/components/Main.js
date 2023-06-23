import React from 'react';
import logo from '../images/mainLogo.jpeg';
import Header from './Header';
import Pricing from './Pricing';
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

			<div style={{ margin: '80px 0px', marginBottom: 130 }}>
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
				<div style={{ display: 'flex' }}>
					<svg version='1.1' width='64px' height='64px'>
						<g>
							<path
								fill='white'
								d='M 23.5,12.5 C 24.9649,13.4057 25.9649,14.739 26.5,16.5C 21.5412,19.9576 17.8746,24.4576 15.5,30C 23.366,29.417 28.0327,32.917 29.5,40.5C 28.4082,46.4264 24.9082,49.7597 19,50.5C 13.5243,49.6893 9.85765,46.6893 8,41.5C 6.04559,27.9705 11.2123,18.3038 23.5,12.5 Z'
							/>
						</g>
						<g>
							<path
								fill='white'
								d='M 49.5,12.5 C 51.1454,13.4787 52.4787,14.812 53.5,16.5C 48.7661,19.9029 45.0995,24.2362 42.5,29.5C 53.774,30.2588 57.6074,35.9254 54,46.5C 47.4062,51.8689 41.4062,51.2023 36,44.5C 32.7178,36.8778 33.3844,29.5444 38,22.5C 41.4351,18.5549 45.2685,15.2216 49.5,12.5 Z'
							/>
						</g>
					</svg>
					<p style={{ color: 'white', fontSize: 25 }}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat.
					</p>
					<svg version='1.1' width='64px' height='64px'>
						<g>
							<path
								fill='white'
								d='M 15.5,12.5 C 24.2433,13.5795 28.9099,18.5795 29.5,27.5C 28.0886,38.0811 22.5886,45.7478 13,50.5C 11.647,49.3147 10.4803,47.9814 9.5,46.5C 14.2339,43.0971 17.9005,38.7638 20.5,33.5C 9.22597,32.7412 5.39264,27.0746 9,16.5C 11.0129,14.7518 13.1795,13.4185 15.5,12.5 Z'
							/>
						</g>
						<g>
							<path
								fill='white'
								d='M 42.5,12.5 C 48.7096,12.6861 52.8763,15.6861 55,21.5C 56.995,35.1797 51.6617,44.8464 39,50.5C 38.3645,49.0337 37.5312,47.7003 36.5,46.5C 41.4588,43.0424 45.1254,38.5424 47.5,33C 39.634,33.583 34.9673,30.083 33.5,22.5C 34.5155,17.1604 37.5155,13.827 42.5,12.5 Z'
							/>
						</g>
					</svg>
				</div>
			</div>

			<div
				style={{
					justifyContent: 'center',
					display: 'flex',
					flexDirection: 'column',
					paddingTop: 30,
					margin: '80px 0px',
					marginBottom: 130,
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
				<div style={{ display: 'flex' }}>
					<svg version='1.1' width='64px' height='64px'>
						<g>
							<path
								fill='black'
								d='M 23.5,12.5 C 24.9649,13.4057 25.9649,14.739 26.5,16.5C 21.5412,19.9576 17.8746,24.4576 15.5,30C 23.366,29.417 28.0327,32.917 29.5,40.5C 28.4082,46.4264 24.9082,49.7597 19,50.5C 13.5243,49.6893 9.85765,46.6893 8,41.5C 6.04559,27.9705 11.2123,18.3038 23.5,12.5 Z'
							/>
						</g>
						<g>
							<path
								fill='black'
								d='M 49.5,12.5 C 51.1454,13.4787 52.4787,14.812 53.5,16.5C 48.7661,19.9029 45.0995,24.2362 42.5,29.5C 53.774,30.2588 57.6074,35.9254 54,46.5C 47.4062,51.8689 41.4062,51.2023 36,44.5C 32.7178,36.8778 33.3844,29.5444 38,22.5C 41.4351,18.5549 45.2685,15.2216 49.5,12.5 Z'
							/>
						</g>
					</svg>
					<p style={{ color: 'black', fontSize: 25 }}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat.
					</p>
					<svg version='1.1' width='64px' height='64px'>
						<g>
							<path
								fill='black'
								d='M 15.5,12.5 C 24.2433,13.5795 28.9099,18.5795 29.5,27.5C 28.0886,38.0811 22.5886,45.7478 13,50.5C 11.647,49.3147 10.4803,47.9814 9.5,46.5C 14.2339,43.0971 17.9005,38.7638 20.5,33.5C 9.22597,32.7412 5.39264,27.0746 9,16.5C 11.0129,14.7518 13.1795,13.4185 15.5,12.5 Z'
							/>
						</g>
						<g>
							<path
								fill='black'
								d='M 42.5,12.5 C 48.7096,12.6861 52.8763,15.6861 55,21.5C 56.995,35.1797 51.6617,44.8464 39,50.5C 38.3645,49.0337 37.5312,47.7003 36.5,46.5C 41.4588,43.0424 45.1254,38.5424 47.5,33C 39.634,33.583 34.9673,30.083 33.5,22.5C 34.5155,17.1604 37.5155,13.827 42.5,12.5 Z'
							/>
						</g>
					</svg>
				</div>
			</div>

			<div
				style={{
					justifyContent: 'center',
					display: 'flex',
					flexDirection: 'column',
					paddingTop: 30,
					margin: '40px 0px',
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
