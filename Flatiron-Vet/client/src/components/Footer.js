import React from 'react';
import {FaFacebook, FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
      <div className='footer'>
          <div className='container'>
              <div className='col col-1'>
                  <h1>Clinic<span className='primary'>Name</span></h1>
              </div>
              <div className='col'>
                  <h4 className='footer-link-category'>Support</h4>
                  <span className='bar'></span>
                      <a className='footer-link'>Contact Us</a>
                      <a className='footer-link'>Chat</a>
                      <a className='footer-link'>Help Center</a>
                      <a className='footer-link'>FAQ</a>

              </div>
              <div className='col'>
                  <h4 className='footer-link-category'>Developers</h4>
                  <span className='bar'> </span>
                      <a className='footer-link'> Cloud</a>
                      <a className='footer-link'>Commerce</a>
                      <a className='footer-link'>Pro</a>
                      <a className='footer-link'>API</a>
                 
              </div>
              <div className='col'>
                  <h4 className='footer-link-category'>Company</h4>
                  <span className='bar'> </span>
                      <a className='footer-link'>About</a>
                      <a className='footer-link'>Information</a>
                      <a className='footer-link'>Legal</a>
                      <a className='footer-link'>Privacy</a>
              </div>
              <div className='col'>
                  <h4 className='footer-link-category'>Social</h4>
                  <span className='bar'> </span>
                      <a className='footer-link'><FaFacebook className='icon'/></a>
                      <a className='footer-link'><FaTwitter className='icon'/></a>
                      <a className='footer-link'><FaLinkedin className='icon'/></a>
                      <a className='footer-link'><FaGithub className='icon'/></a>
              </div>
          </div>
          
      </div>
  )
}


export default Footer;

