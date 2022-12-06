import React, { Component } from 'react'
import HeaderAndNavbar from '../components/HeaderAndNavbar';
import Footer from '../components/Footer';

class Broadcast extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <HeaderAndNavbar />
                <div className='footer-fb'>
                    <BroadcastContent />
                    <Footer />
                </div>
            </React.Fragment>
        );
    }
}

function BroadcastContent() {
    return (
        <h1>Broadcast</h1>
    );
}
 
export default Broadcast;