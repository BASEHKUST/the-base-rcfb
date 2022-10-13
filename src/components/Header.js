import React, { Component } from 'react'

import "../styles/Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

class Header extends Component {
    state = {
        show: false
    }

    render() {
        return (
            <React.Fragment>
                <div className='container-fluid p-0 m-0' style={{width: '100%', position: 'sticky', top: '0px'}}>
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

export default Header;

class HeaderMenu extends Component {
    state = {  } 
    render() { 
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
    
}
