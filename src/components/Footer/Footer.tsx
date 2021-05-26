import React from 'react';
import bgFooter from '../../images/bg-footer-image.svg';
import logo from '../../images/logo.svg';
import twitter from '../../images/twitter-icon.svg';
import facebook from '../../images/facebook-icon.svg';
import instagram from '../../images/instagram-icon.svg';
import './style.scss';

export const Footer: React.FC = () => {
	return (
		<div className="conteiner">
			<div className="footer-wrap">
				<img src={bgFooter} alt="bg footer" className="footer-image" />
				<div className="footer-bg-text">
					<h2>Download the app now.</h2>
					<h4>
						Available on your favorite store. Start your premium experience now
					</h4>
				</div>
				<div className="footer-bg-buttons">
					<button>
						<a href="##">Playstore</a>
					</button>
					<button>
						<a href="##">App store</a>
					</button>
				</div>
			</div>
			<div className="footer-section">
				<img src={logo} alt="Logo" />
				<div className="social-networks">
					<a href="##">
						<img src={twitter} alt="twitter" />
					</a>
					<a href="##">
						<img src={facebook} alt="facebook" />
					</a>
					<a href="##">
						<img src={instagram} alt="instagram" />
					</a>
				</div>
				<div className="copywright">Copywright 2020 Bella Onojie.com</div>
			</div>
		</div>
	);
};
