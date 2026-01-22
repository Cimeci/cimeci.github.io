import {useState, useEffect} from 'react';

import {Link} from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import ThemeOption from './ThemeOption';
import LanguageSwitcher from './LanguageSwitcher';
import { PageTransition } from '../utils/Transition';

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
			<div className="absolute top-0 left-0 w-full z-[1000] navbar-container">
				<nav>
					<Link to="#" className="title" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
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
						<li className="theme-option-item">
							<LanguageSwitcher onClick={() => setMenuOpen(false)}/>
						</li>
						<li className="theme-option-item">
							<ThemeOption currentTheme={currentTheme} onToggle={toggleTheme} onClick={() => setMenuOpen(false)}/>
						</li>
					</ul>
				</nav>
			</div>
		</PageTransition>
	);
}
