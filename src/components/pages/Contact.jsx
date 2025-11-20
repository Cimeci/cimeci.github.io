import React from 'react'
import { useTranslation } from 'react-i18next'

import { PageTransition } from '../utils/PageTransition';

export const Contact = () => {
	const { t } = useTranslation()
	return (
		<PageTransition>
			<div>{t('contact.title')}</div>
		</PageTransition>
	)
}