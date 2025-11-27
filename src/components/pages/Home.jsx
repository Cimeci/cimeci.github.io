import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useRef, useEffect } from 'react'

import { ButtonCustom } from '../utils/Bouton';
import { PageTransition } from '../utils/Transition';
import { SocialCard } from "./Contact";
import "../utils/Animation.css"

class TextScramble {
	constructor(el) {
		this.el = el;
		this.chars = "!<>-_\\/[]{}—=+*^?#________";
		this.update = this.update.bind(this);
	}

	setText(newText) {
		const oldText = this.el.innerText;
		const length = Math.max(oldText.length, newText.length);
		const promise = new Promise(res => (this.resolve = res));
		this.queue = [];

		for (let i = 0; i < length; i++) {
			const from = oldText[i] || "";
			const to = newText[i] || "";
			const start = Math.floor(Math.random() * 40);
			const end = start + Math.floor(Math.random() * 40);
			this.queue.push({ from, to, start, end });
		}

		cancelAnimationFrame(this.frameRequest);
		this.frame = 0;
		this.update();
		return promise;
	}

	update() {
		let output = "";
		let complete = 0;

		for (let i = 0, n = this.queue.length; i < n; i++) {
			let { from, to, start, end } = this.queue[i];
			let char;

			if (this.frame >= end) {
				complete++;
				char = to;
			} else if (this.frame >= start) {
				char = this.randomChar();
			} else {
				char = from;
			}

			output += char;
		}

		this.el.innerText = output;

		if (complete === this.queue.length) {
			this.resolve();
		} else {
			this.frameRequest = requestAnimationFrame(this.update);
			this.frame++;
		}
	}

	randomChar() {
		return this.chars[Math.floor(Math.random() * this.chars.length)];
	}
}

export const Home = () => {
	const { t } = useTranslation()
	const navigate = useNavigate();
	const titleRef = useRef(null);

	useEffect(() => {
		const fx = new TextScramble(titleRef.current);
		const phrases = [
			t("home.welcome"),
			"Ilan Nowak--Glandier",
			t("home.role")
		];

		let counter = 0;

		const next = () => {
			fx.setText(phrases[counter]).then(() => {
				setTimeout(next, 5000);
			});
			counter = (counter + 1) % phrases.length;
		};

		next();
	}, [t])

	return (
		<PageTransition>
			<div className="flex flex-col justify-center items-center h-[90vh] w-full p-10 gap-30 md:gap-10">
				<NavLink to="/about" className="text-center md:text-clip">
					<h1
						ref={titleRef}
						className="font-bold tracking-wide text-[var(--primary-title-color)] select-none text-5xl sm:text-7xl lg:text-8xl
							hover:scale-110 duration-300 transition-all"
					/>
				</NavLink>
				<h2 className="text-xl sm:text-2xl lg:text-3xl animate-title-reveal animate-contact-pulse">{t("home.internship")}</h2>
			</div>
			<SocialCard/>
		</PageTransition>
	)
}
