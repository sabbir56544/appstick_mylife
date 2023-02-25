import React from 'react'
import logo from '../images/logo.png'
import insta from '../images/insta.png'
import fb from '../images/fb.png'
import utube from '../images/utube.png'
import link from '../images/link.png'
import gplay from '../images/gplay.png'
import { Link } from 'react-router-dom'

const Footer = () => {
	return (
		<div>
			<footer className="footer-area bg-area">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 col-md-4 col-sm-12">
							<div className="footer-widget about-company">
								<h3>Need Help With</h3>
								<span>Anything?</span>
								<p>We are here to support you.</p>
								<a href><button className="btn btn-primary fotter-btn">Contact Us</button></a>
							</div>
						</div>
						<div className="col-lg-2 col-md-2 col-sm-12">
							<div className="footer-widget footer-links" style={{textAlign: 'justify'}}>
								<h4>Banking</h4>
								<ul>
									<li><a href>Add new account</a></li>
									<li><a href>My account</a></li>
									<li><a href>My savings</a></li>
									<li><a href>Add new cards</a></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-2 col-md-2 col-sm-12">
							<div className="footer-widget footer-links" style={{textAlign: 'justify'}}>
								<h4>Insurance</h4>
								<ul>
									<li><a href>Home insurances</a></li>
									<li><a href>Mobility insurances</a></li>
									<li><a href>Travel insurances</a></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-2 col-md-2 col-sm-12">
							<div className="footer-widget footer-links" style={{textAlign: 'justify'}}>
								<h4>Travelling</h4>
								<ul>
									<li><a href>Add new booking</a></li>
									<li><a href>My booking</a></li>
									<li><a href>Plan & roots</a></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-2 col-md-2 col-sm-12">
							<div className="footer-widget footer-links" style={{textAlign: 'justify'}}>
								<h4>More</h4>
								<ul>
									<li><a href>About us</a></li>
									<li><a href>Send email</a></li>
									<li><a href>Blog</a></li>
									<li><a href>FAQ</a></li>
									<li><a href>Service ploicy</a></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="footer-bottom">
						<div className="row mt-4">
							<div className="col-lg-4 col-md-6 col-sm-12">
								<div className="footer-logo">
									<Link to="/">
									<img src={logo} alt="logo" />
									</Link>
								
								</div>
							</div>
							<div className="col-lg-8 col-md-6 col-sm-12">
								<div className="footer-icon">
									<a href>
										<img src={gplay} alt="fb" />
									</a>
									<a href>
										<img src={fb} alt="fb" />
									</a>
									<a href>
										<img src={link} alt="fb" />
									</a>
									<a href>
										<img src={utube} alt="fb" />
									</a>
									<a href>
										<img src={insta} alt="fb" />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default Footer