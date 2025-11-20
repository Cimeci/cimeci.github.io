import React, {useState, useEffect} from 'react';

import {NavLink, Link} from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import ThemeOption from './ThemeOption';
import LanguageSwitcher from './LanguageSwitcher';
import { PageTransition } from '../utils/PageTransition';

import "./Navbar.css"
import { Menu } from 'lucide-react';

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
		<PageTransition>
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
					<Menu size/>
				</div>
				<ul className={menuOpen ? "open" : ""}>
					<li>
						<NavLink onClick={() => setMenuOpen(false)} to="/about">{t('nav.about')}</NavLink>
					</li>
					<li>
						<NavLink onClick={() => setMenuOpen(false)} to="/stack">{t('nav.stack')}</NavLink>
					</li>
					<li>
						<NavLink onClick={() => setMenuOpen(false)} to="/projects">{t('nav.projects')}</NavLink>
					</li>
					<li>
						<NavLink onClick={() => setMenuOpen(false)} to="/contact">{t('nav.contact')}</NavLink>
					</li>
					<li className="theme-option-item">
						<LanguageSwitcher onClick={() => setMenuOpen(false)}/>
					</li>
					<li className="theme-option-item">
						<ThemeOption currentTheme={currentTheme} onToggle={toggleTheme} onClick={() => setMenuOpen(false)}/>
					</li>
				</ul>
			</nav>
		</PageTransition>
	);
}
