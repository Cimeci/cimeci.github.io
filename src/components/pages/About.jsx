import React from 'react'
import { useTranslation } from 'react-i18next'
import './About.css'
import { Github, Linkedin } from 'lucide-react'

export const About = () => {
	const { t } = useTranslation()
	return (
		<div className="about-wrapper">
			{/* Title Section with Animations */}
			<div className="about-container">
				<h1 className="split-text-container">
					<span className="text-part left">{t('about.title')}</span>
				</h1>
				<h1 className="split-text-container text-blue-300 ml-52">
					<span className="text-part right">{t('about.subtitle')}</span>
				</h1>
			</div>

			{/* Content Section */}
			<div className="about-content ml-5 mt-40">
				<section className="about-intro">
					<p>
						{t('about.intro.greeting', { name: t('about.intro.name') }).split(t('about.intro.name')).map((part, i, arr) => (
							<React.Fragment key={i}>
								{part}
								{i < arr.length - 1 && <span className="highlight">{t('about.intro.name')}</span>}
							</React.Fragment>
						))}
					</p>
					<br/>
					<p>
						{t('about.intro.description', { highlight1: t('about.intro.highlight1') }).split(t('about.intro.highlight1')).map((part, i, arr) => (
							<React.Fragment key={i}>
								{part}
								{i < arr.length - 1 && <span className="highlight">{t('about.intro.highlight1')}</span>}
							</React.Fragment>
						))}
					</p>
					<br/>
				</section>

				<section className="about-values">
					<h2>{t('about.values.title')}</h2>
					<br/>
					<div className="values-grid">
						<div className="value-card">
							<h3>{t('about.values.autonomy.title')}</h3>
							<p>{t('about.values.autonomy.description')}</p>
							<br/>
						</div>
						<div className="value-card">
							<h3>{t('about.values.pragmatism.title')}</h3>
							<p>{t('about.values.pragmatism.description')}</p>
							<br/>
						</div>
						<div className="value-card">
							<h3>{t('about.values.curiosity.title')}</h3>
							<p>{t('about.values.curiosity.description')}</p>
							<br/>
						</div>
						<div className="value-card">
							<h3>{t('about.values.collaboration.title')}</h3>
							<p>{t('about.values.collaboration.description')}</p>
							<br/>
						</div>
					</div>
				</section>

				<section className="about-skills">
					<h2>{t('about.skills.title')}</h2>
					<br/>
					<ul>
						<li><span className="emoji">💻</span> <span className="bold">{t('about.skills.web.title')}</span> — {t('about.skills.web.description')}</li>
						<li><span className="emoji">🔗</span> <span className="bold">{t('about.skills.web3.title')}</span> — {t('about.skills.web3.description')}</li>
						<li><span className="emoji">📊</span> <span className="bold">{t('about.skills.data.title')}</span> — {t('about.skills.data.description')}</li>
						<li><span className="emoji">🎨</span> <span className="bold">{t('about.skills.design.title')}</span> — {t('about.skills.design.description')}</li>
					</ul>
				</section>

				<section className="about-hobbies">
					<h2>{t('about.hobbies.title')}</h2>
					<p>
						<span className="emoji">🧗</span> {t('about.hobbies.climbing')} •
						<span className="emoji">✈️</span> {t('about.hobbies.travel')} •
						<span className="emoji">🎵</span> {t('about.hobbies.music')} •
						<span className="emoji">🎮</span> {t('about.hobbies.games')}
					</p>
				</section>

				<section className="about-cta">
					<h2>{t('about.cta.title')}</h2>
					<p>
						{t('about.cta.description', {
							highlight1: t('about.cta.highlight1'),
							highlight2: t('about.cta.highlight2')
						}).split(t('about.cta.highlight1')).map((part, i, arr) => {
							if (i < arr.length - 1) {
								const afterHighlight1 = part + '__HIGHLIGHT1__'
								return afterHighlight1.split('__HIGHLIGHT1__').map((subpart, j) => (
									<React.Fragment key={`${i}-${j}`}>
										{subpart}
										{j === 0 && <span className="highlight">{t('about.cta.highlight1')}</span>}
									</React.Fragment>
								))
							}
							return part.split(t('about.cta.highlight2')).map((subpart, j, subarr) => (
								<React.Fragment key={`${i}-${j}`}>
									{subpart}
									{j < subarr.length - 1 && <span className="highlight">{t('about.cta.highlight2')}</span>}
								</React.Fragment>
							))
						})}
					</p>
					<div className="cta-buttons">
						<a href="https://linkedin.com/in/ilan-nowak-glandier" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
							<Linkedin/>
							{/* LinkedIn */}
						</a>
						<a href="https://github.com/Cimeci" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
							<Github/>
							{/* GitHub */}
						</a>
					</div>
				</section>
			</div>
		</div>
	)
}