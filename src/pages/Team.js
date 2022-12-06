import React, { Component } from 'react'
import HeaderAndNavbar from '../components/HeaderAndNavbar';
import Footer from '../components/Footer';

class Team extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <HeaderAndNavbar />
                <div className='footer-fb'>
                    <TeamContent />
                    <Footer />
                </div>
            </React.Fragment>
        );
    }
}

function TeamContent() {
    return (
        <h1>TEAM</h1>
    );
}
 
export default Team;