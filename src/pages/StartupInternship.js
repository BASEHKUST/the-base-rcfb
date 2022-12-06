import React, { Component } from 'react'
import HeaderAndNavbar from '../components/HeaderAndNavbar';
import Footer from '../components/Footer';

class StartupInternship extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <HeaderAndNavbar />
                <div className='footer-fb'>
                    <StartupInternshipContent />
                    <Footer />
                </div>
                
            </React.Fragment>
        );
    }
}

function StartupInternshipContent() {
    return (
        <h1>Startup Internship</h1>
    );
}
 
export default StartupInternship;