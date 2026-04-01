import "./App.css";
import { Navbar } from './components/utils/Navbar';
import { Home, About, Projects, Stacks, Contact } from "./components/pages";

function App() {
	return (
		<div className="App">
			<Navbar />

			<section id="home"><Home /></section>
			<section id="about"><About /></section>
			<section id="projects"><Projects /></section>
			<section id="stacks"><Stacks /></section>
			<section id="contact"><Contact /></section>
		</div>
	);
}

export default App;
