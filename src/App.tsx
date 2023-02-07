import React from 'react';
import Menu from './components/Menu';
import Main from './components/Main';
import Tail from './components/Tail';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'react-bootstrap';

function App() {
	return (
		<ThemeProvider
			breakpoints={['xxl', 'xl', 'lg', 'md', 'sm', 'xs']}
			minBreakpoint="xxl"
		>
			<div className='App'>
				<Menu/>
				<Main/>
				<Tail/>
			</div>
		</ThemeProvider>
	);
}

export default App;
