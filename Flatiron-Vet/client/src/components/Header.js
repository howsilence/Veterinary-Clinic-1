import React from 'react';


function Header({logout, user}) {




    return(

        <header className="header colored sticky-header" data-scroll="out">
				<div className="c-container">
					<div className="nav-items">
					<a href="/">
					<img className="site-logo" src="./assets/vetlogo.png" alt=""/>
					</a>
					<ul className="main-nav">
						<li className="nav-item active">
						<a className="nav-link active" href="/">Home</a>
						</li>
						<li className="nav-item">
						<a className="nav-link" href="/account">My Account</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/faq">F.A.Q.</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/team">Our Team</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/testimonials">Testimonials</a>
							</li>
					</ul>
						<div className="form-inline">
							<a className="nav-link" href="/scheduleapt"><button className="btn btn-outline-white mr-2" type="button">SCHEDULE APPOINTMENT</button></a>
							<a className="nav-link" href="/register"><button className="btn btn-outline-white mr-2" type="button">REGISTER</button></a>
							<a className="nav-link" href="/login"><button className="btn btn-outline-white mr-2" type="button">{(user) ? "LOGOUT" : "LOGIN"}</button></a>
						</div>
					</div>
				</div>
			</header>

    )
}

export default Header;