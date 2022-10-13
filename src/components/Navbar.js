import React, { Component } from 'react'
import "../styles/Navbar.css"

import TheBaseLogo from '../images/the-base-logo.png'
import ECLogo from '../images/EC_logo.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

class Navbar extends Component {
    state = {
        show: false /* for mobile only */
    } 
    render() { 
        return (
            <React.Fragment>
                <div className='container-fluid p-0 m-0 navbar-container'>
                    <div className='d-flex flex-column justify-content-between'>
                        <div style={{width: '20px', height: '1px'}}></div>
                        <div className='navbar-logo-container'>
                            <img src={TheBaseLogo} alt="The Base Logo" className='the-base-logo navbar-logo'/>
                            <div className='navbar-sep'></div>
                            <img src={ECLogo} alt="EC Logo" className='ec-logo navbar-logo' />
                        </div>
                        <div style={{width: '20px', height: '1px'}}></div>
                    </div>
                    
                    <div className='h-100 d-flex flex-row'>
                        <div className='navbar-right-container'>
                            <nav style={{padding: '0', margin: '0'}}>
                                <ul style={{listStyle: 'none', marginBottom: '7px', marginRight: '20px'}}>
                                    <div className='navbar-links-container d-flex flex-wrap'>
                                        <li><Link to="/" className='navbar-link'>Home</Link></li>
                                        <li><Link to="/about" className='navbar-link'>About</Link></li>
                                        <li><Link to="/events" className='navbar-link'>Events</Link></li>
                                        <li><Link to="/bulletin" className='navbar-link'>Bulletin</Link></li>
                                        <li><Link to="/Broadcast" className='navbar-link'>Broadcast</Link></li>
                                        <li><Link to="/team" className='navbar-link'>TEAM</Link></li>
                                        <li><Link to="/startup-internship" className='navbar-link'>Startup Internship</Link></li>
                                    </div>
                                </ul>
                            </nav>
                        </div>
                        <div className="navbar-dropdown h-100 d-flex flex-column justify-content-between">
                            <div style={{width: '20px', height: '1px'}}></div>
                            <button onClick={() => {this.setState({show: !this.state.show})}} className='navbar-dropdown-button'>
                                <FontAwesomeIcon icon={faBars} />
                            </button>
                            <div style={{width: '20px', height: '1px'}}></div>
                            { this.state.show && <DropdownContent /> }
                        </div>
                    </div>
                    
                </div>
            </React.Fragment>
        );
    }
}

class DropdownContent extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <div className='navbar-dropdown-content'>
                    <Link to="/" className='navbar-link'>Home</Link>
                    <Link to="/about" className='navbar-link'>About</Link>
                    <Link to="/events" className='navbar-link'>Events</Link>
                    <Link to="/bulletin" className='navbar-link'>Bulletin</Link>
                    <Link to="/Broadcast" className='navbar-link'>Broadcast</Link>
                    <Link to="/team" className='navbar-link'>TEAM</Link>
                    <Link to="/startup-internship" className='navbar-link'>Startup Internship</Link>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Navbar;
