import React from 'react';
import Header from './Header';
import Pricing from './Pricing';
import { Typography } from '@mui/material';
import CustomizedAccordions from './Accordion';
import HeaderImg from '../images/headerlogo.jpeg';
import '../styles/Main.css';
import PaymentDialog from './PaymentDialog';
import CarouselMain from './Carousel';

const Main = () => {
	const [isShown, setIsShown] = React.useState(false);
	return (
		<div className='mainContainer'>
			<Header />

			<div className='mainTitleCont'>
				<img src={HeaderImg} alt='headerImg' className='titleMainImg' />
				<h3 className='titleMainIntro'>
					OA Forex Market Trading is a service created to support every trader
					entering the market, helping them avoid useless courses offered by
					trading gurus or brokers that can lead to financial losses. We provide
					a simple and advanced way to analyze the market, minimizing losses
					while maximizing returns.
				</h3>
			</div>

			<div className='descSectionCont'>
				<h2 className='descSecTitle'>What we offer ?</h2>
				<p className='descSection'>
					This service helps everyone entering the market by providing support
					through daily analysis of forex markets. We offer clear content with
					detailed explanations of trading strategies, enabling traders to
					analyze charts in various financial markets, including major
					currencies, cross currencies, commodities, energy, indices, and
					cryptocurrencies. Our content focuses on teaching market analysis in a
					simple way, helping you minimize losses and mistakes. We provide a
					clear trading plan and numerous examples to help you properly adapt
					the system. All the analysis is provided through a Discord channel
					divided into categories, allowing traders to easily navigate and focus
					on the products they are interested in. Here's an overview of the
					categories:
					<ul>
						<li className='descSecLisCont'>
							<h4 className='descSecListTitle'>Dollar Index Analysis</h4>
							<p className='descSecListItems'>
								We analyze the Dollar Index, which is the most important
								instrument our plan is based on.
							</p>
						</li>
						<li className='descSecLisCont'>
							<h4 className='descSecListTitle'>Major Currency Analysis</h4>
							<p className='descSecListItems'>
								We provide daily analysis of the best opportunities on all major
								currencies, keeping our members updated with market movements.
							</p>
						</li>
						<li className='descSecLisCont'>
							<h4 className='descSecListTitle'>EU and GU Crosses Analysis</h4>
							<p className='descSecListItems'>
								We analyze the EU and GU crosses, providing the best markup to
								support traders in making the right decisions.
							</p>
						</li>
						<li className='descSecLisCont'>
							<h4 className='descSecListTitle'>Other Currency Analysis</h4>
							<p className='descSecListItems'>
								We also analyze other currencies excluding EUR, GBP, and USD.
							</p>
						</li>
						<li className='descSecLisCont'>
							<h4 className='descSecListTitle'>Cryptocurrency Analysis</h4>
							<p className='descSecListItems'>
								We analyze various cryptocurrencies based on member
								recommendations.
							</p>
						</li>
					</ul>
					We also share high-impact news that can affect your analysis. Our
					analysis is based on the latest data, news, and reports released in
					financial markets, providing an explanation of our vision. The Discord
					channel includes a category for members to chat and share their own
					analysis, fostering a collaborative environment where traders can help
					each other and grow together to reach a higher level of trading.
					<br />
					<br />
					<span style={{ fontWeight: 'bolder' }}>
						Note: We do not provide signals. Instead, we teach you how to find
						opportunities in the market, enabling you to become an independent
						trader who doesn't rely on signals.
					</span>
				</p>
			</div>
			<div className='addContentSecCont'>
				<h2 className='addContentSecTitle'>Additional Content</h2>
				<p className='addContentSec'>
					In addition to the features mentioned in the 'What We Offer' section,
					our services also include the following content:
					<ul>
						<li className='addSecLisCont'>
							<h4 className='addSecTitle'>
								Explanation of Our Market Analysis Process
							</h4>
							<p className='addSecListItems'>
								Step-by-step breakdown of our approach to analyzing the market.
							</p>
						</li>
						<li className='addSecLisCont'>
							<h4 className='addSecTitle'>Results Breakdown for 2023</h4>
							<p className='addSecListItems'>
								Detailed explanation of our results for 2023, including guidance
								on how to interpret them and create your own Excel sheets.
							</p>
						</li>
						<li className='addSecLisCont'>
							<h4 className='addSecTitle'>Psychology Videos</h4>
							<p className='addSecListItems'>
								Videos addressing the psychological aspects of trading, helping
								you develop the mindset required to become the best version of
								yourself as a trader.
							</p>
						</li>
					</ul>
				</p>
			</div>

			<div className='firstQouteCont'>
				<div className='quoteContent'>
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
					<p className='firstQuote'>
						The goal of a successful trader is to make the best trades, money is
						secondary.
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

			<div className='pricingCont'>
				<h2 className='pricingTitle'>Plans & Pricing</h2>

				<Pricing setIsShown={setIsShown} />
			</div>
			<div className='secondQuoteCont'>
				<div className='quoteContent'>
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
					<p className='secondQuote'>
						The typical trader is obsessed with the outcome of the trade, while
						a professional trader is focused on the process of trading and lets
						the outcomes take care of themselves.
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
					Our Recent Weekly Results
				</h2>
				<CarouselMain />
			</div>

			<div className='faqCont'>
				<h2 className='faqTitle'>Frequently Asked Questions (FAQ)</h2>
				<CustomizedAccordions />
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
					Developed By SG Development
				</Typography>
			</div>
			<PaymentDialog isShown={isShown} setIsShown={setIsShown} />
		</div>
	);
};

export default Main;
