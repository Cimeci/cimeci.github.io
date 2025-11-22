import React from 'react'
import { useTranslation } from 'react-i18next'
import { Carousel } from "flowbite-react";

import { PageTransition } from '../utils/PageTransition';
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';

function Description_Component({children, subject}) {
	return (
		<div className="
			flex flex-col p-5 gap-5
			bg-[var(--tertiary-background-color)
			border-[var(--primary-border-color)] border-1 rounded-xl
			h-60 sm:h-70 xl:h-85 2xl:h-100
			w-60 xs:w-100 md:w-200
		">
			<h1 className="text-[var(--primary-title-color)] lg:text-2xl md:text-xl text-lg">{subject}</h1>
			<p className="lg:text-lg md:text-md text-xs">{children}</p>
		</div>
	)
}

function Image_Component({children}) {
	return (
		<div className="
			flex p-5 
			lg:text-xl md:text-lg text-md
			bg-[var(--tertiary-background-color)
			border-[var(--primary-border-color)] border-1 rounded-xl
			h-60 sm:h-70 xl:h-85 2xl:h-100
			w-60 xs:w-100 md:w-200
		">
			{children}
		</div>
	)
}

function Projects_Component({children}) {
	return (
		<div className="flex lg:flex-row flex-col-reverse justify-center items-center gap-10 lg:gap-30 h-[90vh] w-full">
			{children}
		</div>
	)
}

function Create_Projects_Component({children, subject, img_src}) {
	return (
		<Projects_Component>
			<Description_Component subject={subject}>
				{children}
			</Description_Component>
			<Image_Component>
				<img
					className="w-full h-full object-cover rounded-lg"
					src={img_src}
				/>
			</Image_Component>
		</Projects_Component>
	)
}

function Carrousel_Projects() {
  return (
	<div className="flex lg:flex-row flex-col-reverse justify-center items-center gap-10 lg:gap-30 h-[90vh] w-full">
		<Carousel
			pauseOnHover
			slideInterval={5000}
			leftControl={<ArrowBigLeft className="hover:scale-120 transition-all duration-400" color="var(--primary-text-color)"/>} 
			rightControl={<ArrowBigRight className="hover:scale-120 transition-all duration-400" color="var(--primary-text-color)"/>}
			theme={{item: {base: 'relative overflow-y-scroll scrollbar-hide'}, scrollContainer: {base: 'overflow-hidden'}}} /*PATCH LIB @rgodet*/
		>
			<Create_Projects_Component
				img_src="/projects_visuals/minishell_visual.svg"
				subject="Minishell"
			>
				Minishell...
			</Create_Projects_Component>


			<Create_Projects_Component
				img_src=""
				subject="Ft_Transcendence"
			>
				Ft_Transcendence...
			</Create_Projects_Component>
			

			<Create_Projects_Component
				img_src=""
				subject="Tokenizer"
			>
				Tokenizer...
			</Create_Projects_Component>


			<Create_Projects_Component
				img_src=""
				subject="Tokenizer_Art"
			>
				Tokenizer_Art...
			</Create_Projects_Component>


			<Create_Projects_Component
				img_src=""
				subject="Music_Room"
			>
				Music_Room...
			</Create_Projects_Component>


			<Create_Projects_Component
				img_src=""
				subject="Ft_Linear_Regression"
			>
				Ft_Linear_Regression...
			</Create_Projects_Component>


			<Create_Projects_Component
				img_src=""
				subject="Multiplayer_Perception"
			>
				Multiplayer_Perception...
			</Create_Projects_Component>
    	</Carousel>
	</div>
  );
}


export const Projects = () => {
	const { t } = useTranslation()

	return (
		<PageTransition>
			<div className="flex justify-center items-center gap-10 w-full h-full">
				<Carrousel_Projects/>
			</div>
		</PageTransition>
	)
}