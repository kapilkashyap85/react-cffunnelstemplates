import React from 'react'
import { Link, NavLink } from 'react-router-dom'
//import IMAGES from '../images/index.js'


const Header = () => {
  return (
	<header>
		<div className='wrapper'>
			<div className='logo'>
				<Link to="/"><img src="./images/cf-logo-dark-1.svg" alt="Premium ClickFunnels Templates." /></Link>
					
			</div>
			<div className='menuBar'>
				<nav id="menu">
					<ul>
						<li>
							<NavLink to="/solutions">Solutions</NavLink>
						</li>
						<li>
							<NavLink to="/agency">Agency</NavLink>
						</li>
						<li>
							<NavLink to="/templates">Templates</NavLink>
						</li>
						<li className='hireBtn'>
							<NavLink to="/HireAnExpert">Hire An Expert</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</div>		
	</header>
  )
}

export default Header