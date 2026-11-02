import { useTranslation } from 'react-i18next';
import { SECTIONS, sectionIndex } from '../../sections';
import { ScrollReveal } from './ScrollReveal';
import './SectionHeader.css';

const pad = (n) => String(n).padStart(2, '0');

/**
 * Section heading with a cell progress bar: sections already passed are
 * filled, the current one is accent, the rest are empty.
 * @param {{ id: string, title: string, lead?: string }} props
 */
export const SectionHeader = ({ id, title, lead }) => {
	const { t } = useTranslation();
	const index = sectionIndex(id);
	const section = SECTIONS[index - 1];

	return (
		<ScrollReveal>
			<header className="section-head">
				<p className="section-head-meta">
					<span className="section-head-index">
						{pad(index)}<span className="section-head-total">/{pad(SECTIONS.length)}</span>
					</span>
					<span className="section-head-bits" aria-hidden="true">
						{SECTIONS.map((s, i) => (
							<span
								key={s.id}
								className={`section-head-bit${i + 1 < index ? ' is-done' : ''}${i + 1 === index ? ' is-current' : ''}`}
							/>
						))}
					</span>
					<span className="section-head-label">{section ? t(`nav.${section.key}`) : ''}</span>
				</p>
				<h2 className="section-title">{title}</h2>
				{lead && <p className="section-lead">{lead}</p>}
			</header>
		</ScrollReveal>
	);
};
