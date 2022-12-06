import React, { Component } from 'react'
import HeaderAndNavbar from '../components/HeaderAndNavbar';
import Footer from '../components/Footer';

class Events extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <HeaderAndNavbar />
                <div className='footer-fb'>
                    <EventsContent />
                    <Footer />
                </div>
            </React.Fragment>
        );
    }
}

function EventsContent() {
    return (
        <h1>Events</h1>
    );
}
 
export default Events;