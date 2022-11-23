import React, { Component } from 'react'
import HeaderAndNavbar from '../components/HeaderAndNavbar';
import HomeBlueBar from '../components/HomeBlueBar'

class Home extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <HeaderAndNavbar />
                <h1>HOME PAGE</h1>
                <HomeBlueBar title = "Hello ! We are The BASE Entrepreneurship Ambassadors!" content = "We are a group of students at HKUST who aim to educate what entrepreneurship means and promote entrepreneurship culture whilst providing a dedicated coworking space"/> 
            </React.Fragment>
        );
    }
}
 
export default Home;