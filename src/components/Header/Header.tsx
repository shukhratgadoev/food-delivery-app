import React from 'react';
import './style.scss';
import logo from '../../images/logo.svg';

export const Header = () => {
	return (
		<div className="conteiner">
			<div className="wrap">
				<div>
					<img src={logo} alt="logo" />
				</div>
				<ul>
					<li>
						<a href="##">Home</a>
					</li>
					<li>
						<a href="##">Product</a>
					</li>
					<li>
						<a href="##">Faq</a>
					</li>
					<li>
						<a href="##">Contact</a>
					</li>
				</ul>
			</div>
		</div>
	);
};
