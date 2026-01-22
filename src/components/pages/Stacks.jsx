import { useTranslation } from 'react-i18next'
import "../utils/Animation.css"
import { PageTransition } from '../utils/Transition'

export const Stacks = () => {
	const { t } = useTranslation()

	/* =======================
	   CARD
	======================= */
	const LanguageCard = ({ language, icon }) => {
		return (
			<div
				className="
					group relative flex flex-col items-center justify-center
					w-32 h-32 rounded-2xl gap-3 p-5
					backdrop-blur-xl bg-white/10 border border-white/20
					shadow-[0_8px_30px_rgba(0,0,0,0.25)]
					transition-all duration-300 ease-out
					hover:-translate-y-2 hover:scale-105
					hover:shadow-[0_12px_40px_rgba(0,0,0,0.45)]
				"
			>
				{/* Glow */}
				<div
					className="
						absolute inset-0 rounded-2xl opacity-0
						bg-gradient-to-br from-indigo-500/30 via-purple-500/20 to-pink-500/30
						blur-xl transition-opacity duration-300
						group-hover:opacity-100
					"
				/>

				<div className="relative w-14 h-14 flex items-center justify-center">
					<img
						className="w-full h-full object-contain drop-shadow-md"
						src={icon}
						alt={language}
					/>
				</div>

				<span className="relative text-sm font-medium tracking-wide text-center">
					{language}
				</span>
			</div>
		)
	}

	/* =======================
	   DATA
	======================= */
	const base = "https://upload.wikimedia.org/wikipedia/commons/"

	const stack_web = [
		{ name: 'HTML', icon: `${base}3/38/HTML5_Badge.svg` },
		{ name: 'CSS', icon: `${base}6/62/CSS3_logo.svg` },
		{ name: 'JavaScript', icon: `${base}9/99/Unofficial_JavaScript_logo_2.svg` },
		{ name: 'TypeScript', icon: `${base}4/4c/Typescript_logo_2020.svg` },
		{ name: 'NodeJs', icon: `${base}7/7e/Node.js_logo_2015.svg` },
		{ name: 'React', icon: `${base}a/a7/React-icon.svg` },
		{ name: 'TailwindCSS', icon: `${base}d/d5/Tailwind_CSS_Logo.svg` },
		{ name: 'ExpressJs', icon: `${base}6/64/Expressjs.png` },
		{ name: 'VueJs', icon: `${base}9/95/Vue.js_Logo_2.svg` },
		{ name: 'NuxtJs', icon: `${base}a/ae/Nuxt_logo.svg` },
	]

	const stack_mobile = [
		{ name: 'React Native', icon: `${base}a/a7/React-icon.svg` },
		{ name: 'Expo', icon: `https://www.mdb.dev/logos/expo.svg` },
	]

	const stack_algorithm = [
		{ name: 'Python', icon: `${base}c/c3/Python-logo-notext.svg` },
		{ name: 'C++', icon: `${base}1/18/ISO_C%2B%2B_Logo.svg` },
		{ name: 'C', icon: `${base}1/18/C_Programming_Language.svg` },
		{ name: 'Assembly', icon: `${base}4/48/Netwide_Assembler.svg` },
		{ name: 'Bash', icon: `${base}4/4b/Bash_Logo_Colored.svg` },
	]

	const stack_data = [
		{ name: 'SQLite', icon: `${base}3/38/SQLite370.svg` },
		{ name: 'PostgreSQL', icon: `${base}2/29/Postgresql_elephant.svg` },
		{ name: 'Supabase', icon: `https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg` },
		{ name: 'Prisma', icon: `https://www.svgrepo.com/show/373776/light-prisma.svg` },
	]

	const dev_environment = [
		{ name: 'VsCode', icon: `${base}9/9a/Visual_Studio_Code_1.35_icon.svg` },
		{ name: 'Github', icon: `${base}9/91/Octicons-mark-github.svg` },
		{ name: 'Git', icon: `${base}e/e0/Git-logo.svg` },
		{ name: 'Linux', icon: `${base}3/35/Tux.svg` },
		{ name: 'Apple', icon: `${base}f/fa/Apple_logo_black.svg` },
		{ name: 'Figma', icon: `${base}3/33/Figma-logo.svg` },
		{ name: 'Jira', icon: `${base}8/8a/Jira_Logo.svg` },
		{ name: 'Notion', icon: `${base}e/e9/Notion-logo.svg` },
		{ name: 'Postman', icon: `${base}c/c2/Postman_%28software%29.png` },
		{ name: 'Discord', icon: `https://upload.wikimedia.org/wikipedia/fr/4/4f/Discord_Logo_sans_texte.svg` },
	]

	/* =======================
	   SECTION
	======================= */
	const StackSection = (name, items) => {
		return (
			<section className="w-full max-w-6xl flex flex-col gap-8">
				<h1 className="text-xl sm:text-2xl font-semibold tracking-wide animate-title-reveal flex justify-center">
					{t(`stack.${name}`)}
				</h1>
				<span className='bg-black/20 h-[1px] w-full block'></span>
				<div
					className="
						grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
						gap-6 place-items-center
					"
				>
					{items.map((lang, index) => (
						<LanguageCard
							key={index}
							language={lang.name}
							icon={lang.icon}
						/>
					))}
				</div>
			</section>
		)
	}

	/* =======================
	   RENDER
	======================= */
	return (
		<PageTransition>
			<div className="w-full min-h-[92.3vh] flex flex-col items-center gap-16 p-10">
				<h1 className="text-3xl sm:text-5xl font-bold animate-title-reveal">
					{t('stack.title')}
				</h1>

				{StackSection('web', stack_web)}
				{StackSection('mobile', stack_mobile)}
				{StackSection('algorithm', stack_algorithm)}
				{StackSection('data', stack_data)}
				{StackSection('dev_environment', dev_environment)}
			</div>
		</PageTransition>
	)
}