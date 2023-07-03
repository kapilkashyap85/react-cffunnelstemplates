import React from 'react'
import Cta from './Cta'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
	<div>
		<footer>
		<Cta/>
		<div className="main-footer">
			<div className="wrapper">
			<div className="footer-menu">
				<ul className="menu">
					<li>
						<NavLink to="/about">About us</NavLink>
					</li>
					<li>
						<a href="https://cffunnelstemplates.com/team/">Team</a>
					</li>
					<li>
						<a href="https://cffunnelstemplates.com/funnels/click-funnels-templates/">Templates</a>
					</li>
					<li>
						<NavLink to="/HireAnExpert">Hire An Expert</NavLink>
					</li>
					<li>
						<a href="https://cffunnelstemplates.com/contact-us/">Contact Us</a>
					</li>
					<li>
						<a href="https://cffunnelstemplates.com/customer-support/">Support</a>
					</li>
					<li>
						<a href="https://cffunnelstemplates.com/funnels/free-click-funnels-templates/">Free Templates</a>
					</li>
					<li>
						<a href="https://cffunnelstemplates.com/blog/">Blog</a>
					</li>
				</ul>
				<ul className="login-button">
					<li className="login">
						<a href="https://cffunnelstemplates.com/my-account/">Login</a>
					</li>
				</ul>
			</div>
			<ul className="social-links">
				<li>
				<a className="facebook" target='_blank' href="https://www.facebook.com/cffunnels.templates.9">
					<img src="./images/Facebook.svg" alt="facebook" />
				</a>
				</li>
				<li>
				<a className="twitter" target='_blank' href="https://twitter.com/CfFunnels">
					<img src="./images/Twitter.svg" alt="twitter" />
				</a>
				</li>
				<li>
				<a className="linkedin" target='_blank' href="https://www.linkedin.com/in/cf-funnels-templates-58b7b5207/recent-activity/all/">
					<img src="./images/Linkedin.svg" alt="linkedin" />
				</a>
				</li>
				<li>
				<a className="instagram" target='_blank' href="https://www.instagram.com/cf_funnels_templates/">
					<img src="./images/Instagram.svg" alt="instagram" />
				</a>
				</li>
				<li>
				<a className="pinterest" href="https://in.pinterest.com/cffunnelstemplates/pins/">
					<img src="./images/Pinterest.svg" alt="pinterest" />
				</a>
				</li>
				<li>
				<a className="behance" target='_blank' href="https://www.behance.net/cffunntemplat">
					<img src="./images/Behance.svg" alt="behance" />
				</a>
				</li>
				<li>
				<a className="dribbble" target='_blank' href="https://dribbble.com/cffunnelstemplates">
					<img src="./images/Dribbble.svg" alt="dribbble" />
				</a>
				</li>
			</ul>
			<div className="copyright">
				<p> © 2023 CF Funnels Templates</p>
			</div>
			
			</div>
		</div>
		<div className="trademarks">
			<p>*Disclaimer: Cffunneltemplates.com is not affiliated/Partners with ClickFunnels.</p>
		</div>
	</footer>
	</div>
  )
}

export default Footer
