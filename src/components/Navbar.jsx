import React, {useState, useEffect} from 'react';

import {NavLink, Link} from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import ThemeOption from './ThemeOption';
import LanguageSwitcher from './LanguageSwitcher';

import "./Navbar.css"

export const Navbar = () => {
	const { t } = useTranslation()
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
				{t('nav.home')}
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
					<NavLink to="/about">{t('nav.about')}</NavLink>
				</li>
				<li>
					<NavLink to="/stack">{t('nav.stack')}</NavLink>
				</li>
				<li>
					<NavLink to="/projects">{t('nav.projects')}</NavLink>
				</li>
				<li>
					<NavLink to="/contact">{t('nav.contact')}</NavLink>
				</li>
				<li className="theme-option-item">
					<LanguageSwitcher />
				</li>
				<li className="theme-option-item">
					<ThemeOption currentTheme={currentTheme} onToggle={toggleTheme}/>
				</li>
			</ul>
		</nav>
	);
}
