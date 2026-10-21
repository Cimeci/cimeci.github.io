import { useTranslation } from 'react-i18next';
import { ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from '../utils/ScrollReveal';
import { SectionHeader } from '../utils/SectionHeader';
import './AiHelp.css';

const CALENDLY_URL = 'https://calendly.com/ilannowakglandierpro/30min';

/* The two kinds of help offered; text lives in i18n under help.topics.<key> */
const TOPICS = ['use_ai', 'learn_with_ai'];

export const AiHelp = () => {
	const { t } = useTranslation();

	return (
		<div className="py-20 sm:py-32">
			<SectionHeader id="help" title={t('help.title')} lead={t('help.lead')} />

			<div className="help-layout">
				<ul className="help-topics">
					{TOPICS.map((key, i) => (
						<ScrollReveal key={key} delay={i * 0.08}>
							<li className="help-topic">
								<span className="help-topic-index" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
								<div>
									<h3 className="help-topic-title">{t(`help.topics.${key}.title`)}</h3>
									<p className="help-topic-desc">{t(`help.topics.${key}.description`)}</p>
								</div>
							</li>
						</ScrollReveal>
					))}
				</ul>

				<ScrollReveal delay={0.15}>
					<aside className="help-cta">
						<p className="help-cta-meta">{t('help.cta_meta')}</p>
						<p className="help-cta-text">{t('help.cta_text')}</p>
						<a className="help-cta-button" href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
							<span>{t('help.cta_button')}</span>
							<ArrowUpRight size={18} />
						</a>
					</aside>
				</ScrollReveal>
			</div>
		</div>
	);
};
