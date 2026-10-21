import { useTranslation } from 'react-i18next';
import { ScrollReveal } from '../utils/ScrollReveal';
import { SectionHeader } from '../utils/SectionHeader';
import './Talks.css';

/* Cycle given at 42 Angoulême, June 2026. Text lives in i18n under talks.items.<key>. */
const TALKS = [
	{ key: 'debate', date: '2026-06-04' },
	{ key: 'learn_with_ai', date: '2026-06-09' },
	{ key: 'code_with_ai', date: '2026-06-11' },
	{ key: 'full_setup', date: '2026-06-23' },
];

export const Talks = () => {
	const { t, i18n } = useTranslation();
	const formatDate = (iso) =>
		new Intl.DateTimeFormat(i18n.language, { day: '2-digit', month: 'short' }).format(new Date(iso));

	return (
		<div className="py-20 sm:py-32">
			<SectionHeader id="talks" title={t('talks.title')} lead={t('talks.lead')} />

			<ol className="talks">
				{TALKS.map((talk, i) => (
					<ScrollReveal key={talk.key} delay={i * 0.08}>
						<li className="talk">
							<time className="talk-date" dateTime={talk.date}>{formatDate(talk.date)}</time>
							<div className="talk-body">
								<h3 className="talk-title">{t(`talks.items.${talk.key}.title`)}</h3>
								<p className="talk-desc">{t(`talks.items.${talk.key}.description`)}</p>
							</div>
							<span className="talk-index" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
						</li>
					</ScrollReveal>
				))}
			</ol>
		</div>
	);
};
