import { useTranslation } from 'react-i18next';
import { ExternalLink } from 'lucide-react';
import { ScrollReveal } from '../utils/ScrollReveal';
import './Projects.css';

/* =======================
   DATA
======================= */

const GITHUB = 'https://github.com/Cimeci/';

const PERSONAL_PROJECTS = [
	{
		key: 'leairn',
		link: 'https://le-a-irn-delta.vercel.app/',
		github: 'leAIrn',
		logo: '/leairn-logo.png',
		tags: ['Nuxt 3', 'Vue 3', 'TypeScript', 'Supabase', 'Groq API', 'Stripe'],
	},
	{
		key: 'nali',
		link: 'https://nali-frontend.vercel.app',
		github: 'Nali',
		logo: '/nali-logo.png',
		tags: ['Next.js', 'React 19', 'NestJS', 'Supabase', 'Stripe', 'WebRTC'],
	},
	{
		key: 'reflexion',
		link: `${GITHUB}scraping-polymarket`,
		github: 'scraping-polymarket',
		tags: ['Python', 'Ollama', 'LLM', 'FastAPI', 'Discord.py', 'SQLite'],
	},
];

const SCHOOL_PROJECTS = [
	{
		key: 'music_room',
		img: '/projects_visuals/Music-room_visual.svg',
		link: 'Music_Room',
		tags: ['React Native', 'Node.js', 'Prisma', 'Expo'],
	},
	{
		key: 'transcendence',
		img: '/projects_visuals/Transcendence_visual.svg',
		link: 'ft_transcendence',
		tags: ['Full-Stack', 'WebSockets', 'Pong', 'Auth'],
	},
	{
		key: 'irc',
		img: '/projects_visuals/Irc_visual.svg',
		link: 'ft_irc',
		tags: ['C++', 'TCP Sockets', 'IRC Protocol'],
	},
	{
		key: 'minishell',
		img: '/projects_visuals/minishell_visual.svg',
		link: 'minishell',
		tags: ['C', 'Unix', 'Shell', 'Processes'],
	},
];

/* =======================
   PERSONAL PROJECT CARD
======================= */

function PersonalCard({ project, index }) {
	const { t } = useTranslation();
	const status = t(`projects.${project.key}.status`);

	return (
		<ScrollReveal delay={index * 0.1}>
			<a
				href={project.link}
				target="_blank"
				rel="noopener noreferrer"
				className="personal-card"
			>
				<div className="personal-card-header">
					<div className="personal-card-title-row">
						{project.logo && <img src={project.logo} alt="" className="personal-card-logo" />}
						<h3 className="personal-card-name">{t(`projects.${project.key}.title`)}</h3>
					</div>
					<span className="personal-card-status">{status}</span>
				</div>
				<p className="personal-card-desc">{t(`projects.${project.key}.description`)}</p>
				<div className="personal-card-footer">
					<div className="project-tags">
						{project.tags.map((tag) => (
							<span key={tag} className="project-tag">{tag}</span>
						))}
					</div>
					<ExternalLink size={16} className="personal-card-arrow" />
				</div>
			</a>
		</ScrollReveal>
	);
}

/* =======================
   SCHOOL PROJECT CARD
======================= */

function SchoolCard({ project, index }) {
	const { t } = useTranslation();

	return (
		<ScrollReveal delay={index * 0.1}>
			<a
				href={`${GITHUB}${project.link}`}
				target="_blank"
				rel="noopener noreferrer"
				className="project-card"
			>
				{project.img && (
					<div className="project-img-wrap">
						<img
							src={project.img}
							alt={t(`projects.${project.key}.title`)}
							loading="lazy"
						/>
						<div className="project-img-overlay">
							<ExternalLink size={20} />
						</div>
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
			</a>
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
			<ScrollReveal>
				<p className="section-header">// {t('nav.projects')}</p>
			</ScrollReveal>
			<ScrollReveal delay={0.1}>
				<h2 className="section-title">{t('projects.title')}</h2>
			</ScrollReveal>

			{/* Personal Projects */}
			<ScrollReveal delay={0.15}>
				<h3 className="projects-category">{t('projects.personal')}</h3>
			</ScrollReveal>
			<div className="personal-grid">
				{PERSONAL_PROJECTS.map((p, i) => (
					<PersonalCard key={p.key} project={p} index={i} />
				))}
			</div>

			{/* 42 School Projects */}
			<ScrollReveal delay={0.1}>
				<h3 className="projects-category projects-category-school">{t('projects.school')}</h3>
			</ScrollReveal>
			<div className="projects-grid">
				{SCHOOL_PROJECTS.map((p, i) => (
					<SchoolCard key={p.key} project={p} index={i} />
				))}
			</div>
		</div>
	);
};
