import { useTranslation } from 'react-i18next'
import { Carousel } from "flowbite-react"
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react'
import { PageTransition } from '../utils/Transition'

/* =======================
   BASE CARDS
======================= */

function Description({ subject, children }) {
	return (
		<div
			className="
				flex flex-col gap-4 p-6
				backdrop-blur-xl bg-white/10
				border border-white/20 rounded-2xl
				shadow-[0_10px_35px_rgba(0,0,0,0.25)]
				h-full
			"
		>
			<h2 className="text-xl sm:text-2xl font-semibold tracking-wide">
				{subject}
			</h2>
			<p className="text-sm sm:text-base leading-relaxed opacity-90">
				{children}
			</p>
		</div>
	)
}

function Image({ src }) {
	return (
		<div
			className="
				group relative overflow-hidden rounded-2xl
				backdrop-blur-xl bg-white/10
				border border-white/20
				shadow-[0_10px_35px_rgba(0,0,0,0.25)]
				h-full
			"
		>
			<img

				src={src}
				alt=""
				className="
					w-full h-full object-cover
					transition-transform duration-500
					group-hover:scale-110
				"
			/>
			<div
				className="
					absolute inset-0
					bg-gradient-to-t from-black/50 to-transparent
				"
			/>
		</div>
	)
}

/* =======================
   PROJECT SLIDE
======================= */

function ProjectSlide({ title, description, img, link }) {
	return (
		<div
			className="
				w-full h-[85vh]
				flex flex-col-reverse lg:flex-row
				items-center justify-center
				gap-10 px-6
			"
		>
			<div className="w-full lg:w-1/2 h-[45%] lg:h-[60%]">
				<Description subject={title}>
					{description}
				</Description>
			</div>

			<div className="w-full lg:w-1/2 h-[45%] lg:h-[60%]">
				<a href={link}>
					<Image src={img} />
				</a>
			</div>
		</div>
	)
}

/* =======================
   CAROUSEL
======================= */

const github_base_link = "https://github.com/Cimeci/";

function ProjectsCarousel() {
	const { t } = useTranslation()

	return (
		<Carousel
			pauseOnHover
			slideInterval={6000}
			leftControl={
				<ArrowBigLeft
					className="hover:scale-125 transition-transform"
				/>
			}
			rightControl={
				<ArrowBigRight
					className="hover:scale-125 transition-transform"
				/>
			}
			theme={{
				item: {
					base: 'relative overflow-hidden'
				}
			}}
		>
			<ProjectSlide
				img="/projects_visuals/Minishell_visual.svg"
				title={t('projects.minishell.title')}
				description={t('projects.minishell.description')}
				link={`${github_base_link}minishell`}
			/>
			<ProjectSlide
				img="/projects_visuals/Irc_visual.svg"
				title={t('projects.irc.title')}
				description={t('projects.irc.description')}
				link={`${github_base_link}ft_irc`}
			/>
			<ProjectSlide
				img="/projects_visuals/Transcendence_visual.svg"
				title={t('projects.transcendence.title')}
				description={t('projects.transcendence.description')}
				link={`${github_base_link}ft_transcendence`}
			/>

			<ProjectSlide
				img="/projects_visuals/Music-room_visual.svg"
				title={t('projects.music_room.title')}
				description={t('projects.music_room.description')}
				link={`${github_base_link}Music_Room`}
			/>

			{/* <ProjectSlide
				img="/projects_visuals/In_progress.jpg"
				title={t('projects.matcha.title')}
				description={t('projects.matcha.description')}
				link={`${github_base_link}Matcha`}
			/>

			<ProjectSlide
				img="/projects_visuals/In_progress.jpg"
				title={t('projects.tokenizer.title')}
				description={t('projects.tokenizer.description')}
				link={`${github_base_link}Tokenizer`}
			/>

			<ProjectSlide
				img="/projects_visuals/In_progress.jpg"
				title={t('projects.linear_regression.title')}
				description={t('projects.linear_regression.description')}
				link={`${github_base_link}Linear_Regression`}
			/> */}
		</Carousel>
	)
}

/* =======================
   PAGE
======================= */

export const Projects = () => {
	return (
		<PageTransition>
			<div className="w-full min-h-screen flex items-center justify-center">
				<ProjectsCarousel />
			</div>
		</PageTransition>
	)
}