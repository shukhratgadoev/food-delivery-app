import React from 'react';
import './style.scss';
import cellPhone001 from '../../images/cell-phone-001.svg';
import cellPhone002 from '../../images/cell-phone-002.svg';
import cellPhone003 from '../../images/cell-phone-003.svg';

import cellPhones from '../../images/cellphones.png';

export const Content: React.FC = () => {
	return (
		<div className="conteiner">
			<div className="img_wrap">
				<div className="header-bg-wrap-cellPhones">
					<img src={cellPhones} alt="Cell-Phones" />
				</div>
			</div>

			<hr />
			<div className="content">
				<h2>How the app works</h2>
				<div className="content-wrap">
					<div className="content-image">
						<img src={cellPhone001} alt="Cell Phone 001" />
					</div>
					<div className="content-text">
						<h3>Create an account</h3>
						<h5>Create/login to an existing account to get started</h5>
						<h4>
							An account is created with your email and a desired password
						</h4>
					</div>
				</div>
				<div className="content-wrap middle-block">
					<div className="content-text">
						<h3>Explore varieties</h3>
						<h5>Shop for your favorites meal as e dey hot.</h5>
						<h4>
							Shop for your favorite meals or drinks and enjoy while doing it.
						</h4>
					</div>
					<div className="content-image">
						<img src={cellPhone002} alt="Cell Phone 002" />
					</div>
				</div>
				<div className="content-wrap">
					<div className="content-image">
						<img src={cellPhone003} alt="Cell Phone 002" />
					</div>
					<div className="content-text">
						<h3>Checkout</h3>
						<h5>When you done check out and get it delivered.</h5>
						<h4>When you done check out and get it delivered with ease.</h4>
					</div>
				</div>
			</div>
		</div>
	);
};
