import React from 'react'
import { useTranslation } from 'react-i18next'

import { PageTransition } from '../utils/PageTransition';

export const Contact = () => {
	const { t } = useTranslation()
	return (
		<PageTransition>
			<form action="https://formsubmit.co/ilannowakglandierpro@gmail.com" method="POST">
			    <input className="border-2 border-[var(--primary-border-color)] rounded" type="text" name="name" required placeholder="Name"/> {/*//!i18n*/}
			    <input className="border-2 border-[var(--primary-border-color)] rounded" type="email" name="email" required placeholder="Email"/> {/*//!i18n*/}
			    <button className="border-2 border-[var(--primary-border-color)] rounded" type="submit">Send</button>
				<input type="hidden" name="_next" value="http://localhost:5173/contact"></input> {/*https://cimeci.github.io/contact*/}
			</form>
		</PageTransition>
	)
}