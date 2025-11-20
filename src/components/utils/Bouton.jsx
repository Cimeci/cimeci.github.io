export const ButtonCustom = ({children, color, onClick, size}) => {
	return (
		<button
			style={{
				color: color,
				fontSize: size
			}}
			className="hover:scale-120 duration-400 transition-all"
			onClick={onClick}
		>
			{children}				
		</button>
	);
}