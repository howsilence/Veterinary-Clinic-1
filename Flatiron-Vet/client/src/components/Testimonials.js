import React from 'react';
import './Testimonials.css'


function Testimonials() {
    return (
        <React.Fragment>
            <h1><center>Testimonials</center></h1>
            <div className='testimonial-wrapper'>
                <div className="container">
                    <img src="./assets/dogmale1.jpeg" className="avatar" style={{ width: "90px" }} />
                    <p><span>Cooper.</span> CEO at Mighty Schools.</p>
                    <p>John Doe saved us from a web disaster.</p>
                </div>
                <div className="container">
                    <img src="./assets/cat4.jpeg" alt="image" className="avatar" style={{ width: "90px" }} />
                    <p><span >Jasper.</span> CEO at Company.</p>
                    <p>No one is better than John Doe.</p>
                </div>
                <div className="container">
                    <img src="./assets/girafa.jpeg" alt="image" className="avatar" style={{ width: "90px" }} />
                    <p><span >Peanut.</span> CEO at Company.</p>
                    <p>No one is better than John Doe.</p>
                </div>
                <div className="container">
                    <img src="./assets/dogmale2.jpeg" alt="image" className="avatar" style={{ width: "90px" }} />
                    <p><span >Apollo.</span> CEO at Company.</p>
                    <p>No one is better than John Doe.</p>
                </div>
                <div className="container">
                    <img src="./assets/hipopotamo.jpeg" alt="image" className="avatar" style={{ width: "90px" }} />
                    <p><span >Fiona.</span> CEO at Company.</p>
                    <p>No one is better than John Doe.</p>
                </div>
                <div className="container">
                    <img src="./assets/pig.jpeg" alt="image" className="avatar" style={{ width: "90px" }} />
                    <p><span >Chloe.</span> CEO at Company.</p>
                    <p>No one is better than John Doe.</p>
                </div>

            </div>
        </React.Fragment>
    )
}

export default Testimonials

