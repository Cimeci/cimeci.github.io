/**
 * Single source of truth for page order.
 * Drives the navbar and the "03/07" progress counter in each section header.
 * `key` is the i18n key under `nav.*`.
 */
export const SECTIONS = [
	{ id: 'hackathons', key: 'hackathons' },
	{ id: 'projects', key: 'projects' },
	{ id: 'talks', key: 'talks' },
	{ id: 'background', key: 'background' },
	{ id: 'stacks', key: 'stack' },
	{ id: 'about', key: 'about' },
	{ id: 'help', key: 'help' },
	{ id: 'contact', key: 'contact' },
];

/** @param {string} id @returns {number} 1-based position, 0 if unknown */
export const sectionIndex = (id) => SECTIONS.findIndex((s) => s.id === id) + 1;
