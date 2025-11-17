import React from 'react'
import './ThemeOption.css'
import { Moon, Sun } from 'lucide-react'

const ThemeOption = ({currentTheme, onToggle}) => {
  	return (
		<div onClick={onToggle} className="theme-toggle">
			{currentTheme == 'dark' ?
			<Sun color="#ffc300"/>:
			<Moon color="#14213d"/>
			}
			
	</div>
  	)
}

export default ThemeOption