import React from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollReveal } from '../utils/ScrollReveal';
import './About.css';

export const About = () => {
	const { t } = useTranslation();

	return (
		<div className="py-20 sm:py-32">
			<ScrollReveal>
				<p className="section-header">// {t('nav.about')}</p>
			</ScrollReveal>

			<ScrollReveal delay={0.1}>
				<h2 className="section-title">{t('about.title')} <em>{t('about.subtitle')}</em></h2>
			</ScrollReveal>

			{/* Intro */}
			<ScrollReveal delay={0.2}>
				<div className="about-intro-block">
					<p className="about-text">
						{t('about.intro.description', { highlight1: t('about.intro.highlight1') }).split(t('about.intro.highlight1')).map((part, i, arr) => (
							<React.Fragment key={i}>
								{part}
								{i < arr.length - 1 && <strong>{t('about.intro.highlight1')}</strong>}
							</React.Fragment>
						))}
					</p>
					<p className="about-text about-text-startup">
						{t('about.intro.startup', { highlight: t('about.intro.startup_highlight') }).split(t('about.intro.startup_highlight')).map((part, i, arr) => (
							<React.Fragment key={i}>
								{part}
								{i < arr.length - 1 && <strong>{t('about.intro.startup_highlight')}</strong>}
							</React.Fragment>
						))}
					</p>
				</div>
			</ScrollReveal>

			{/* Experience */}
			<ScrollReveal delay={0.15}>
				<h3 className="about-experience-title">{t('about.experience.title')}</h3>
			</ScrollReveal>
			<ScrollReveal delay={0.2}>
				<div className="about-experience-card">
					<div className="about-experience-header">
						<div>
							<h4 className="about-experience-role">{t('about.experience.moncab.role')}</h4>
							<p className="about-experience-company">{t('about.experience.moncab.company')}</p>
						</div>
						<span className="about-experience-date">{t('about.experience.moncab.date')}</span>
					</div>
					<p className="about-experience-desc">{t('about.experience.moncab.description')}</p>
					<div className="about-experience-tags">
						{['Nuxt 3', 'Vue 3', 'TypeScript', 'Supabase', 'PostgreSQL', 'Stripe', 'Tailwind', 'Claude Code', 'n8n', 'Airtable', 'Mandrill', 'Mailchimp'].map((tag) => (
							<span key={tag} className="about-experience-tag">{tag}</span>
						))}
					</div>
				</div>
			</ScrollReveal>

			{/* Certifications */}
			<ScrollReveal delay={0.15}>
				<h3 className="about-certifications-title">{t('about.certifications.title')}</h3>
			</ScrollReveal>
			<div className="about-certifications-grid">
				{[
					{ key: 'ai_fluency', issuer: 'Anthropic', date: t('about.certifications.ai_fluency.date'), id: '38v27y52fc3o' },
					{ key: 'claude_code', issuer: 'Anthropic', date: t('about.certifications.claude_code.date'), id: 'hgrf2bwk65ct' },
				].map((cert, i) => (
					<ScrollReveal key={cert.key} delay={0.1 * i}>
						<article className="about-certification-card">
							<div className="about-certification-logo">
								<img src="/icons/anthropic.svg" alt={cert.issuer} loading="lazy" />
							</div>
							<div className="about-certification-body">
								<p className="about-certification-issuer">{cert.issuer}</p>
								<h4 className="about-certification-name">{t(`about.certifications.${cert.key}.name`)}</h4>
								<p className="about-certification-meta">
									<span>{cert.date}</span>
									<span className="about-certification-sep">·</span>
									<span className="about-certification-id">ID {cert.id}</span>
								</p>
								<div className="about-certification-skills">
									{t(`about.certifications.${cert.key}.skills`, { returnObjects: true }).map((skill) => (
										<span key={skill} className="about-certification-skill">{skill}</span>
									))}
								</div>
							</div>
						</article>
					</ScrollReveal>
				))}
			</div>

			{/* Values */}
			<div className="about-grid">
				{['autonomy', 'pragmatism', 'curiosity', 'collaboration'].map((value, i) => (
					<ScrollReveal key={value} delay={0.1 * i}>
						<div className="about-card">
							<h3 className="about-card-title">{t(`about.values.${value}.title`)}</h3>
							<p className="about-card-text">{t(`about.values.${value}.description`)}</p>
						</div>
					</ScrollReveal>
				))}
			</div>

			{/* Hobbies */}
			<ScrollReveal delay={0.2}>
				<h3 className="about-hobbies-title">{t('about.hobbies.title')}</h3>
			</ScrollReveal>
			<div className="about-hobbies-row">
				{[
					{ key: 'climbing', img: '/hobbies/Sport.svg' },
					{ key: 'music', img: '/hobbies/Music.svg' },
					{ key: 'travel', img: '/hobbies/Travel.svg' },
					{ key: 'games', img: '/hobbies/VideoGames.svg' },
				].map((hobby, i) => (
					<ScrollReveal key={hobby.key} delay={0.1 * i}>
						<div className="about-hobby">
							<img src={hobby.img} alt={t(`about.hobbies.${hobby.key}`)} loading="lazy" />
							<span>{t(`about.hobbies.${hobby.key}`)}</span>
						</div>
					</ScrollReveal>
				))}
			</div>
		</div>
	);
};
