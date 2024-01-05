import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Menu from './components/Menu';
import './App.css';

function App() {
	return (
		<Router>
			<Menu />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</Router>
	);
}

export default App;
