import React from 'react'
import { useTranslation } from 'react-i18next'

import { PageTransition } from '../utils/PageTransition';

export const Stacks = () => {
	const { t } = useTranslation()

	const LanguageCard = ({ language, icon, color = 'bg-gradient-to-br from-gray-700 to-gray-800' }) => {
		return (
			<div className={` flex flex-col justify-center items-center p-7 w-32 h-32 rounded-lg gap-2 ${color} hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl`}>
				<div className="w-16 h-16 flex items-center justify-center">
					<img className="w-full h-full object-contain" src={icon} alt={language}/>
				</div>
				<span className="text-white font-semibold text-sm text-center">{language}</span>
			</div>
		)
	}

	const base = "https://upload.wikimedia.org/wikipedia/commons/";

	const languages_web = [
		{ name: 'HTML', icon: `${base}3/38/HTML5_Badge.svg`, color: 'bg-gradient-to-br from-orange-500 to-orange-700' },
		{ name: 'CSS', icon: `${base}6/62/CSS3_logo.svg`, color: 'bg-gradient-to-br from-blue-500 to-purple-600' },
		{ name: 'JavaScript', icon: `${base}9/99/Unofficial_JavaScript_logo_2.svg`, color: 'bg-gradient-to-br from-yellow-400 to-yellow-600' },
		{ name: 'TypeScript', icon: `${base}4/4c/Typescript_logo_2020.svg`, color: 'bg-gradient-to-br from-blue-400 to-blue-600' },
		{ name: 'React', icon: `${base}a/a7/React-icon.svg`, color: 'bg-gradient-to-br from-cyan-400 to-cyan-600' },
		{ name: 'TailwindCSS', icon: `${base}d/d5/Tailwind_CSS_Logo.svg`, color: 'bg-gradient-to-br from-teal-400 to-cyan-600' },
		{ name: 'Solidity', icon: `${base}9/98/Solidity_logo.svg`, color: 'bg-gradient-to-br from-gray-600 to-gray-800' },
	]

	const languages_algorithm = [
		{ name: 'Python', icon: `${base}c/c3/Python-logo-notext.svg`, color: 'bg-gradient-to-br from-blue-400 to-yellow-500' },
		{ name: 'C++', icon: `${base}1/18/ISO_C%2B%2B_Logo.svg`, color: 'bg-gradient-to-br from-blue-500 to-blue-700' },
		{ name: 'C', icon: `${base}1/18/C_Programming_Language.svg`, color: 'bg-gradient-to-br from-blue-600 to-blue-800' },
		{ name: 'Assembly', icon: `${base}4/48/Netwide_Assembler.svg`, color: 'bg-gradient-to-br from-blue-600 to-gray-800' },
	]

	const languages_data = [
		{ name: 'SQLite', icon: `${base}3/38/SQLite370.svg`, color: 'bg-gradient-to-br from-blue-200 to-blue-800' },
		{ name: 'PostgreSQL', icon: `${base}2/29/Postgresql_elephant.svg`, color: 'bg-gradient-to-br from-blue-600 to-blue-500' },
	]

	return (
		<PageTransition>
			<div className="flex flex-col justify-center items-center w-full min-h-[92.3vh] p-8 gap-20">
				<p className="text-2xl sm:text-4xl">LANGUAGES STACKS</p> {/*//!i18n*/}

				<div id="web-stacks" className="flex flex-col justify-center items-center gap-10">
					<p className="text-xl">WEB</p> {/*//!i18n*/}
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
					<p className="text-xl">ALGORITHM</p> {/*//!i18n*/}

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
					<p className="text-xl">DATA</p> {/*//!i18n*/}

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

				<div id="soft-skills" className="flex mt-12">

				</div>
			</div>
		</PageTransition>
	)
}
