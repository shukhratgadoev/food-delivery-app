import React from 'react';
import './style.css';
import cellPhone001 from '../../images/cell-phone-001.svg';
import cellPhone002 from '../../images/cell-phone-002.svg';
import cellPhone003 from '../../images/cell-phone-003.svg';

export const Content = () => {
	return (
		<div className='conteiner'>
			<hr />
			<div>
				<h2>How the app works</h2>
				<div className='content-wrap'>
					<div>
						<img src={cellPhone001} alt='Cell Phone 001' />
					</div>
					<div className='content-text'>
						<h3>Create an account</h3>
						<h2>Create/login to an existing account to get started</h2>
						<h4>
							An account is created with your email and a desired password
						</h4>
					</div>
				</div>
				<div className='content-wrap middle-block'>
					<div className='content-text'>
						<h3>Explore varieties</h3>
						<h2>Shop for your favorites meal as e dey hot.</h2>
						<h4>
							Shop for your favorite meals or drinks and enjoy while doing it.
						</h4>
					</div>
					<div>
						<img src={cellPhone002} alt='Cell Phone 002' />
					</div>
				</div>
				<div className='content-wrap'>
					<div>
						<img src={cellPhone003} alt='Cell Phone 002' />
					</div>
					<div className='content-text'>
						<h3>Checkout</h3>
						<h2>When you done check out and get it delivered.</h2>
						<h4>When you done check out and get it delivered with ease.</h4>
					</div>
				</div>
			</div>
		</div>
	);
};
