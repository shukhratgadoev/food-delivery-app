import React from 'react';
import headBg from '../../images/bg-image.svg';
import cellPhones from '../../images/сell-phones.svg';
import './style.css';

export const HeaderBg = () => {
	return (
		<div className='conteiner'>
			<div className='header-bg-wrap'>
				<img src={headBg} alt='headBg' />
				<div className='header-bg-text'>
					<span>Food app</span>
					<h1>Why stay hungry when you can order form Bella Onojie</h1>
					<h4>Download the bella onoje’s food app now on</h4>
				</div>
				<div className='header-bg-buttons'>
					<button>
						<a href='//#region'>Playstore</a>
					</button>
					<button>
						<a href='//#region'>App store</a>
					</button>
				</div>

				<div className='header-bg-wrap-cellPhones'>
					<img src={cellPhones} alt='Cell-Phones' />
				</div>
			</div>
		</div>
	);
};
