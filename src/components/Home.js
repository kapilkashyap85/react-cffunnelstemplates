import React from 'react'
import Header from './Header'
//import { Link } from 'react-router-dom'
import Footer from './Footer'
import { useState, toggle } from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'




function Home() {

	const [toggle, setToggle] = useState(1)

	function updateToggle(id) {
		setToggle(id)
	}
	
	return (

		<div>
			<Header />
			<div className='content homeContent'>
				<section className='homeBanner'>
					<div className='wrapper'>
						<h1>Transform Your Sales Strategy with the Ultimate Collection of <span>High-Converting <br /> Sales Funnel Templates</span></h1>
						<h2>Choose from a wide selection of <u>visually appealing</u> and <u>highly effective</u> <br /> sales funnels, tailored to fit your business needs.</h2>
					</div>
				</section>

				<section className='our-products pd-70 badgeCF2_Templates'>
					<div className='wrapper'>
						<ul className='tablinkSec'>
							<li>
								<a className={toggle === 1 ? "tabs active" : "tabs"} href='javascript:void(0)' onClick={() => updateToggle(1)}>ClickFunnels Classic Templates</a>
							</li>
							<li>
								<a className={toggle === 2 ? "tabs active" : "tabs"} href='javascript:void(0)' onClick={() => updateToggle(2)}>ClickFunnels 2.0 Templates</a>
							</li>
						</ul>

						<div className={toggle === 1 ? "tabcontentSec active" : "tabcontentSec"}>
							<ul>
								<li>
									<div className='box'>
										<figure>
											<a href='#'><img src="./images/CF_Thumb1-4.jpg" alt="CourseMax: The All-in-One Funnel Template for Maximising Your Online Courses Sales" /></a>
											<div className="overlay">
												<div className="demo">
													<a href='#' className="btn detail-btn">Details</a>
													<a href='#' className="btn" target="_blank">Live Demo</a>
												</div>
											</div>
										</figure>
										<div className='details'>
											<div className='new-pro New'><span>New</span></div>
											<div className='title atagSec'>
												<h3>
													<a href='#'>CourseMax: The All-in-One Funnel Template for Maximising Your Online Courses Sales</a>
												</h3>
											</div>
											<div className='cat'>
												<div className="pcatwrap">
													<h2>Learning &amp; Courses</h2>
												</div>
												<div className='price'>
													<div className='sale-price'>
														<span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>149</bdi></span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</li>
							</ul>
							<div className="btn-outer">
								<a href="#" className="btn view-all">VIEW ALL TEMPLATES</a>
							</div>
						</div>
						<div className={toggle === 2 ? "tabcontentSec active" : "tabcontentSec"}>
							<ul>
								<li>
									<div className='box'>
										<figure>
											<a href='#'><img src="./images/CF_Thumb-1.jpg" alt="CourseMax: The All-in-One Funnel Template for Maximising Your Online Courses Sales" /></a>
											<div className="overlay">
												<div className="demo">
													<a href='#' className="btn detail-btn">Details</a>
													<a href='#' className="btn" target="_blank">Live Demo</a>
												</div>
											</div>
										</figure>
										<div className='details'>
											<div className='new-pro New'><span>New</span></div>
											<div className='title atagSec'>
												<h3>
													<a href='#'>CourseMax: The All-in-One Funnel Template for Maximising Your Online Courses Sales</a>
												</h3>
											</div>
											<div className='cat'>
												<div className="pcatwrap">
													<h2>Learning &amp; Courses</h2>
												</div>
												<div className='price'>
													<div className='sale-price'>
														<span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>149</bdi></span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</li>
							</ul>
							<div className="btn-outer">
								<a href="#" className="btn view-all">VIEW ALL TEMPLATES</a>
							</div>
						</div>
					</div>
				</section>

				<section className="how-its-work pd-60 blueBg">
					<div className="wrapper">
						<div className="heading">
							<h2>How it works?</h2>
						</div>
						<ul>
							<li>
								<span>1</span>
								<img src="./images/work-img1.svg" alt="Buy CF Template" />
								<h2>Buy the best suited CF Funnels Template for your business.</h2>
							</li>
							<li>
								<span>2</span>
								<img src="./images/newwork-img2.svg" alt="Login to your Clickfunnels account" />
								<h2>Login to your ClickFunnels account</h2>
							</li>
							<li>
								<span>3</span>
								<img src="./images/newwork-img3.svg" alt="Import CF Template in Clickfunnels" />
								<h2>Import your CF Template in Clickfunnels</h2>
							</li>
							<li>
								<span>4</span>
								<img src="./images/work-img4.svg" alt="Your Funnel is Ready to Use" />
								<h2>The CF Funnels Template is now ready for use</h2>
							</li>
							<li>
								<span>5</span>
								<img src="./images/Premium_Support.svg" alt="Claim your 4 hours Premium Support" />
								<h2>Claim your 4 hours Premium Support</h2>
							</li>
						</ul>
					</div>
				</section>

				<section className="what-we-do pd-60 whiteBg">
					<div className="wrapper">
						<div className="heading">
							<h2>What Do We Offer?</h2>
						</div>
						<div className="outer">
							<div className="left-col">
								<p>At CF Funnels Templates, we understand the importance of having a strong online presence and effective sales strategy for any business. That's why we offer a comprehensive collection of high-quality, ready-made ClickFunnels templates that are specifically designed to help online marketers, business owners, entrepreneurs, and even those without professional programming experience grow their business faster.</p>
								<p>Our team of certified ClickFunnels developers has created a wide variety of templates for different industries, ensuring that there is something for every business type. These funnels are guaranteed to convert your visitors into customers, saving you valuable time and resources.</p>
								<p>Don't waste any more time and resources trying to navigate the complex process of creating a sales funnel on your own. Let us help you launch your business today and start seeing results right away.</p>
								<p>
									<em>*Disclaimer: Cffunneltemplates.com is not affiliated/Partners with ClickFunnels.</em>
								</p>
							</div>
							<div className="right-col">
								<img src="./images/whatwedo-image.svg" alt="What We Do?" />
							</div>
						</div>
					</div>
				</section>

				<section className="what-we-do pd-80 customerReviewSection blueBg">
					<div className="wrapper">
						<div className="outer">
							<div className="left-col">
								<div className="designServiceContent">
									<h2>"Exceptional Work! CF Funnels Templates Deserves 10 Stars"</h2>
									<h3>CF Funnels Templates is the best website and Click Funnel developer I've worked with. Their beautiful design work, quick turnaround, and understanding of my health &amp; wellness business made it easy to work with them. I highly recommend them to anyone looking for the best in the industry.</h3>
									<p>— Dr. Helene Pulnik, ND</p>
								</div>
							</div>
							<div className="right-col">
								<img src="./images/Dr.-Helene-Pulnik.png" alt="Dr. Helene Pulnik" />
							</div>
						</div>
					</div>
				</section>

				<section className="about-funnel pd-60">
					<div className="wrapper">
						<div className="heading">
							<h2>What is ClickFunnels?</h2>
						</div>
						<div className="outer">
							<div className="left-col">
								<p>ClickFunnels is a powerful and user-friendly platform that enables you to efficiently create and manage smart sales funnels that convert.</p>
								<p>It's more than just a website builder, it's a comprehensive solution for building and optimizing sales funnels that are tailored to your specific business needs. With just a few clicks, you can create a variety of different types of funnels, such as opt-in funnels, sales funnels, webinar funnels, membership sites, and more.</p>
								<p>This platform is perfect for online marketers, business owners, entrepreneurs, and anyone looking to streamline their sales process and increase conversions. And getting started is easy, as you can sign up for a <a href="https://www.clickfunnels.com?cf_affiliate_id=2380702&amp;affiliate_id=2380702" target="_blank">14-day free trial</a> to test out all the features and capabilities of the software. </p>
							</div>
							<div className="right-col">
								<a href="https://www.clickfunnels.com/sign-up-flow?aff=b48009b6-5e55-44eb-b198-360388e86a13" target="_blank">
									<img src="./images/click-funnels.svg" alt="What is click funnels?" />
								</a>
							</div>
						</div>
					</div>
				</section>

				<section className="slider-sec pd-60 customerSection">
					<div className="wrapper">
						<div className="heading">
							<h2>Our Customer <img src="./images/red-heart.png" alt="Our Customer" />Us </h2>
						</div>
						<div className='customerSlider'>
							<OwlCarousel items="2" autoPlay="true" dots="false" nav="true"  responsive={{
              '0': { items: 1 },
              '768': { items: 2 },              
             }}>
								<div className='item'>
									<a href="https://www.youtube.com/watch?v=fi_lbYB4WKM">
										<img src="./images/video-poster-1.jpg" alt="Our Customer" />
									</a>
								</div>
								<div className='item'>
									<a href="https://www.youtube.com/watch?v=pfTABaaLHZA">
										<img src="./images/video-poster-5.png" alt="Our Customer" />
									</a>
								</div>
								<div className='item'>
									<a href="https://www.youtube.com/watch?v=Kua_kSdzaOs&amp;feature=youtu.be">
										<img src="./images/video-poster-2.png" alt="Our Customer" />
									</a>
								</div>
								<div className='item'>
									<a href="https://www.youtube.com/watch?v=oK3OgZUOu1Q&amp;feature=youtu.be">
										<img src="./images/video-poster-3.png" alt="Our Customer" />
									</a>
								</div>
								<div className='item'>
									<a href="https://www.youtube.com/watch?v=NW99o5xO3yU">
										<img src="./images/video-poster-4.png" alt="Our Customer" />
									</a>
								</div>
							</OwlCarousel>
						</div>
					</div>
				</section>

				<section className="get-benefits pd-60">
					<div className="wrapper">
						<div className="heading">
							<h2>Unlock the Potential of Your Online Business with Our High-Converting Clickfunnels Templates.</h2>
							<p>Our selection of attractive and professionally-designed templates can be easily purchased, customized, and implemented in a matter of minutes. simply replace the images and content to create a powerful sales funnel and start generating results.</p>
						</div>
						<ul>
							<li>
								<div className="item">
									<img src="./images/MobileOptimised.svg" alt="Mobile Optimised" />
									<h2>Enjoy Seamless Navigation and User Experience on All Devices</h2>
								</div>
							</li>
							<li>
								<div className="item">
									<img src="./images/BeautifulDesign.svg" alt="Beautiful Design" />
									<h2>Elevate Your Brand with Our Attractive and Professional Design</h2>
								</div>
							</li>
							<li>
								<div className="item">
									<img src="./images/ResponseDriven.svg" alt="Direct Response Driven" />
									<h2>Increase Conversions with Our Direct Response-Driven Approach</h2>
								</div>
							</li>
							<li>
								<div className="item">
									<img src="./images/One-Click-Upsells.svg" alt="One-Click Upsells" />
									<h2>Maximize Sales with One-Click Upsells</h2>
								</div>
							</li>
							<li>
								<div className="item">
									<img src="./images/One-Click-Downsells.svg" alt="One-Click Downsells" />
									<h2>Boost Sales with One-Click Downsells</h2>
								</div>
							</li>
							<li>
								<div className="item">
									<img src="./images/UpsellSavers.svg" alt="Upsell Savers" />
									<h2>Retain Customers with Upsell Savers</h2>
								</div>
							</li>
							<li>
								<div className="item">
									<img src="./images/OrderBumps.svg" alt="Built-In Order Bumps" />
									<h2>Increase Average Order Value with Built-In Order Bumps</h2>
								</div>
							</li>
							<li>
								<div className="item">
									<img src="./images/Built-InUrgency.svg" alt="Built-In Urgency" />
									<h2>Create a Sense of Urgency with Built-In Urgency Features</h2>
								</div>
							</li>
						</ul>
					</div>
				</section>

				<section className="latest-post pd-60">
					<div className="wrapper">
						<div className="heading">
							<h2>Latest From The Blog</h2>
						</div>
						<div className="post-wrap">
							<ul>
								<li>
									<div className="item">
										<figure>
											<a href="#">
												<img src="https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img/https://eadn-wc01-10223060.nxedge.io/wp-content/uploads/2023/06/Featured-2-.jpg" alt="post" />
											</a>
										</figure>
										<div className="details">
											<h2>
												<a href="#">Why Funnel Builders are Essential for New Business Owners</a>
											</h2>
										</div>
									</div>
								</li>
								<li>
									<div className="item">
										<figure>
											<a href="#">
												<img src="https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img/https://eadn-wc01-10223060.nxedge.io/wp-content/uploads/2023/06/Featured-7.jpg" alt="post" />
											</a>
										</figure>
										<div className="details">
											<h2>
												<a href="#">How C.F. Funnels Templates Can Kickstart Your Funnel Building Journey</a>
											</h2>
										</div>
									</div>
								</li>
								<li>
									<div className="item">
										<figure>
											<a href="#">
												<img src="https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img/https://eadn-wc01-10223060.nxedge.io/wp-content/uploads/2023/06/Featured-2-6.jpg" alt="post" />
											</a>
										</figure>
										<div className="details">
											<h2>
												<a href="#">Unlocking WordPress Sales Funnel Success: Achieve ClickFunnels-Level Results. Explore WordPress Funnel Now!</a>
											</h2>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</section>

			</div>
			<Footer />
		</div>
	)
}

export default Home