import React, { Component } from 'react'
import "../styles/Navbar.css"

import TheBaseLogo from '../images/the-base-logo.png'
import ECLogo from '../images/EC_logo.png'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <div className='navbar-container'>
                    <div className='navbar-logo-container'>
                        <img src={TheBaseLogo} alt="The Base Logo" className='the-base-logo navbar-logo'/>
                        <div className='navbar-sep'></div>
                        <img src={ECLogo} alt="EC Logo" className='ec-logo navbar-logo' />
                    </div>

                    <div className='navbar-right-container'>
                        <div className='navbar-right-dummy'></div>
                        <div className='navbar-links-container'>
                            <Link to="/" className='navbar-link'>Home</Link>
                            <Link to="/about" className='navbar-link'>About</Link>
                            <Link to="/events" className='navbar-link'>Events</Link>
                            <Link to="/bulletin" className='navbar-link'>Bulletin</Link>
                            <Link to="/Broadcast" className='navbar-link'>Broadcast</Link>
                            <Link to="/team" className='navbar-link'>TEAM</Link>
                            <Link to="/startup-internship" className='navbar-link'>Startup Internship</Link>
                        </div>
                    </div>
                    
                </div>
            </React.Fragment>
        );
    }
}
 
export default Navbar;
