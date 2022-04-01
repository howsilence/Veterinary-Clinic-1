import React from 'react';


function Header({logout, user}) {




    return(

        <header className="header colored sticky-header" data-scroll="out">
				<div className="c-container">
					<div className="nav-items">
					<a href="/">

					<img class="site-logo" src="./assets/newvetlogo.png" alt=""/>

					</a>
					<ul className="main-nav">
						<li className="nav-item active">
						<a className="nav-link active" href="/">Home</a>
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
							<a className="nav-link" href="/register"><button className="btn btn-outline-white mr-2" type="button">Register</button></a>
							<a className="nav-link" href="/account"><button className="btn btn-outline-white mr-2" type="button">ACCOUNT</button></a>
							<a className="nav-link" href="/login"><button onClick={logout} className="btn btn-outline-white mr-2" type="button">{(user) ? "LOGOUT" : "LOGIN"}</button></a>
						</div>
					</div>
				</div>
			</header>

    )
}

export default Header;