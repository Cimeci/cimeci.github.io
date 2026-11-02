import { useTranslation } from 'react-i18next';
import { ScrollReveal } from '../utils/ScrollReveal';
import { SectionHeader } from '../utils/SectionHeader';
import './About.css';

/* level: filled cells out of LANGUAGE_SCALE */
const LANGUAGE_SCALE = 4;
const LANGUAGES = [
	{ key: 'fr', level: 4 },
	{ key: 'en', level: 3 },
	{ key: 'es', level: 1 },
	{ key: 'ja', level: 1 },
];

const HOBBIES = [
	{ key: 'climbing', img: '/hobbies/Sport.webp' },
	{ key: 'music', img: '/hobbies/Music.webp' },
	{ key: 'travel', img: '/hobbies/Travel.webp' },
	{ key: 'games', img: '/hobbies/VideoGames.webp' },
];

export const About = () => {
	const { t } = useTranslation();

	return (
		<div className="py-20 sm:py-32">
			<SectionHeader id="about" title={t('about.title')} />

			<div className="about-layout">
				<ScrollReveal>
					<div className="about-intro">
						<p className="about-text about-text-lead">{t('about.intro.p1')}</p>

						<h3 className="about-languages-title">{t('about.languages.title')}</h3>
						<dl className="about-languages">
							{LANGUAGES.map(({ key, level }) => (
								<div key={key} className="about-language">
									<dt>{t(`about.languages.${key}.name`)}</dt>
									<dd>
										<span className="about-language-cells" aria-hidden="true">
											{Array.from({ length: LANGUAGE_SCALE }, (_, i) => (
												<span key={i} className={i < level ? 'is-filled' : ''} />
											))}
										</span>
										{t(`about.languages.${key}.level`)}
									</dd>
								</div>
							))}
						</dl>
					</div>
				</ScrollReveal>

				<ScrollReveal delay={0.1}>
					<ul className="about-hobbies" aria-label={t('about.hobbies.title')}>
						{HOBBIES.map((hobby) => (
							<li key={hobby.key} className="about-hobby">
								<img src={hobby.img} alt="" loading="lazy" width="240" height="240" />
								<span>{t(`about.hobbies.${hobby.key}`)}</span>
							</li>
						))}
					</ul>
				</ScrollReveal>
			</div>
		</div>
	);
};
