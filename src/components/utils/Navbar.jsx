import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import ThemeOption from './ThemeOption';
import LanguageSwitcher from './LanguageSwitcher';
import './Navbar.css';

const NAV_ITEMS = [
	{ id: 'about', key: 'about' },
	{ id: 'projects', key: 'projects' },
	{ id: 'stacks', key: 'stack' },
	{ id: 'contact', key: 'contact' },
];

export const Navbar = () => {
	const { t } = useTranslation();
	const [menuOpen, setMenuOpen] = useState(false);
	const [currentTheme, setCurrentTheme] = useState('light');
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const savedTheme = localStorage.getItem('theme') || 'light';
		setCurrentTheme(savedTheme);
		document.body.setAttribute('data-theme', savedTheme);

		const handleScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const toggleTheme = () => {
		const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
		setCurrentTheme(newTheme);
		document.body.setAttribute('data-theme', newTheme);
		localStorage.setItem('theme', newTheme);
	};

	const scrollTo = (id) => {
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
		setMenuOpen(false);
	};

	return (
		<nav className={`nav-bar ${scrolled ? 'nav-scrolled' : ''}`}>
			<div className="nav-inner">
				{/* Logo */}
				<button
					onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
					className="nav-logo"
					aria-label="Back to top"
				>
					IN<span className="nav-logo-accent">.</span>
				</button>

				{/* Desktop nav */}
				<div className="nav-links">
					{NAV_ITEMS.map(({ id, key }) => (
						<button
							key={id}
							onClick={() => scrollTo(id)}
							className="nav-link"
						>
							<span className="nav-link-prefix">//</span> {t(`nav.${key}`)}
						</button>
					))}
				</div>

				{/* Right side */}
				<div className="nav-actions">
					<LanguageSwitcher />
					<ThemeOption currentTheme={currentTheme} onToggle={toggleTheme} />
					<button
						className="nav-menu-btn"
						onClick={() => setMenuOpen(!menuOpen)}
						aria-label={menuOpen ? 'Close menu' : 'Open menu'}
						aria-expanded={menuOpen}
					>
						{menuOpen ? <X size={20} /> : <Menu size={20} />}
					</button>
				</div>
			</div>

			{/* Mobile menu */}
			{menuOpen && (
				<div className="nav-mobile">
					{NAV_ITEMS.map(({ id, key }) => (
						<button
							key={id}
							onClick={() => scrollTo(id)}
							className="nav-mobile-link"
						>
							<span className="nav-link-prefix">//</span> {t(`nav.${key}`)}
						</button>
					))}
				</div>
			)}
		</nav>
	);
};
