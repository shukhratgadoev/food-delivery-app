import React from 'react';
import headBg from '../../images/bg-image.svg';
import './style.scss';

export const HeaderBg: React.FC = () => {
	return (
		<div className="conteiner">
			<div className="header-bg-wrap">
				<img src={headBg} alt="headBg" />
				<div className="header-bg-wrap-inner">
					<div className="header-bg-text">
						<span>Food app</span>
						<h1>
							Why stay hungry when <br /> you can order form Bella Onojie
						</h1>
						<h4>Download the bella onoje’s food app now on</h4>
					</div>
					<div className="header-bg-buttons">
						<button>
							<a href="##">Playstore</a>
						</button>

						<button>
							<a href="##">App store</a>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
