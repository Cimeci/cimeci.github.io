import { useTranslation } from 'react-i18next';
import { ScrollReveal } from '../utils/ScrollReveal';
import { SectionHeader } from '../utils/SectionHeader';
import './Stacks.css';

/*
 * What I actually use, not everything I've touched once.
 * `daily: true` = used every week at Moncab or 42 (rendered as a filled cell).
 */
const STACKS = {
	web: [
		{ name: 'TypeScript', daily: true },
		{ name: 'Vue 3 / Nuxt', daily: true },
		{ name: 'React / Next.js', daily: true },
		{ name: 'Tailwind', daily: true },
		{ name: 'React Native / Expo' },
	],
	backend: [
		{ name: 'Supabase', daily: true },
		{ name: 'PostgreSQL', daily: true },
		{ name: 'Airtable', daily: true },
		{ name: 'Node.js' },
		{ name: 'NestJS' },
		{ name: 'Prisma' },
		{ name: 'Better Auth' },
		{ name: 'Stripe' },
	],
	ai: [
		{ name: 'n8n', daily: true },
		{ name: 'Claude Code', daily: true },
		{ name: 'OpenCode' },
		{ name: 'OpenAI API' },
		{ name: 'Ollama' },
	],
	low_level: [
		{ name: 'C' },
		{ name: 'C++' },
		{ name: 'ASM' },
		{ name: 'Python' },
		{ name: 'Docker' },
		{ name: 'Linux' },
	],
};

export const Stacks = () => {
	const { t } = useTranslation();

	return (
		<div className="py-20 sm:py-32">
			<SectionHeader id="stacks" title={t('stack.title')} lead={t('stack.lead')} />

			<dl className="stacks">
				{Object.entries(STACKS).map(([group, items], i) => (
					<ScrollReveal key={group} delay={i * 0.06}>
						<div className="stack-row">
							<dt className="stack-group">{t(`stack.${group}`)}</dt>
							<dd className="stack-items">
								{items.map(({ name, daily }) => (
									<span key={name} className={`stack-item${daily ? ' is-daily' : ''}`}>
										{name}
									</span>
								))}
							</dd>
						</div>
					</ScrollReveal>
				))}
			</dl>

			<p className="stack-legend">
				<span className="stack-legend-piece is-daily" /> {t('stack.legend_daily')}
				<span className="stack-legend-piece" /> {t('stack.legend_used')}
			</p>
		</div>
	);
};
