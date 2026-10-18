import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import './ScrollToTop.css';

export const ScrollToTop = () => {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const onScroll = () => setVisible(window.scrollY > 400);
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<button
			className={`scroll-to-top ${visible ? 'scroll-to-top-visible' : ''}`}
			onClick={scrollToTop}
			aria-label="Scroll to top"
		>
			<ChevronUp size={20} />
		</button>
	);
};
