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
                <div style={{width: '100%', position: 'sticky', top: '0px'}}>
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
                <div className='header-menu'>
                    <div style={{width: '100%', textAlign: 'center', color: '#003366', fontWeight: 'bold', paddingTop: '25px', paddingBottom: '25px'}}>
                        MORE ABOUT HKUST
                    </div>
                    <div className='grid-container' style={{paddingBottom: '25px'}}>
                        <div className='grid-item grid-item-1'>
                            <a href="https://www.ust.hk/news" target="_blank" rel='noreferrer'>UNIVERSITY NEWS</a>
                        </div>
                        <div className='grid-item grid-item-2'>
                            <a href="https://www.ust.hk/academics/list" target="_blank" rel='noreferrer'>ACADEMIC DEPARTMENT A-Z</a>
                        </div>
                        <div className='grid-item grid-item-3'>
                            <a href="https://www.ust.hk/lifehkust" target="_blank" rel='noreferrer'>LIFE@HKUST</a>
                        </div>
                        <div className='grid-item grid-item-4'>
                            <a href="http://library.ust.hk/" target="_blank" rel='noreferrer'>LIBRARY</a>
                        </div>
                        <div className='grid-item grid-item-5'>
                            <a href="https://www.ust.hk/map-directions" target="_blank" rel='noreferrer'>MAPS & DIRECTIONS</a>
                        </div>
                        <div className='grid-item grid-item-6'>
                            <a href="https://hkustcareers.ust.hk/" target="_blank" rel='noreferrer'>CAREERS AT HKUST</a>
                        </div>
                        <div className='grid-item grid-item-7'>
                            <a href="https://facultyprofiles.ust.hk/" target="_blank" rel='noreferrer'>FACULTY PROFILES</a>
                        </div>
                        <div className='grid-item grid-item-8'>
                            <a href="https://www.ust.hk/about" target="_blank" rel='noreferrer'>ABOUT HKUST</a>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}