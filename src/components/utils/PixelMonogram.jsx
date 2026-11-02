import { useMemo } from 'react';
import './PixelMonogram.css';

/*
 * Pixel grid that assembles itself into the "IN." monogram on load.
 * '#' = ink cell, '*' = accent cell, '.' = empty cell.
 */
const MONOGRAM = [
	'...............',
	'.###.#...#.....',
	'..#..##..#.....',
	'..#..##..#.....',
	'..#..#.#.#.....',
	'..#..#..##.....',
	'..#..#..##.....',
	'.###.#...#.**..',
	'...........**..',
];

const ASSEMBLE_MS = 1600;
const CELL_MS = 450;

/** Deterministic pseudo-random order so every load looks the same. */
const scatter = (i) => {
	const x = Math.sin(i * 12.9898) * 43758.5453;
	return x - Math.floor(x);
};

export const PixelMonogram = () => {
	const cells = useMemo(
		() =>
			MONOGRAM.join('').split('').map((char, i) => ({
				kind: char === '#' ? 'ink' : char === '*' ? 'accent' : 'empty',
				delay: Math.round(scatter(i + 1) * ASSEMBLE_MS),
			})),
		[]
	);

	return (
		<div
			className="pixel-grid"
			style={{ '--cols': MONOGRAM[0].length, '--cell-ms': `${CELL_MS}ms` }}
			aria-hidden="true"
		>
			{cells.map((cell, i) => (
				<span key={i} className={`pixel pixel-${cell.kind}`} style={{ '--d': `${cell.delay}ms` }} />
			))}
		</div>
	);
};
