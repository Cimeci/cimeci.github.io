import { useTranslation } from 'react-i18next';
import { ScrollReveal } from '../utils/ScrollReveal';
import { SectionHeader } from '../utils/SectionHeader';
import './Background.css';

/* =======================
   DATA
======================= */

const BACKGROUND = [
	{
		key: 'school42',
		kind: 'education',
		url: 'https://42angouleme.fr',
		roles: [
			{ key: 'school42', tags: ['C', 'C++', 'Python', 'TypeScript'] },
			{ key: 'school42_volunteer', tags: [] },
		],
	},
	{
		key: 'moncab',
		kind: 'work',
		url: 'https://cabinetmoncab.fr',
		roles: [
			{ key: 'moncab_internship', tags: ['Nuxt 3', 'Vue 3', 'TypeScript', 'Supabase', 'PostgreSQL', 'Stripe', 'Pennylane', 'Tailwind', 'n8n'] },
			{ key: 'moncab_apprentice', tags: ['n8n', 'Supabase', 'Airtable', 'LLM', 'Mandrill', 'Mailchimp'] },
		],
	},
];

const CERTIFICATIONS = [
	{ key: 'claude_code', issuer: 'Anthropic', id: 'hgrf2bwk65ct', logo: 'anthropic.svg', invert: true },
	{ key: 'ai_fluency', issuer: 'Anthropic', id: '38v27y52fc3o', logo: 'anthropic.svg', invert: true },
	{ key: 'ai_skills_badge', issuer: 'Microsoft', id: 'DF46oso1', logo: 'microsoft.svg', invert: false },
];

/* =======================
   BLOCKS
======================= */

function Role({ roleKey, tags }) {
	const { t } = useTranslation();
	return (
		<div className="bg-role">
			<div className="bg-role-meta">
				<h4 className="bg-role-title">{t(`about.experience.${roleKey}.role`)}</h4>
				<span className="bg-role-date">{t(`about.experience.${roleKey}.date`)}</span>
			</div>
			<div>
				<p className="bg-role-desc">{t(`about.experience.${roleKey}.description`)}</p>
				{tags.length > 0 && (
					<div className="bg-tags">
						{tags.map((tag) => (
							<span key={tag} className="bg-tag">{tag}</span>
						))}
					</div>
				)}
			</div>
		</div>
	);
}

function Organisation({ org }) {
	const { t } = useTranslation();
	return (
		<article className="bg-org">
			<header className="bg-org-header">
				<h3>
					<a className="bg-org-name" href={org.url} target="_blank" rel="noopener noreferrer">
						{t(`about.experience.${org.key}.company`)}
					</a>
				</h3>
				<span className={`bg-org-kind bg-org-kind-${org.kind}`}>
					{t(`about.experience.kind.${org.kind}`)}
				</span>
			</header>
			{org.roles.map(({ key, tags }) => (
				<Role key={key} roleKey={key} tags={tags} />
			))}
		</article>
	);
}

/* =======================
   SECTION
======================= */

export const Background = () => {
	const { t } = useTranslation();

	return (
		<div className="py-20 sm:py-32">
			<SectionHeader id="background" title={t('about.experience.title')} />

			<div className="bg-org-list">
				{BACKGROUND.map((org, i) => (
					<ScrollReveal key={org.key} delay={i * 0.1}>
						<Organisation org={org} />
					</ScrollReveal>
				))}
			</div>

			<ScrollReveal>
				<h3 className="bg-certs-title">{t('about.certifications.title')}</h3>
				<ul className="bg-certs">
					{CERTIFICATIONS.map((cert) => (
						<li key={cert.key} className="bg-cert">
							<img
								className="bg-cert-logo"
								src={`/icons/${cert.logo}`}
								alt=""
								loading="lazy"
								width="22"
								height="22"
								data-invert={cert.invert || undefined}
							/>
							<p className="bg-cert-name">
								{t(`about.certifications.${cert.key}.name`)}
								<span className="bg-cert-issuer">{cert.issuer}</span>
							</p>
							<p className="bg-cert-skills">
								{t(`about.certifications.${cert.key}.skills`, { returnObjects: true }).join(' · ')}
							</p>
							<p className="bg-cert-meta">
								{t(`about.certifications.${cert.key}.date`)} · ID {cert.id}
							</p>
						</li>
					))}
				</ul>
			</ScrollReveal>
		</div>
	);
};
