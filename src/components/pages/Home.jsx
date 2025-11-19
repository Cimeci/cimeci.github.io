import { ButtonCustom } from '../utils/Bouton';
import { useTranslation } from 'react-i18next'
import { useNavigate } from "react-router-dom";

export const Home = () => {
	const { t } = useTranslation()
	const navigate = useNavigate();

	return (
		<div className="flex justify-center items-center">
			<h1 className="text-3xl sm:text-5xl absolute top-30 z-10">Ilan Nowak--Glandier</h1>

			<model-viewer
				src="/models/fractal.glb"
				alt="Modèle 3D"
				// camera-controls
				auto-rotate
				rotation-per-second="23deg"
				shadow-intensity="2"
				className="absolute top-1/10"
				style={{width: '100%', height: '90%'}}
			></model-viewer>


			<div className="absolute top-1/2 flex w-max gap-4">
			  	<ButtonCustom
					color="var(--secondary-text-color)"
					onClick={() => navigate("/about")}
					size="3rem"
				>
        			{t('MORE')}
      			</ButtonCustom>
			</div>

		</div>
	)
}
