export const ButtonCustom = ({children, color, onClick, size}) => {
	return (
		<button
			style={{
				color: color,
				// font-size: size
			}}
			onClick={onClick}
		>
			{children}				
		</button>
	);
}