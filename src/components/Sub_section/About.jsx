import React from 'react'
import TodaysSpecial from './Carousel_data'

function About() {
  return (
    <>
    <div className="aboutpage">
    <div className="about-section">
        <div className="left-cont">
          <h1>A Fresh Start For <br />Busy Minds</h1>
        </div>
        <div className="right-circle">
          <div className="circle-cont">
            <h1>Our Mission</h1>
            <h2>At TIC Eats, we’re dedicated to fueling your Academic Journey.😋 </h2>
            <p>Our mission is to provide a simple way for students and staff to pre-order meals, ensuring you can enjoy quality food even during those short breaks. We believe every bite should enhance your college experience, supporting both your body and mind. <br /><br /><br />
              <b>Join us at TIC Eats and make every meal a moment to savor!</b></p>
          </div>
        </div>
      </div>
      <div className="specials-section">  
        <div className="carousel">
          <TodaysSpecial/>
        </div>
      </div> 
    </div>
    </>
  )
}

export default About