import "./App.css";
import { Navbar } from './components/utils/Navbar';
import { ScrollToTop } from './components/utils/ScrollToTop';
import { Home, Hackathons, Projects, Talks, Background, Stacks, About, AiHelp, Contact } from "./components/pages";

/* Order must match SECTIONS in ./sections.js (drives nav + progress counters). */
function App() {
	return (
		<div className="App">
			<Navbar />

			<main>
				<section id="home"><Home /></section>
				<section id="hackathons"><Hackathons /></section>
				<section id="projects"><Projects /></section>
				<section id="talks"><Talks /></section>
				<section id="background"><Background /></section>
				<section id="stacks"><Stacks /></section>
				<section id="about"><About /></section>
				<section id="help"><AiHelp /></section>
				<section id="contact"><Contact /></section>
			</main>

			<footer className="site-footer">
				<span>&copy; {new Date().getFullYear()} Ilan Nowak--Glandier</span>
			</footer>

			<ScrollToTop />
		</div>
	);
}

export default App;
