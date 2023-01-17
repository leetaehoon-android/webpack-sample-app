import React from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
	return (
		<nav>
			<section>
				<h1>Redux Essentials Example</h1>

				<Link to='/'>Posts</Link>
			</section>
		</nav>
	);
}
