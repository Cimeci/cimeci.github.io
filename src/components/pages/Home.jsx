import React from 'react'
import { useTranslation } from 'react-i18next'

export const Home = () => {
	const { t } = useTranslation()

	return (
		<div className="flex justify-center items-center h-[calc(100vh-68px)]">
			<h1 className="text-5xl absolute top-30 z-10">Ilan Nowak--Glandier</h1>

			<model-viewer
				src="/models/julia_fractal_-_smoothed.glb"
				alt="Modèle 3D"
				camera-controls
				auto-rotate
				shadow-intensity="1"
				style={{width: '100%', height: '100%'}}
			></model-viewer>
		</div>
	)
}
