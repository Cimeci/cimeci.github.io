import React from 'react'
import { useTranslation } from 'react-i18next'

export const Stacks = () => {
	const { t } = useTranslation()
	return (
		<div>{t('stack.title')}</div>
	)
}