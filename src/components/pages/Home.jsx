import { useTranslation } from 'react-i18next';
import { useRef, useEffect } from 'react';
import { ArrowDown, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { TextScramble } from '../utils/Animation';
import './Home.css';

export const Home = () => {
	const { t } = useTranslation();
	const titleRef = useRef(null);

	useEffect(() => {
		const el = titleRef.current;
		if (!el) return;

		const fx = new TextScramble(el);
		const phrases = [t('home.welcome'), t('home.work'), t('home.identity')];
		let counter = 0;
		let timeoutId = null;
		let cancelled = false;

		const next = () => {
			if (cancelled) return;
			fx.setText(phrases[counter]).then(() => {
				if (!cancelled) timeoutId = setTimeout(next, 5000);
			});
			counter = (counter + 1) % phrases.length;
		};
		next();

		return () => {
			cancelled = true;
			if (timeoutId) clearTimeout(timeoutId);
		};
	}, [t]);

	return (
		<div className="hero">
			<motion.div
				className="hero-content"
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
			>
				<p className="hero-greeting">{t('home.studying_domain')}</p>

				<h1 className="hero-name">
					Ilan<br />
					<span className="hero-name-accent">Nowak--Glandier</span>
				</h1>

				<p ref={titleRef} className="hero-scramble" />

				<motion.div
					className="hero-buttons"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.6, duration: 0.5 }}
				>
					<button
						className="hero-cta"
						onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
					>
						<span>{t('home.cta')}</span>
						<ArrowDown size={16} />
					</button>
					<a
						href="/cv.pdf"
						download
						className="hero-cta hero-cta-outline"
					>
						<span>{t('home.cv')}</span>
						<Download size={16} />
					</a>
				</motion.div>
			</motion.div>
		</div>
	);
};
