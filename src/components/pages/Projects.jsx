import { useTranslation } from 'react-i18next';
import { ExternalLink } from 'lucide-react';
import { ScrollReveal } from '../utils/ScrollReveal';
import { SectionHeader } from '../utils/SectionHeader';
import './Projects.css';

/* =======================
   DATA
======================= */

const GITHUB = 'https://github.com/Cimeci/';

const PERSONAL_PROJECTS = [
	{
		key: 'open42',
		link: '',
		quote: 'AI as your guide, not your crutch.',
		tags: ['OpenCode', 'Agents', 'Pédagogie'],
	},
	{
		key: 'setupkit',
		link: 'https://setupkit.app',
		video: '/projects_visuals/setupkit.mp4',
		poster: '/projects_visuals/setupkit-poster.webp',
		tags: ['Next.js', 'Supabase', 'Stripe'],
	},
];

// Cursus order
const SCHOOL_PROJECTS = [
	{
		key: 'minishell',
		img: '/projects_visuals/minishell_visual.webp',
		link: 'minishell',
		tags: ['C', 'Unix', 'Processes'],
	},
	{
		key: 'irc',
		img: '/projects_visuals/Irc_visual.webp',
		link: 'ft_irc',
		tags: ['C++', 'TCP Sockets', 'IRC Protocol'],
	},
	{
		key: 'transcendence',
		img: '/projects_visuals/Transcendence_visual.webp',
		link: 'ft_transcendence',
		tags: ['WebSockets', 'Auth', 'Full-Stack'],
	},
	{
		key: 'music_room',
		img: '/projects_visuals/Music-room_visual.webp',
		link: 'https://github.com/TFHD/Music-room',
		tags: ['React Native', 'Node.js', 'Prisma'],
	},
	{
		key: 'linear_regression',
		img: '/projects_visuals/linear_regression_visual.webp',
		link: 'ft_linear_regression',
		tags: ['Python', 'Machine Learning', 'Gradient Descent'],
	},
	{
		key: 'learn2slither',
		img: '/projects_visuals/learn2slither_visual.webp',
		link: 'Learn2Slither',
		tags: ['Python', 'Q-Learning', 'Reinforcement Learning'],
	},
	{
		key: 'hypertube',
		link: 'ft_hypertube',
		tags: ['TypeScript', 'TCP', 'Streaming'],
	},
];

/* =======================
   PERSONAL PROJECT CARD
======================= */

function PersonalCard({ project, index }) {
	const { t } = useTranslation();
	const status = t(`projects.${project.key}.status`);
	const hasLink = Boolean(project.link);
	const Wrapper = hasLink ? 'a' : 'article';
	const linkProps = hasLink ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' } : {};

	// Video only plays on hover/focus: no autoplay bandwidth or motion by default
	const play = (e) => e.currentTarget.querySelector('video')?.play().catch(() => {});
	const pause = (e) => e.currentTarget.querySelector('video')?.pause();

	return (
		<ScrollReveal delay={index * 0.1}>
			<Wrapper
				{...linkProps}
				className="personal-card"
				onMouseEnter={play}
				onMouseLeave={pause}
				onFocus={play}
				onBlur={pause}
			>
				{project.video ? (
					<div className="personal-card-img-wrap">
						<video
							src={project.video}
							poster={project.poster}
							loop
							muted
							playsInline
							preload="none"
							aria-label={t(`projects.${project.key}.title`)}
						/>
					</div>
				) : project.img ? (
					<div className="personal-card-img-wrap">
						<img
							src={project.img}
							alt={t(`projects.${project.key}.title`)}
							loading="lazy"
							width="1050"
							height="600"
						/>
					</div>
				) : project.quote && (
					<blockquote className="personal-card-quote" lang="en">{project.quote}</blockquote>
				)}
				<div className="personal-card-body">
					<div className="personal-card-header">
						<h3 className="personal-card-name">{t(`projects.${project.key}.title`)}</h3>
						<span className="personal-card-status">{status}</span>
					</div>
					<p className="personal-card-desc">{t(`projects.${project.key}.description`)}</p>
					<div className="personal-card-footer">
						<div className="project-tags">
							{project.tags.map((tag) => (
								<span key={tag} className="project-tag">{tag}</span>
							))}
						</div>
						{hasLink && <ExternalLink size={16} className="personal-card-arrow" />}
					</div>
				</div>
			</Wrapper>
		</ScrollReveal>
	);
}

/* =======================
   SCHOOL PROJECT CARD
======================= */

function SchoolCard({ project, index }) {
	const { t } = useTranslation();

	const hasLink = Boolean(GITHUB && project.link);
	const Wrapper = hasLink ? 'a' : 'article';
	const linkProps = hasLink
		? { href: project.link.startsWith('http') ? project.link : `${GITHUB}${project.link}`, target: '_blank', rel: 'noopener noreferrer' }
		: {};

	return (
		<ScrollReveal delay={index * 0.1}>
			<Wrapper {...linkProps} className="project-card">
				{project.img && (
					<div className="project-img-wrap">
						<img
							src={project.img}
							alt={t(`projects.${project.key}.title`)}
							loading="lazy"
							width="1050"
							height="600"
						/>
						{hasLink && (
							<div className="project-img-overlay">
								<ExternalLink size={20} />
							</div>
						)}
					</div>
				)}
				<div className="project-info">
					<h3 className="project-name">{t(`projects.${project.key}.title`)}</h3>
					<p className="project-desc">{t(`projects.${project.key}.description`)}</p>
					<div className="project-tags">
						{project.tags.map((tag) => (
							<span key={tag} className="project-tag">{tag}</span>
						))}
					</div>
				</div>
			</Wrapper>
		</ScrollReveal>
	);
}

/* =======================
   PAGE
======================= */

export const Projects = () => {
	const { t } = useTranslation();

	return (
		<div className="py-20 sm:py-32">
			<SectionHeader id="projects" title={t('projects.title')} />

			{/* Personal Projects */}
			<ScrollReveal delay={0.15}>
				<div className="projects-category-block">
					<h3 className="projects-category">{t('projects.personal')}</h3>
					<p className="projects-category-subtitle">{t('projects.personal_subtitle')}</p>
				</div>
			</ScrollReveal>
			<div className="personal-grid">
				{PERSONAL_PROJECTS.map((p, i) => (
					<PersonalCard key={p.key} project={p} index={i} />
				))}
			</div>

			{/* 42 School Projects */}
			<ScrollReveal delay={0.1}>
				<div className="projects-category-block">
					<h3 className="projects-category projects-category-school">{t('projects.school')}</h3>
					<p className="projects-category-subtitle">{t('projects.school_subtitle')}</p>
				</div>
			</ScrollReveal>
			<div className="projects-grid">
				{SCHOOL_PROJECTS.map((p, i) => (
					<SchoolCard key={p.key} project={p} index={i} />
				))}
			</div>
		</div>
	);
};
