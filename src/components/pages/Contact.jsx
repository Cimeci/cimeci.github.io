import React, {useState} from 'react';
import { useTranslation } from 'react-i18next'

import { PageTransition } from '../utils/PageTransition';
import { Textarea } from 'flowbite-react';

import { Card } from "flowbite-react";
import { Github, Linkedin, Send, SendHorizonal } from 'lucide-react';

export function SocialCard() {
  return (
    <Card className="max-w-sm w-full">
      <h5 className="mb-3 text-base font-semibold text-gray-900 lg:text-xl dark:text-white">
        Mes réseaux sociaux
      </h5>
      <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
        Connecte-toi avec moi via l’une de ces plateformes.
      </p>

      <ul className="my-4 space-y-3">

        {/* GITHUB */}
        <li>
          <a
            href="https://github.com/tonGitHub"
            target="_blank"
            className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold 
                       text-gray-900 hover:bg-gray-100 hover:shadow 
                       dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
          >
			<Github/>
            <span className="ml-3 flex-1 whitespace-nowrap">GitHub</span>
          </a>
        </li>

        {/* LINKEDIN */}
        <li>
          <a
            href="https://www.linkedin.com/in/tonLinkedIn"
            target="_blank"
            className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold 
                       text-gray-900 hover:bg-gray-100 hover:shadow 
                       dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
          >
			<Linkedin/>
            <span className="ml-3 flex-1 whitespace-nowrap">LinkedIn</span>
          </a>
        </li>

      </ul>
    </Card>
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
			<div className="mt-5 flex flex-row gap-10 h-[90vh] items-center justify-center w-full">

				<div className="flex flex-col items-center justify-center gap-10">
					<h1 className="text-5xl">{t('Contact Me')}</h1>

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
								<div className="flex items-center gap-2 justify-center">
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