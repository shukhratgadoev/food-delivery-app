import React from 'react';
import './App.css';
import { Content } from './components/Content/Content';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { HeaderBg } from './components/HeaderBg/HeaderBg';

function App() {
	return (
		<div className='App'>
			<Header />
			<HeaderBg />
			<Content />
			<Footer />
		</div>
	);
}

export default App;
