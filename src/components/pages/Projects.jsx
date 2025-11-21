import React from 'react'
import { useTranslation } from 'react-i18next'
import { Carousel } from "flowbite-react";

import { PageTransition } from '../utils/PageTransition';
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';

function Description_Component({children}) {
	return (
		<div className="
			flex p-8 lg:text-xl md:text-lg text-md
			bg-[var(--tertiary-background-color)
			border-[var(--primary-border-color)] border-1 rounded-xl
			h-60 sm:h-70 xl:h-85 2xl:h-100
			w-60 xs:w-100 md:w-200
		">
			{children}
		</div>
	)
}

function Image_Component({children}) {
	return (
		<div className="
			flex p-5 lg:text-xl md:text-lg text-md
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
			<Projects_Component>
				<Description_Component>
					Hello1
				</Description_Component>
				<Image_Component>
					<img
						className="w-full h-full object-cover rounded-lg"
						src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
						alt="..."
					/>
				</Image_Component>
			</Projects_Component>

			<Projects_Component>
				<Description_Component>
					Hello2
				</Description_Component>
				<Image_Component>
					<img
						className="w-full h-full object-cover rounded-lg"
						src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
						alt="..."
					/>
				</Image_Component>
			</Projects_Component>

			<Projects_Component>
				<Description_Component>
					Hello3
				</Description_Component>
				<Image_Component>
					<img 
						className="w-full h-full object-cover rounded-lg"
						src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
						alt="..."
					/>
				</Image_Component>
			</Projects_Component>

			<Projects_Component>
				<Description_Component>
					Hello4
				</Description_Component>
				<Image_Component>
					<img 
						className="w-full h-full object-cover rounded-lg"
						src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
						alt="..."
					/>
				</Image_Component>
			</Projects_Component>

			<Projects_Component>
				<Description_Component>
					Hello5
				</Description_Component>
				<Image_Component>
					<img 
						className="w-full h-full object-cover rounded-lg"
						src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
						alt="..."
					/>
				</Image_Component>
			</Projects_Component>
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