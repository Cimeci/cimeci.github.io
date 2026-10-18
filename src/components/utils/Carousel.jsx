import { useState, useEffect } from 'react';
import './Carousel.css';
export default function Carousel({
	img = [],
	basePath = '',
	interval = 5000,
	alt = 'Image',
	className = '',
}) {
	const images = img.filter(Boolean);
	const [currentIndex, setCurrentIndex] = useState(0);
	useEffect(() => {
		if (images.length <= 1 || interval <= 0) return;
		const timer = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % images.length);
		}, interval);
		return () => clearInterval(timer);
	}, [images.length, interval]);
	if (images.length === 0) return null;
	return (
		<div className={`carousel ${className}`}>
			<div
				className="carousel-track"
				style={{
					transform: `translateX(-${currentIndex * 100}%)`,
				}}
			>
				{images.map((image, index) => (
					<div className="carousel-slide" key={`${image}-${index}`}>
						<img
							src={basePath ? `${basePath}/${image}` : image}
							alt={`${alt} ${index + 1}`}
							loading={index === 0 ? 'eager' : 'lazy'}
						/>
					</div>
				))}
			</div>
			{images.length > 1 && (
				<div className="carousel-dots">
					{images.map((_, index) => (
						<button
							key={index}
							className={`carousel-dot ${
								index === currentIndex ? 'active' : ''
							}`}
							onClick={() => setCurrentIndex(index)}
							aria-label={`Afficher l'image ${index + 1}`}
							aria-current={
								index === currentIndex ? 'true' : undefined
							}
							type="button"
						/>
					))}
				</div>
			)}
		</div>
	);
}