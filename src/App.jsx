import "./App.css";
import { Navbar } from './components/utils/Navbar';
import { ScrollToTop } from './components/utils/ScrollToTop';
import { Home, About, Projects, Stacks, Contact, Hackathons } from "./components/pages";

function App() {
	return (
		<div className="App">
			<Navbar />

			<section id="home"><Home /></section>
			<section id="about"><About /></section>
			<section id="stacks"><Stacks /></section>
			<section id="hackathons"><Hackathons /></section>
			<section id="projects"><Projects /></section>
			<section id="contact"><Contact /></section>

			<ScrollToTop />
		</div>
	);
}

export default App;
