import React from 'react'
import { useTranslation } from 'react-i18next'
import './LanguageSwitcher.css'

export const LanguageSwitcher = () => {
	const { i18n } = useTranslation()

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng)
		localStorage.setItem('language', lng)
	}

	return (
		<div className="language-switcher">
			{i18n.language === 'en' ?
				<button
					onClick={() => changeLanguage('fr')}
				>
					<img className="lang-btn" src="https://countryflagsapi.netlify.app/flag/us.svg"></img>
				</button>
				:
				<button
					onClick={() => changeLanguage('en')}
				>
					<img className="lang-btn" src="https://countryflagsapi.netlify.app/flag/fr.svg"></img>
				</button>
			}
		</div>
	)
}

export default LanguageSwitcher
