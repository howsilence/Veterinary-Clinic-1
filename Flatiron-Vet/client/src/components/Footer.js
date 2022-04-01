import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='contem'>
                <div className='col col-1'>
                    <h1>Mother Goose<span className='primary'>Vet clinic</span></h1>
                </div>
                <div className='col'>
                    <h4 className='footer-link-category'>About us</h4>
                    <span className='bar'></span>
                    <p> We are software engineer students and this is one of our projects.</p>
                    {/* <a className='footer-link'>Contact Us</a>
                    <a className='footer-link'>Chat</a>
                    <a className='footer-link'>Help Center</a>
                    <a className='footer-link'>FAQ</a> */}
                </div>
                <div className='col'>
                    <h4 className='footer-link-category'>Developer by</h4>
                    <span className='bar'> </span>
                    <a href='https://www.linkedin.com/in/steve-tatton-aa0937233/' className='footer-link'>Steve Tatton</a>
                    <a href='https://www.linkedin.com/in/nathalia-troina-140095130/' className='footer-link'>Nathalia Troina</a>
                    <a className='footer-link'>Legal</a>
                    <a className='footer-link'>Privacy</a>
                </div>
                <div className='col'>
                    <h4 className='footer-link-category'>Social</h4>
                    <span className='bar'> </span>
                    <a href='http://www.facebook.com' className='footer-link'><FaFacebook className='icon' /></a>
                    <a href='http://www.twitter.com' className='footer-link'><FaTwitter className='icon' /></a>
                    <a href='http://www.linkedin.com'className='footer-link'><FaLinkedin className='icon' /></a>
                    <a href='http://github.com' className='footer-link'><FaGithub className='icon' /></a>
                </div>
                
            </div>

        </div>
    )
}


export default Footer;

