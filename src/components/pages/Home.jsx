import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useRef, useEffect } from 'react'

import { PageTransition } from '../utils/Transition';
import "../utils/Animation.css"
import { TextScramble } from '../utils/Animation';

export const Home = () => {
	const { t } = useTranslation()
	const titleRef = useRef(null);

	useEffect(() => {
		const fx = new TextScramble(titleRef.current);
		const phrases = [
			t("home.welcome"),
			t("home.work"),
		];

		let counter = 0;

		const next = () => {
			fx.setText(phrases[counter]).then(() => {
				setTimeout(next, 7000);
			});
			counter = (counter + 1) % phrases.length;
		};

		next();
	}, [t])

	return (
		<PageTransition>
			<div className="flex flex-col justify-center items-center h-[100vh] w-full p-10 gap-30 md:gap-10">
				<NavLink to="/about" className="text-center md:text-clip">
					<h1
						ref={titleRef}
						className="font-bold tracking-wide text-[var(--primary-title-color)] select-none text-5xl sm:text-6xl lg:text-7xl
							hover:scale-110 duration-300 transition-all"
					/>
				</NavLink>
				<h2 className="text-xl sm:text-2xl lg:text-3xl animate-title-reveal animate-contact-pulse">Ilan Nowak--Glandier</h2>
			</div>
		</PageTransition>
	)
}
