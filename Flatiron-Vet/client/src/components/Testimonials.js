import React from 'react';
import './Testimonials.css'


function Testimonials() {
    return (
        <div className="testimonialdiv">
            <h1><center>Testimonials</center></h1>
            <div className='testimonial-wrapper'>
                <div className="container">
                    <img src="./assets/dogmale1.jpeg" alt="pet" className="avatar" style={{ width: "90px" }} />
                    <p><span>Cooper.</span></p>
                    <p>"I love my Vets!"</p>
                </div>
                <div className="container">
                    
                    <img src="./assets/cat4.jpeg" alt="pet" className="avatar" style={{ width: "90px" }} />
                    <p><span >Jasper.</span> </p>
                    <p>"Thanks a lot for the excellent service!"</p>
                </div>
                <div className="container">
                    <img src="./assets/girafa.jpeg" alt="pet" className="avatar" style={{ width: "90px" }} />
                    <p><span >Peanut.</span> </p>
                    <p>"I always have had a pleasant experience."</p>
                </div>
                <div className="container">
                    <img src="./assets/elephant.jpeg" alt="pet" className="avatar" style={{ width: "90px" }} />
                    <p><span>Apollo.</span> AKA Popo.</p>
                    <p>"Amazing staff! Great snacks!"</p>
                </div>
                <div className="container">
                    <img src="./assets/hipopotamo.jpeg" alt="pet" className="avatar" style={{ width: "90px" }} />
                    <p><span>Fiona.</span> Pet of the month.</p>
                    <p>No one is better than Dr. Ava.</p>
                </div>
                <div className="container">
                    <img src="./assets/pig.jpeg" alt="pet" className="avatar" style={{ width: "90px" }} />
                    <p><span >Chloe.</span></p>
                    <p>"Fantastic! I have been coming here since they opened with all of my friends"</p>
                </div>
            </div>
        </div>
    )
}

export default Testimonials

