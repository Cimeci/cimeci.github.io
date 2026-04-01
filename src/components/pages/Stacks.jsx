import { useTranslation } from 'react-i18next';
import { ScrollReveal } from '../utils/ScrollReveal';
import './Stacks.css';

const D = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/';
const L = '/icons/';

const STACKS = {
	web: [
		{ name: 'React', icon: `${D}react/react-original.svg` },
		{ name: 'Vue.js', icon: `${D}vuejs/vuejs-original.svg` },
		{ name: 'Next.js', icon: `${D}nextjs/nextjs-original.svg` },
		{ name: 'Nuxt', icon: `${D}nuxtjs/nuxtjs-original.svg` },
		{ name: 'Tailwind', icon: `${D}tailwindcss/tailwindcss-original.svg` },
		{ name: 'Framer Motion', icon: `${L}framer.svg` },
	],
	backend: [
		{ name: 'Node.js', icon: `${D}nodejs/nodejs-original.svg` },
		{ name: 'NestJS', icon: `${D}nestjs/nestjs-original.svg` },
		{ name: 'Express', icon: `${D}express/express-original.svg` },
		{ name: 'REST API', icon: `${L}restapi.svg` },
		{ name: 'Stripe', icon: `${L}stripe.svg` },
	],
	mobile: [
		{ name: 'React Native', icon: `${D}react/react-original.svg` },
		{ name: 'Expo', icon: `${L}expo.svg` },
	],
	algorithm: [
		{ name: 'TypeScript', icon: `${D}typescript/typescript-original.svg` },
		{ name: 'JavaScript', icon: `${D}javascript/javascript-original.svg` },
		{ name: 'Python', icon: `${D}python/python-original.svg` },
		{ name: 'C++', icon: `${D}cplusplus/cplusplus-original.svg` },
		{ name: 'C', icon: `${D}c/c-original.svg` },
		{ name: 'Bash', icon: `${D}bash/bash-original.svg` },
	],
	data: [
		{ name: 'Supabase', icon: `${D}supabase/supabase-original.svg` },
		{ name: 'PostgreSQL', icon: `${D}postgresql/postgresql-original.svg` },
		{ name: 'SQLite', icon: `${D}sqlite/sqlite-original.svg` },
		{ name: 'Prisma', icon: `${D}prisma/prisma-original.svg` },
		{ name: 'Airtable', icon: `${L}airtable.svg` },
	],
	ai: [
		{ name: 'Claude Code', icon: `${L}anthropic.svg` },
		{ name: 'Ollama', icon: `${L}ollama.svg` },
		{ name: 'OpenAI', icon: `${L}openai.svg` },
	],
	dev_environment: [
		{ name: 'Git', icon: `${D}git/git-original.svg` },
		{ name: 'GitHub', icon: `${D}github/github-original.svg` },
		{ name: 'VS Code', icon: `${D}vscode/vscode-original.svg` },
		{ name: 'Docker', icon: `${D}docker/docker-original.svg` },
		{ name: 'Linux', icon: `${D}linux/linux-original.svg` },
		{ name: 'Figma', icon: `${D}figma/figma-original.svg` },
		{ name: 'Vercel', icon: `${D}vercel/vercel-original.svg` },
		{ name: 'Render', icon: `${L}render.svg` },
		{ name: 'Postman', icon: `${L}postman.svg` },
		{ name: 'n8n', icon: `${L}n8n.svg` },
		{ name: 'Mailchimp', icon: `${L}mailchimp.svg` },
	],
};

function StackItem({ name, icon }) {
	return (
		<div className="stack-item">
			<img src={icon} alt={name} loading="lazy" />
			<span>{name}</span>
		</div>
	);
}

function StackGroup({ name, items, index }) {
	const { t } = useTranslation();
	return (
		<ScrollReveal delay={index * 0.1}>
			<div className="stack-group">
				<h3 className="stack-group-title">{t(`stack.${name}`)}</h3>
				<div className="stack-items">
					{items.map((item) => (
						<StackItem key={item.name} {...item} />
					))}
				</div>
			</div>
		</ScrollReveal>
	);
}

export const Stacks = () => {
	const { t } = useTranslation();

	return (
		<div className="py-20 sm:py-32">
			<ScrollReveal>
				<p className="section-header">// {t('nav.stack')}</p>
			</ScrollReveal>
			<ScrollReveal delay={0.1}>
				<h2 className="section-title">{t('stack.title')}</h2>
			</ScrollReveal>

			<div className="stacks-container">
				{Object.entries(STACKS).map(([name, items], i) => (
					<StackGroup key={name} name={name} items={items} index={i} />
				))}
			</div>
		</div>
	);
};
