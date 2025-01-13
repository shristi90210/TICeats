import React from 'react'
import { Link } from 'react-router-dom'
function Landing_page() {
  return (
    <>
    <div id="landingpage">
        <div className="sign-page">
            <ul>
                <li><Link>Sign In</Link></li>
                <li><Link>Sign Up</Link></li>
            </ul>
        </div>
        <div className="circle">
          <div className="circle-cont">
            <h1>WELCOME!</h1>
            <p></p>
          </div>
        </div>
    </div>
    </>
  )
}

export default Landing_page