import React from 'react'
import './ThemeOption.css'
import { Moon, Sun } from 'lucide-react'

const ThemeOption = ({currentTheme, onToggle}) => {
  	return (
		<button onClick={onToggle} className="theme-toggle" aria-label={currentTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
			{currentTheme === 'dark' ?
			<Sun size={18}/>:
			<Moon size={18}/>
			}
			
	</button>
  	)
}

export default ThemeOption