import React, { Component } from 'react'
import Header from './Header';
import Navbar from './Navbar';

class HeaderAndNavbar extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <Header />
                <Navbar />
            </React.Fragment>
        );
    }
}
 
export default HeaderAndNavbar;