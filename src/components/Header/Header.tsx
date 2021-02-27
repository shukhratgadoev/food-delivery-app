import React from 'react';
import './style.css';
import logo from '../../images/logo.svg';

export const Header = () => {
	return (
		<div className='conteiner'>
			<div className='wrap'>
				<div>
					<img src={logo} alt='logo' />
				</div>
				<ul>
					<li>
						<a href='//#region'>Home</a>
					</li>
					<li>
						<a href='//#region'>Product</a>
					</li>
					<li>
						<a href='//#region'>Faq</a>
					</li>
					<li>
						<a href='//#region'>Contact</a>
					</li>
				</ul>
			</div>
		</div>
	);
};
