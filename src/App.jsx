import "./App.css";
import { Navbar } from './components/utils/Navbar';
import { About, Contact, Home, Projects, SocialCard, Stacks } from "./components/pages";

function NotFound() {
 	return (
		<div className="z-[2000] error-404-body absolute top-0 flex flex-col h-[100vh] w-full justify-center items-center">
			<div class="noise"></div>
			<div class="overlay"></div>
			<div class="terminal flex flex-col justify-center gap-3">
			  <h1 className="text-6xl mb-5">Error <span class="errorcode">404</span></h1>
			  <p class="output">The page you are looking for is unavailable.</p>
			  <p class="output">Please try to <a href="/">return to the homepage</a>.</p>
			  <p class="output">Good luck.</p>
			</div>
		</div>
	);
}

function App() {
	return (
		<div className="App">
			<Navbar />

			<Home/>

			<About/>
			<Stacks/>
			<Projects/>
			<Contact/>

			<SocialCard/>
		</div>
	);
}

export default App;