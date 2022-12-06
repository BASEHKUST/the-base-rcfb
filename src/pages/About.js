import React, { Component } from 'react'
import HeaderAndNavbar from '../components/HeaderAndNavbar';
import '../styles/About.css'

import TM from '../images/AboutPage/TeamMembers';
import Arrow from '../images/AboutPage/arrow.svg'
import Mascot from '../images/AboutPage/mascot.svg'
import Footer from '../components/Footer'

class About extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <HeaderAndNavbar />
                <div className='footer-fb'>
                    <AboutContent />
                    <Footer />
                </div>
            </React.Fragment>
        );
    }
}

function AboutContent() {
    return (
        <div>
            <LearnAboutOurTeam />
            <DidYouKnowThat />
            <MeetTheTeam />
        </div>
    )
}

function LearnAboutOurTeam() {
    return (
        <React.Fragment>
            <h1 className='about-title'>Learn about our teams! </h1>
            <h2 className='about-subtitle'>one team, one <span className='about-dream'>dream</span>. </h2>
            <div className='about-description'>
                <p className='about-description-text'>
                    We are a student-<br />run community <br />aiming to promote <br />Entrepreneurship <br />Education in <br />HKUST. 
                    <i class="fa-solid fa-arrow-right" style={{ paddingLeft: '60px' }}></i>
                </p>
                <img className='about-arrow' src={Arrow} alt="" />
                <img className='about-mascot-1' src={Mascot} alt="" />
                <img className='about-mascot-2' src={Mascot} alt="" />
            </div>
        </React.Fragment>
    )
}

function DidYouKnowThat() {
    return (
        <React.Fragment>
            <div className='about-did-you-know'>Did you know that...</div>
            <div className='about-did-you-know-1'>The BASE was first founded in <span style={{color: '#F1C718'}}>2015!</span> </div>
            <div className='about-did-you-know-2'>The BASE is <span style={{color: '#59B4E8'}}>one of the first</span> student led groups that <br />focuses on entrepreneurship and innovation! </div>
            <div className='about-did-you-know-3'>The BASE has now helped more than <span style={{ color: '#F1C718' }}>50+ startups. </span> </div>
        </React.Fragment>
    )
}

function MeetTheTeam() {
    const Color = {
        blue: '#2B7DC9', 
        yellow: '#F4C51E', 
        red: '#B0140A', 
        green: '#21A797'
    }
    return (
        <React.Fragment>
            <div className='about-meet-the-team'>Meet the team! </div>
            <div className='about-profiles' style={{ marginTop: '70px' }}>
                <Profile name='Lily' backgroundColor={Color.blue} />
                <Profile name='Michelle' backgroundColor={Color.blue} />
                <Profile name='Amanda' backgroundColor={Color.blue} />
                <Profile name='Kate' backgroundColor={Color.blue} />
            </div>
            <div className='about-profiles' style={{ marginTop: '81px' }}>
                <Profile name='Papa' backgroundColor={Color.yellow} />
                <Profile name='Jackson' backgroundColor={Color.yellow} />
                <Profile name='Hugo' backgroundColor={Color.yellow} />
                <Profile name='Kamakshi' backgroundColor={Color.yellow} />
                <Profile name='Eric' backgroundColor={Color.yellow} />
            </div>
            <div className='about-profiles' style={{ marginTop: '40px' }}>
                <Profile name='Maggie' backgroundColor={Color.yellow} />
                <Profile name='Gia' backgroundColor={Color.yellow} />
                <Profile name='Yehan' backgroundColor={Color.yellow} />
                <Profile name='Kathy' backgroundColor={Color.yellow} />
                <Profile name='Chelsea' backgroundColor={Color.yellow} />
            </div>
            <div className='about-profiles' style={{ marginTop: '81px' }}>
                <Profile name='Keane' backgroundColor={Color.red} />
                <Profile name='Fortino' backgroundColor={Color.red} />
                <Profile name='Sandeepti' backgroundColor={Color.red} />
                <Profile name='Glen' backgroundColor={Color.red} />
                <Profile name='Anson' backgroundColor={Color.red} />
            </div>
            <div className='about-profiles' style={{ marginTop: '81px' }}>
                <Profile name='Erin' backgroundColor={Color.green} />
                <Profile name='Justin' backgroundColor={Color.green} />
                <Profile name='Nathan' backgroundColor={Color.green} />
                <Profile name='Cayenne' backgroundColor={Color.green} />
                <Profile name='Roi' backgroundColor={Color.green} />
            </div>
            <div className='about-profiles' style={{ marginTop: '40px' }}>
                <Profile name='Ivy' backgroundColor={Color.green} />
                <Profile name='Jenny' backgroundColor={Color.green} />
                <Profile name='Pranav' backgroundColor={Color.green} />
                <Profile name='Amber' backgroundColor={Color.green} />
            </div>
            <div className='about-profiles' style={{ marginTop: '40px', marginBottom: '100px' }}>
                <Profile name='Wanci' backgroundColor={Color.green} />   
                <Profile name='Rainbow' backgroundColor={Color.green} />
                <Profile name='Sherry' backgroundColor={Color.green} />
            </div>
        </React.Fragment>
    )
}

function Profile(props) {
    return (
        <React.Fragment>
            <div className='about-profile'>
                <img src={TM[props.name].imgURL} alt="" className='about-profile-img' />
                <div className='about-profile-description' style={{backgroundColor: props.backgroundColor}}>
                    {props.name}<br />
                    {TM[props.name].role}
                </div>
            </div>
        </React.Fragment>
    )
}
 
export default About;