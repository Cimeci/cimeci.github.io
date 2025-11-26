import React, {useState} from 'react';
import { useTranslation } from 'react-i18next'

import "../utils/Animation.css"

import { PageTransition } from '../utils/Transition';
import { Textarea, FooterCopyright, FooterIcon } from 'flowbite-react';

import { SiDiscord, SiGit, SiGithub, SiGtk, SiLinkedin, SiX } from 'react-icons/si';
import { SendHorizonal } from 'lucide-react';

export function SocialCard() {
  	return (
  		<div className="w-full absolute bottom-0 p-5 sm:flex sm:items-center sm:justify-between">
          	<FooterCopyright href="#" by="Ilan Nowak--Glandier" year={2025} />
          	<div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          	  	<a href="https://discord.com/Cimeci"><SiDiscord size="1.5rem" className="animate-contact-pulse"/></a>
          	  	<a href="https://x.com/Cimeci_23"><SiX size="1.5rem" className="animate-contact-pulse"/></a>
          	  	<a href="https://github.com/Cimeci"><SiGithub size="1.5rem" className="animate-contact-pulse"/></a>
          	  	<a href="https://linkedin.com/in/ilan-nowak-glandier"><SiLinkedin size="1.5rem" className="animate-contact-pulse"/></a>
          	</div>
        </div>
  	);
}


export const Contact = () => {
	const { t } = useTranslation();
	const [loading, setLoading] = useState(false);

	const handleSubmit = () => {
		setLoading(true);
	};

	return (
		<PageTransition>
			<div className="flex flex-col h-full p-10 items-center justify-center w-full">

				<div className="flex flex-col items-center justify-center gap-10">
					<h1 className="text-5xl animate-title-reveal">{t('Contact Me')}</h1>

					<form action="https://formsubmit.co/ilannowakglandierpro@gmail.com" method="POST" className="flex flex-col gap-5 w-7/10 md:w-[40rem] text-md">

						<input
							className="w-full px-3 h-[3rem] border-2 border-[var(--primary-border-color)] rounded custom-placeholder"
							type="email"
							name="email"
							required
							placeholder={t('Your Email Adress')} //!i18n
						/>
						
						<input
							className="w-full px-3 h-[3rem] mt-5 border-2 border-[var(--primary-border-color)] rounded custom-placeholder"
							type="text"
							name="_subject"
							color="transparent"
							required
							placeholder={t('Subject')} //!i18n
						/>

						<Textarea
							className="w-full px-2  h-[20rem] border-2 border-[var(--primary-border-color)] rounded] rounded custom-placeholder text-md"
							type="text"
							name="message"
							color="transparent"
							require
							placeholder={t('Text')} //!i18n
						/>

						<button
							className="w-full mt-5 px-2 py-2 border-2 border-[var(--primary-border-color)] rounded transition-all duration-300 hover:scale-110 focus:animate-pulse"
							type="submit"
						>
							{loading ? (
								<span className="w-5 h-5 border-4 border-[var(--primary-border-color)] border-t-transparent rounded-full animate-spin"></span>
							) : (
								<div className="flex items-center gap-2 justify-center hover:animate-pulse">
									<span>{t('Send')}</span>
									<SendHorizonal size="1rem"/>
								</div>
							)}
						</button>

						{/*ADDON FORM SUBMIT*/}
						<input type="hidden" name="_next" value="http://localhost:5173/contact"/> {/*https://cimeci.github.io/contact*/}
						<textarea name="_autoresponse" style={{ display: 'none' }} defaultValue={t('contact.mail.reponse')}/>
					</form>
				</div>

				<SocialCard/>

			</div>
		</PageTransition>
	)
}