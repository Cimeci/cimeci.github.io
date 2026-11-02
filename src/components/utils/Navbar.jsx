import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import ThemeOption from './ThemeOption';
import LanguageSwitcher from './LanguageSwitcher';
import { SECTIONS } from '../../sections';
import './Navbar.css';

const getInitialTheme = () =>
	document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';

/** Tracks which section is currently under the navbar. */
const useActiveSection = () => {
	const [active, setActive] = useState(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries.filter((e) => e.isIntersecting);
				if (visible.length > 0) setActive(visible[0].target.id);
			},
			{ rootMargin: '-45% 0px -50% 0px' }
		);
		SECTIONS.forEach(({ id }) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});
		return () => observer.disconnect();
	}, []);

	return active;
};

export const Navbar = () => {
	const { t } = useTranslation();
	const [menuOpen, setMenuOpen] = useState(false);
	const [currentTheme, setCurrentTheme] = useState(getInitialTheme);
	const [scrolled, setScrolled] = useState(false);
	const active = useActiveSection();

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const toggleTheme = () => {
		const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
		setCurrentTheme(newTheme);
		document.documentElement.setAttribute('data-theme', newTheme);
		try {
			localStorage.setItem('theme', newTheme);
		} catch {
			// Storage unavailable (private mode): theme still applies for this visit
		}
	};

	const scrollTo = (id) => {
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
		setMenuOpen(false);
	};

	const renderLinks = (className) =>
		SECTIONS.map(({ id, key }, i) => (
			<button
				key={id}
				onClick={() => scrollTo(id)}
				className={`${className}${active === id ? ' is-active' : ''}`}
				aria-current={active === id ? 'true' : undefined}
			>
				<span className="nav-link-index">{String(i + 1).padStart(2, '0')}</span>
				{t(`nav.${key}`)}
			</button>
		));

	return (
		<nav className={`nav-bar ${scrolled ? 'nav-scrolled' : ''}`} aria-label={t('nav.label')}>
			<div className="nav-inner">
				<button
					onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
					className="nav-logo"
					aria-label={t('nav.top')}
				>
					IN<span className="nav-logo-accent" />
				</button>

				<div className="nav-links">{renderLinks('nav-link')}</div>

				<div className="nav-actions">
					<LanguageSwitcher />
					<ThemeOption currentTheme={currentTheme} onToggle={toggleTheme} />
					<button
						className="nav-menu-btn"
						onClick={() => setMenuOpen(!menuOpen)}
						aria-label={menuOpen ? t('nav.close') : t('nav.open')}
						aria-expanded={menuOpen}
					>
						{menuOpen ? <X size={20} /> : <Menu size={20} />}
					</button>
				</div>
			</div>

			{menuOpen && <div className="nav-mobile">{renderLinks('nav-mobile-link')}</div>}
		</nav>
	);
};
