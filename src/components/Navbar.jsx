import React from 'react';

import {NavLink, Link} from 'react-router-dom'

import "./Navbar.css"

export const Navbar = () => {
	return (
		<nav>
		<Link to="/" className="title">
			Website
		</Link>
		<ul>
			<li>
				<NavLink to="/about">About</NavLink>
			</li>
			<li>
				<NavLink to="/stack">Stack</NavLink>
			</li>
			<li>
				<NavLink to="/projects">Projects</NavLink>
			</li>
			<li>
				<NavLink to="/contact">Contact</NavLink>
			</li>
		</ul>
	</nav>
	);
}