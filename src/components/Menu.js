import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
	return (
		<nav className="w-full fixed z-50 bg-secondary-color border-b-2 border-accent-color flex justify-between items-center py-2">
			<div className=" text-accent-color text-lg mx-4">
				<h2>ericsandev</h2>
			</div>
			<ul className="flex m-0 px-4 text-2xl text-accent-color">
				<li className="mr-4">
					<Link to="https://www.linkedin.com/in/ericsandev/">
						<ion-icon name="logo-linkedin"></ion-icon>
					</Link>
				</li>
				<li className="mr-4">
					<Link to="https://github.com/ericsandev">
						<ion-icon name="logo-github"></ion-icon>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Menu;
