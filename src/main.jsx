import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import './i18n/config'

import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ThemeProvider>
			<BrowserRouter>
				<App className="app"/>
			</BrowserRouter>
    	</ThemeProvider>
	</React.StrictMode>
)

