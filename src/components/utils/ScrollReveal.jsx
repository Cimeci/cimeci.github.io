import { useEffect, useRef, useState } from 'react';
import './ScrollReveal.css';

/**
 * Fades its children in the first time they enter the viewport.
 * Native IntersectionObserver + CSS transition (no animation library).
 * @param {{ children: React.ReactNode, delay?: number, className?: string }} props delay in seconds
 */
export const ScrollReveal = ({ children, delay = 0, className = '' }) => {
	const ref = useRef(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return undefined;
		if (!('IntersectionObserver' in window)) {
			setIsVisible(true);
			return undefined;
		}
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{ rootMargin: '0px 0px -50px 0px' }
		);
		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	return (
		<div
			ref={ref}
			className={`reveal${isVisible ? ' is-visible' : ''}${className ? ` ${className}` : ''}`}
			style={delay ? { transitionDelay: `${delay}s` } : undefined}
		>
			{children}
		</div>
	);
};
