import React from 'react';
import { Link } from 'react-router-dom';
import './Home/Home.css';
import './Home/responsive.css';
import logo from '../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import account from '../images/account.png';
import insurance from '../images/insurance.png';
import tt from '../images/tt.png';
import card from '../images/card.png';

const Navbar = () => {
	return (
		<>
			<header>

				<div className="bg-area header-area">
					<div className="container">
						<div className="row">
							<div className="col-2">
								<div className="logo">
									<Link to="/">
										<img src={logo} alt="logo" />
									</Link>
								</div>
							</div>
							<div className="col-7">
								<nav className="lg-navber">
									<ul>
										<li>
											<a href>
												<img src={card} alt="" /> Banking
											</a>
										</li>
										<li><a href> <img src={insurance} alt="" /> Insurance</a></li>
										<li><a href><img src={tt} alt="" /> Travel</a></li>
										<li><Link to="/login"><img src={account} alt="" /> My Profile</Link></li>
									</ul>
								</nav>
							</div>
							<div className="col-3">
								<div className="header-search">
									<a href>
										<FontAwesomeIcon icon={faSearch} />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="mb-header-tab-area bg-area">
					<div className="container">
						<div className="mb-header-tab">
							<label htmlFor="menu-bar" className='mt-3'>
								<FontAwesomeIcon icon={faBars} />
							</label>
							<div className="mb-header-logo mt-3">
								<img src={logo} alt="" />
							</div>
							<div className="header-search">
								<a href>
									<FontAwesomeIcon icon={faSearch} />
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="side-menu-area bg-area d-md-none d-sm-block h-fit">
					<input type="checkbox" id="menu-bar" />
					<nav className="navber">
						<ul>
							<li>
								<a href>
									<img src={card} alt="" /> Banking
								</a>
							</li>
							<li><a href> <img src={insurance} alt="" /> Insurance</a></li>
							<li><a href><img src={tt} alt="" /> Travel</a></li>
							<li><Link to="/login"><img src={account} alt="" /> My Profile</Link></li>
						</ul>
					</nav>
				</div>

			</header>
		</>
	);
};

export default Navbar;