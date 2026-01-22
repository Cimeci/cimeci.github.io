import {useState, useEffect} from 'react';
import { Home } from 'lucide-react';

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
	const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 600)


	useEffect(() => {
		const savedTheme = document.querySelector('body').getAttribute('data-theme') || 'light'
		setCurrentTheme(savedTheme)

		const handleResize = () => {
			setIsLargeScreen(window.innerWidth > 600)
		}
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
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
				<h1 className="title home-title-responsive" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
					{ isLargeScreen ?
						<span className="home-title-text">{t('nav.home')}</span>
						:
						<span className="home-title-icon"><Home size={28} /></span>
					}
				</h1>
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
