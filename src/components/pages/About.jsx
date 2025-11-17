import React from 'react'
import './About.css'
import { Github, Linkedin } from 'lucide-react'

export const About = () => {
	return (
		<div className="about-wrapper">
			{/* Title Section with Animations */}
			<div className="about-container">
				<h1 className="split-text-container">
					<span className="text-part left">About</span>
				</h1>
				<h1 className="split-text-container text-blue-300 ml-52">
					<span className="text-part right">Me</span>
				</h1>
			</div>

			{/* Content Section */}
			<div className="about-content ml-5 mt-40">
				<section className="about-intro">
					<p>
						Hey! I'm <span className="highlight">Ilan Nowak-Glandier</span>, a developer in training at 42 School.
					</p>
					<br/>
					<p>
						After one year at 42 School, I've completed the common core and explored the Web, Data, and AI specializations. 
						I'm a motivated, curious, and rigorous developer, driven by the desire to tackle <span className="highlight">concrete technical challenges</span> 
						and transform ideas into robust solutions.
					</p>
					<br/>
				</section>

				<section className="about-values">
					<h2>My Values</h2>
					<br/>
					<div className="values-grid">
						<div className="value-card">
							<h3>Autonomy & Rigor</h3>
							<p>I structure my work methodically while maintaining the freedom to innovate.</p>
							<br/>
						</div>
						<div className="value-card">
							<h3>Pragmatism</h3>
							<p>I seek balance between quality and performance, anticipating risks without getting stuck.</p>
							<br/>
						</div>
						<div className="value-card">
							<h3>Curiosity</h3>
							<p>I love exploring new domains, technologies, and tackling fresh challenges.</p>
							<br/>
						</div>
						<div className="value-card">
							<h3>Collaboration</h3>
							<p>I believe in the power of teamwork and the importance of effective communication.</p>
							<br/>
						</div>
					</div>
				</section>

				<section className="about-skills">
					<h2>What I Love Doing</h2>
					<br/>
					<ul>
						<li><span className="emoji">💻</span> <span className="bold">Web Development</span> — Building interactive and performant applications.</li>
						<li><span className="emoji">🔗</span> <span className="bold">Web3 & Blockchain</span> — Exploring emerging technologies.</li>
						<li><span className="emoji">📊</span> <span className="bold">Data & AI</span> — Analyzing and extracting insights from data.</li>
						<li><span className="emoji">🎨</span> <span className="bold">Design & UX</span> — Thinking user-first and creating intuitive interfaces.</li>
					</ul>
				</section>

				<section className="about-hobbies">
					<h2>Beyond Code</h2>
					<p>
						<span className="emoji">🧗</span> Rock climbing (my absolute passion) • 
						<span className="emoji">✈️</span> Exploring the world (10 countries visited) • 
						<span className="emoji">🎵</span> Music • 
						<span className="emoji">🎮</span> Video games
					</p>
				</section>

				<section className="about-cta">
					<h2>What I'm Looking For</h2>
					<p>An internship or opportunity where I can tackle <span className="highlight">concrete challenges</span>, contribute to <span className="highlight">meaningful projects</span>, 
					and grow both technically and personally.</p>
					<div className="cta-buttons">
						<a href="https://linkedin.com/in/ilan-nowak-glandier" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
							<Linkedin/>
							{/* LinkedIn */}
						</a>
						<a href="https://github.com/Cimeci" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
							<Github/>
							{/* GitHub */}
						</a>
					</div>
				</section>
			</div>
		</div>
	)
}