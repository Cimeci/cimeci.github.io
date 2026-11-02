import { useTranslation } from 'react-i18next';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { PixelMonogram } from '../utils/PixelMonogram';
import './Home.css';

const scrollToId = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export const Home = () => {
	const { t } = useTranslation();

	return (
		<div className="hero">
			<div className="hero-content">
				<p className="hero-kicker">{t('home.kicker')}</p>

				<h1 className="hero-name">
					Ilan <span className="hero-name-last">Nowak--Glandier</span>
				</h1>

				<p className="hero-lead">{t('home.lead')}</p>

				<div className="hero-buttons">
					<button className="hero-cta" onClick={() => scrollToId('hackathons')}>
						<span>{t('home.cta')}</span>
						<ArrowDown size={16} />
					</button>
					{/* CV hidden until it is regenerated from the site content.
					<a href="/cv.pdf" download className="hero-cta hero-cta-outline">
						<span>{t('home.cv')}</span>
						<Download size={16} />
					</a>
					*/}
					<button className="hero-link" onClick={() => scrollToId('contact')}>
						<span>{t('home.contact')}</span>
						<ArrowRight size={14} />
					</button>
				</div>
			</div>

			<div className="hero-visual">
				<PixelMonogram />
			</div>
		</div>
	);
};
