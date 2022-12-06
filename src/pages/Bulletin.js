import React, { Component } from 'react'
import HeaderAndNavbar from '../components/HeaderAndNavbar';
import Footer from '../components/Footer';

class Bulletin extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <HeaderAndNavbar />
                <div className='footer-fb'>
                    <BulletinContent />
                    <Footer />
                </div>
                
            </React.Fragment>
        );
    }
}

function BulletinContent() {
    return (
        <h1>Bulletin!!!!</h1>
    );
}
 
export default Bulletin;