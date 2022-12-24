import React, { Component } from 'react'
import "../styles/Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import "../styles/Navbar.css"
import TheBaseLogo from '../images/the-base-logo.png'
import ECLogo from '../images/EC_logo.png'
import { Link } from 'react-router-dom'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function HeaderAndNavbar() {
    return (
        <React.Fragment>
            <Header />
            <Navbar />
        </React.Fragment>
    );
}

export default HeaderAndNavbar;

class Header extends Component {
    state = {
        show: false
    }

    render() {
        return (
            <React.Fragment>
                <div className='container-fluid p-0 m-0' style={{width: '100%', position: 'sticky', top: '0px', zIndex: '10'}}>
                    {this.state.show && <HeaderMenu />}
                    <div className='header-background'>
                        <div><a href="https://ec.hkust.edu.hk" target="_blank" rel='noreferrer' className='header-ec'>Entrepreneurship Center</a></div>
                        <div onClick={() => this.setState({show: !this.state.show})} className='header-anchor'><span className='header-arrow'><FontAwesomeIcon icon={this.state.show?faChevronDown:faChevronUp} /></span></div>
                        <div className='header-right-box'></div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

function HeaderMenu() {
    return (
        <React.Fragment>
            <div className="header-menu">
                <div style={{width: '100%', textAlign: 'center', color: '#003366', fontWeight: 'bold', paddingTop: '15px', paddingBottom: '15px'}}>
                    MORE ABOUT HKUST
                </div>
                <div className='container' style={{paddingBottom: '0px'}}>
                    <div className='row justify-content-center'>
                        <div className='col-md text-center px-3 pb-3'>
                            <a href="https://www.ust.hk/news" target="_blank" rel='noreferrer' className='header-a'>UNIVERSITY NEWS</a>
                        </div>
                        <div className='col-md text-center px-3 pb-3'>
                            <a href="https://www.ust.hk/academics/list" target="_blank" rel='noreferrer' className='header-a'>ACADEMIC DEPARTMENT A-Z</a>
                        </div>
                        <div className='col-md text-center px-3 pb-3'>
                            <a href="https://www.ust.hk/lifehkust" target="_blank" rel='noreferrer' className='header-a'>LIFE@HKUST</a>
                        </div>
                        <div className="col-md text-center px-3 pb-3">
                            <a href="http://library.ust.hk/" target="_blank" rel='noreferrer' className='header-a'>LIBRARY</a>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md text-center px-3 pb-3">
                            <a href="https://www.ust.hk/map-directions" target="_blank" rel='noreferrer' className='header-a'>MAPS & DIRECTIONS</a>
                        </div>
                        <div className="col-md text-center px-3 pb-3">
                            <a href="https://hkustcareers.ust.hk/" target="_blank" rel='noreferrer' className='header-a'>CAREERS AT HKUST</a>
                        </div>
                        <div className="col-md text-center px-3 pb-3">
                            <a href="https://facultyprofiles.ust.hk/" target="_blank" rel='noreferrer' className='header-a'>FACULTY PROFILES</a>
                        </div>
                        <div className="col-md text-center px-3 pb-3">
                            <a href="https://www.ust.hk/about" target="_blank" rel='noreferrer' className='header-a'>ABOUT HKUST</a>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

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

function DropdownContent() {
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