import { useTranslation } from 'react-i18next'
import './LanguageSwitcher.css'

const LANGUAGES = [
	{ code: 'fr', label: 'FR', name: 'Français' },
	{ code: 'en', label: 'EN', name: 'English' },
]

/* Text codes, not flags: a flag is a country, not a language. */
export const LanguageSwitcher = () => {
	const { t, i18n } = useTranslation()
	const current = i18n.resolvedLanguage

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng)
		try {
			localStorage.setItem('language', lng)
		} catch {
			// Storage unavailable: choice still applies for this visit
		}
	}

	return (
		<div className="language-switcher" role="group" aria-label={t('nav.language')}>
			{LANGUAGES.map(({ code, label, name }) => (
				<button
					key={code}
					onClick={() => changeLanguage(code)}
					className={current === code ? 'is-active' : ''}
					aria-pressed={current === code}
					lang={code}
					title={name}
				>
					{label}
				</button>
			))}
		</div>
	)
}

export default LanguageSwitcher
