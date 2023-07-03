import React from 'react';
import './Main.css';
import './Custom.js';
import Templates from './components/Templates';
import Solutions from './components/Solutions';
import Agency from './components/Agency';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HireAnExpert from './components/HireAnExpert';
import "jquery-ui-dist/jquery-ui";


function App() {
  return (
	<div>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/solutions" element={<Solutions/>} />
				<Route path="/agency" element={<Agency/>} />
				<Route path="/templates" element={<Templates/>} />
				<Route path="/hireanexpert" element={<HireAnExpert/>} />
			</Routes>
		</BrowserRouter>
	</div>
  );
}

export default App;
