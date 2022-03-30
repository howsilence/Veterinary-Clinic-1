import React from 'react'
import './Team.css'


function Team(){
    return(
        // React.fragment let you group a list of children without adding extra nodes to the DOM.
    <React.Fragment>
            <h1><center>Team</center></h1>
            <div className='testimonial-wrapper'>
                <div className="container">
                    <img src="./assets/dr1.jpeg" className="avatar" style={{ width: "90px" }} />
                    <p><span>Dr. Elijah.</span> Small animal veterinary.</p>
                    <p>"Provide exceptional care to our clients and patients during every visit in a caring and compassionate manner…”</p>
                </div>
                <div className="container">
                    <img src="./assets/dr2.jpeg" alt="image" className="avatar" style={{ width: "90px" }} />
                    <p><span >Dr. Ava.</span> Wild animal veterinary.</p>
                    <p>“Provide the highest quality medical and surgical care to our patients and assistance in all aspects of animal care and ownership…”</p>
                </div>
                </div>
        </React.Fragment>
                )
}

export default Team 
