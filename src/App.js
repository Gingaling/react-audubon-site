import React from 'react';
import Birds from './Birds.js';
import BirdDetails from './BirdDetails.js';
import { Route, Routes, Link } from 'react-router-dom';

function App() {
	return (
		<>
			<header>
				<h1>
					<Link to='/'>Audubon Society</Link>
				</h1>
			</header>
			<main>
				<Routes>
					<Route path='/' element={<Birds />} />
					<Route path='details/:id' element={<BirdDetails />} /> />
				</Routes>
			</main>
		</>
	);
}

export default App;
