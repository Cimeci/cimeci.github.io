import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { ScrollReveal } from '../utils/ScrollReveal';
import { SectionHeader } from '../utils/SectionHeader';
import Carousel from '../utils/Carousel';
import './Hackathons.css';
import { SiLinkedin } from 'react-icons/si';

const GITHUB = 'https://github.com/Cimeci/';

const HACKATHONS = [
	{
		key: 'Mira',
		img: ['group.webp', 'project.webp'],
		video: [''],
		link: 'Mira',
		tags: ['Next.js', 'FastAPI', 'Gemini', 'Playwright'],
		track: ['Raise Hackathon', 'Google DeepMind'],
		post_url: 'https://www.linkedin.com/feed/update/urn:li:activity:7480920723566481408/',
	},
	{
		key: 'Cellule_rouge',
		img: [''],
		video: ['project.mp4'],
		poster: '/hackathons/Cellule_rouge/poster.webp',
		link: '',
		tags: ['n8n', 'SEO / GEO', 'PageSpeed', 'Gemini'],
		track: ['Neoloji Technopole', '42 Angoulême'],
		post_url: 'https://www.linkedin.com/feed/update/urn:li:activity:7515313351057534977/',
	},
];

/* =======================
   HACKATHON CARD
======================= */

function HackathonCard({ project, index }) {
	const { t } = useTranslation();

	const hasVideo = Boolean(project.video?.[0]);
	const hasImages = Boolean(project.img?.filter(Boolean).length);
	const hasMedia = hasVideo || hasImages;
	const githubUrl = GITHUB && project.link ? `${GITHUB}${project.link}` : null;
	const [expanded, setExpanded] = useState(false);
	const description = t(`hackathons.${project.key}.description`);
	const isLong = description.length > 160;
	const showText = expanded || !isLong ? description : `${description.slice(0, 160)}…`;

	return (
		<ScrollReveal delay={index * 0.1}>
			<article className="hackathon-card">
				{hasMedia && (
					<div className="hackathon-media">
						{githubUrl ? (
							<a
								className="hackathon-media-link"
								href={githubUrl}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={t('hackathons.github_aria', { name: t(`hackathons.${project.key}.title`) })}
							>
								{hasVideo ? (
									<video
										className="hackathon-media-content"
										src={`/hackathons/${project.key}/${project.video[0]}`}
										poster={project.poster}
										autoPlay
										loop
										muted
										playsInline
										preload="metadata"
										aria-label={t(`hackathons.${project.key}.title`)}
									/>
								) : (
									<Carousel
										img={project.img}
										basePath={`/hackathons/${project.key}`}
										interval={5000}
										alt={t(`hackathons.${project.key}.title`)}
										className="hackathon-carousel"
									/>
								)}

								<div className="hackathon-media-overlay">
									<ExternalLink size={20} />
								</div>
							</a>
						) : (
							<>
								{hasVideo ? (
									<video
										className="hackathon-media-content"
										src={`/hackathons/${project.key}/${project.video[0]}`}
										poster={project.poster}
										autoPlay
										loop
										muted
										playsInline
										preload="metadata"
										aria-label={t(`hackathons.${project.key}.title`)}
									/>
								) : (
									<Carousel
										img={project.img}
										basePath={`/hackathons/${project.key}`}
										interval={5000}
										alt={t(`hackathons.${project.key}.title`)}
										className="hackathon-carousel"
									/>
								)}
							</>
						)}
					</div>
				)}

				<div className="hackathon-info">
					<h3 className="hackathon-name">
						{t(`hackathons.${project.key}.title`)}
					</h3>

					<p className="hackathon-track">
						{t('hackathons.track_label')} {project.track.join(', ')}
					</p>

					<p className="hackathon-role">
						<span className="hackathon-role-label">{t('hackathons.role_label')}</span>
						{t(`hackathons.${project.key}.role`)}
					</p>

					<p className={`hackathon-description${expanded ? ' expanded' : ''}`}>
						{showText}
					</p>

					{isLong && (
						<button
							className="hackathon-see-more"
							onClick={() => setExpanded(!expanded)}
							aria-expanded={expanded}
						>
							{expanded ? t('hackathons.see_less') : t('hackathons.see_more')}
						</button>
					)}

					<div className="hackathon-tags">
						{project.tags.map((tag) => (
							<span key={tag} className="hackathon-tag">
								{tag}
							</span>
						))}
					</div>

					<a
						className="hackathon-linkedin"
						href={project.post_url}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={t('hackathons.linkedin_aria', { name: t(`hackathons.${project.key}.title`) })}
					>
						<SiLinkedin size={20} />
					</a>
				</div>
			</article>
		</ScrollReveal>
	);
}

/* =======================
   HACKATHONS PAGE
======================= */

export const Hackathons = () => {
	const { t } = useTranslation();

	return (
		<div className="py-20 sm:py-32">
			<SectionHeader id="hackathons" title={t('hackathons.title')} />

			<div className="hackathons-grid">
				{HACKATHONS.map((project, index) => (
					<HackathonCard
						key={project.key}
						project={project}
						index={index}
					/>
				))}
			</div>
		</div>
	);
};