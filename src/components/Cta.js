import React from 'react'
import { NavLink } from 'react-router-dom'

const Cta = () => {
  return (
	<div>
	<div class="newsletter">
			<div class="wrapper">
				<div class="left pd-70">
					<h2>Are You Struggling to Develop <span>the Right Funnel for Your Business?</span>
					</h2>
					<p>Let our specialised team help. We are passionate about assisting business owners in building a successful online presence through customised clickfunnels templates.</p>
					<NavLink to="/HireAnExpert" className="btn">NEED HELP <br /><span>Leave it on our experts for the best Funnel solutions.</span></NavLink>
				</div>				
			</div>
		</div>
	</div>
  )
}

export default Cta
