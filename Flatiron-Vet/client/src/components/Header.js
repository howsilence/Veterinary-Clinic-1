import React from 'react'

function Header() {




    return(

        <header class="header colored sticky-header" data-scroll="out">
				<div class="c-container">
					<div class="nav-items">
					<a href="/">
					<img class="site-logo" src="https://md-aqil.github.io/images/logo2.png" alt=""/>
					</a>
					<ul class="main-nav">
						<li class="nav-item active">
						<a class="nav-link active" href="/">Home</a>
						</li>
						<li class="nav-item">
						<a class="nav-link" href="/team">Our Team</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="/faq">F.A.Q.</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="/news">Latest News</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="/testimonials">Testimonials</a>
							</li>
					</ul>
						<div class="form-inline">
							<a class="nav-link" href="/scheduleapt"><button class="btn btn-outline-white mr-2" type="button">SCHEDULE APPOINTMENT</button></a>
							<a class="nav-link" href="/register"><button class="btn btn-outline-white mr-2" type="button">REGISTER</button></a>
							<a class="nav-link" href="/login"><button class="btn btn-outline-white mr-2" type="button">LOGIN</button></a>
						</div>
					</div>
				</div>
			</header>

    )
}

export default Header;