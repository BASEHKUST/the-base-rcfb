import React, { Component } from 'react'
import HeaderAndNavbar from '../components/HeaderAndNavbar';

class Home extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <HeaderAndNavbar />
                <h1>HOME PAGE</h1>
            </React.Fragment>
        );
    }
}
 
export default Home;