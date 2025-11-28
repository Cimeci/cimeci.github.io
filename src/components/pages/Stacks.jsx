import React from 'react'
import { useTranslation } from 'react-i18next'

import "../utils/Animation.css"

import { PageTransition } from '../utils/Transition';
import { SocialCard } from './Contact';

export const Stacks = () => {
	const { t } = useTranslation()

	const LanguageCard = ({ language, icon, color = 'bg-gradient-to-br from-gray-700 to-gray-800' }) => {
		return (
			<div className={
				`flex flex-col justify-center items-center p-6 w-32 h-32 rounded-2xl gap-3
				backdrop-blur-md bg-white/10 border border-white/20
				hover:scale-110 transition-transform duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.25)]
				hover:shadow-[0_6px_25px_rgba(0,0,0,0.35)]`
			}>
				<div className="w-16 h-16 flex items-center justify-center">
					<img className="w-full h-full object-contain" src={icon} alt={language}/>
				</div>
				<span className="font-semibold text-sm text-center">{language}</span>
			</div>
		)
	}

	const base = "https://upload.wikimedia.org/wikipedia/commons/";

	const languages_web = [
		{ name: 'HTML', icon: `${base}3/38/HTML5_Badge.svg`},
		{ name: 'CSS', icon: `${base}6/62/CSS3_logo.svg`},
		{ name: 'JavaScript', icon: `${base}9/99/Unofficial_JavaScript_logo_2.svg`},
		{ name: 'TypeScript', icon: `${base}4/4c/Typescript_logo_2020.svg`},
		{ name: 'React React_Native', icon: `${base}a/a7/React-icon.svg`},
		{ name: 'TailwindCSS', icon: `${base}d/d5/Tailwind_CSS_Logo.svg`},
		{ name: 'Solidity', icon: `${base}9/98/Solidity_logo.svg`},
	]

	const languages_algorithm = [
		{ name: 'Python', icon: `${base}c/c3/Python-logo-notext.svg`},
		{ name: 'C++', icon: `${base}1/18/ISO_C%2B%2B_Logo.svg`},
		{ name: 'C', icon: `${base}1/18/C_Programming_Language.svg`},
		{ name: 'Assembly', icon: `${base}4/48/Netwide_Assembler.svg`},
	]

	const languages_data = [
		{ name: 'SQLite', icon: `${base}3/38/SQLite370.svg`},
		{ name: 'PostgreSQL', icon: `${base}2/29/Postgresql_elephant.svg`},
	]

	const dev_environment = [
		{ name: 'VsCode', icon: `${base}9/9a/Visual_Studio_Code_1.35_icon.svg`},
		{ name: 'Github', icon: `${base}9/91/Octicons-mark-github.svg`},
		{ name: 'Git', icon: `${base}e/e0/Git-logo.svg`},
		{ name: 'Linux', icon: `${base}3/35/Tux.svg`},
		{ name: 'Bash', icon: `${base}4/4b/Bash_Logo_Colored.svg`},
		{ name: 'Figma', icon: `${base}3/33/Figma-logo.svg`},
		{ name: 'Jira', icon: `${base}8/8a/Jira_Logo.svg`},

	]

	return (
		<PageTransition>
			<div className="flex flex-col justify-center items-center w-full min-h-[92.3vh] p-8 gap-20">
				<h1 className="text-2xl sm:text-4xl animate-title-reveal">{t('stack.languages_stacks')}</h1>

				<div id="web-stacks" className="flex flex-col justify-center items-center gap-10">
					<p className="text-xl animate-title-reveal">{t('stack.web')}</p>
					<div id="languages-web" className="flex flex-wrap items-center gap-6 justify-center">
						{languages_web.map((lang, index) => (
							<LanguageCard
								key={index}
								language={lang.name}
								icon={lang.icon}
								color={lang.color}
							/>
						))}
					</div>
				</div>
				<div id="stacks" className="flex flex-col justify-center items-center gap-10">
					<p className="text-xl animate-title-reveal">{t('stack.algorithm')}</p>

					<div id="languages_algorithm" className="flex flex-wrap gap-6 justify-center items-center">
						{languages_algorithm.map((lang, index) => (
							<LanguageCard
								key={index}
								language={lang.name}
								icon={lang.icon}
								color={lang.color}
							/>
						))}
					</div>
				</div>

				<div id="stacks" className="flex flex-col justify-center items-center gap-10">
					<p className="text-xl animate-title-reveal">{t('stack.data')}</p>

					<div id="languages_data" className="flex flex-wrap gap-6 justify-center items-center">
						{languages_data.map((lang, index) => (
							<LanguageCard
								key={index}
								language={lang.name}
								icon={lang.icon}
								color={lang.color}
							/>
						))}
					</div>
				</div>


				<div id="stacks" className="flex flex-col justify-center items-center gap-10">
					<p className="text-xl animate-title-reveal">{t('stack.dev_environment')}</p>

					<div id="languages_data" className="flex flex-wrap gap-6 justify-center items-center">
						{dev_environment.map((lang, index) => (
							<LanguageCard
								key={index}
								language={lang.name}
								icon={lang.icon}
								color={lang.color}
							/>
						))}
					</div>
				</div>

			</div>
			<SocialCard/>
		</PageTransition>
	)
}
