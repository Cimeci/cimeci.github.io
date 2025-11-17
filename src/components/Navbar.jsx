import React, {useState, useEffect} from 'react';

import {NavLink, Link} from 'react-router-dom'

import ThemeOption from './ThemeOption';

import "./Navbar.css"

export const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false)
	const [currentTheme, setCurrentTheme] = useState('light')

	useEffect(() => {
		const savedTheme = document.querySelector('body').getAttribute('data-theme') || 'light'
		setCurrentTheme(savedTheme)
	}, [])

	const toggleTheme = () => {
		const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
		setCurrentTheme(newTheme)
		document.querySelector('body').setAttribute('data-theme', newTheme)
	}

	return (
		<nav>
			<Link to="/" className="title">
				Home
			</Link>
			<div
				className="menu"
				onClick={() => {
					setMenuOpen(!menuOpen)
				}}
			>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<ul className={menuOpen ? "open" : ""}>
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
				<li className="theme-option-item">
					<ThemeOption currentTheme={currentTheme} onToggle={toggleTheme}/>
				</li>
			</ul>
		</nav>
	);
}
