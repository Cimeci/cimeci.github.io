import React from 'react'
import './About.css'

export const About = () => {
	return (
		<div className="about-container">
			<h1 className="split-text-container">
				<span className="text-part left">About</span>
			</h1>
			<h1 className="split-text-container text-blue-300 ml-52">
				<span className="text-part right">Me</span>
			</h1>
		</div>
	)
}