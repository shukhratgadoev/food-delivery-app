import React from 'react';
import bgFooter from '../../images/bg-footer-image.svg';
import logo from '../../images/logo.svg';
import twitter from '../../images/twitter-icon.svg';
import facebook from '../../images/facebook-icon.svg';
import instagram from '../../images/instagram-icon.svg';
import './style.css';

export const Footer = () => {
	return (
		<div>
			<div className='conteiner'>
				<div className='footer-wrap'>
					<img src={bgFooter} alt='bg footer' />
					<div className='footer-bg-text'>
						<h2>Download the app now.</h2>
						<h4>
							Available on your favorite store. Start your premium experience
							now
						</h4>
					</div>
					<div className='footer-bg-buttons'>
						<button>
							<a href='//#region'>Playstore</a>
						</button>
						<button>
							<a href='//#region'>App store</a>
						</button>
					</div>
				</div>
				<div className='footer-section'>
					<img src={logo} alt='Logo' />
					<div className='social-networks'>
						<a href='//#region '>
							<img src={twitter} alt='twitter' />
						</a>
						<a href='//#region '>
							<img src={facebook} alt='facebook' />
						</a>
						<a href='//#region '>
							<img src={instagram} alt='instagram' />
						</a>
					</div>
					<div className='copywright'>Copywright 2020 Bella Onojie.com</div>
				</div>
			</div>
		</div>
	);
};
