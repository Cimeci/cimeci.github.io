import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import "./App.css";
import { Navbar } from './components/utils/Navbar';
import { About, Contact, Home, Projects, Stacks } from "./components/pages";

function App() {
	return (
		<div className="App">
			<Navbar />
			<AnimatePresence mode="wait">
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={<Home/>}/>
					<Route path="/about" element={<About/>}/>
					<Route path="/stack" element={<Stacks/>}/>
					<Route path="/projects" element={<Projects/>}/>
					<Route path="/contact" element={<Contact/>}/>
				</Routes>
			</AnimatePresence>
		</div>
	);
}

export default App;