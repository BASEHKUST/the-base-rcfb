import React, { Component } from 'react'

import '../styles/Footer.css'
import BaseLogo from '../images/BASE Logo White.png'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-links'>
                <a href="https://www.instagram.com/the_base_ust/" target="_blank" rel="noopener noreferrer">
                    <div className='footer-link-container'>
                        
                            <i class="fa-brands fa-instagram fa-3x footer-links-img"></i>
                            <span className='footer-links-text'>LEARN MORE ABOUT <br />US ON INSTAGRAM!</span>
                        
                    </div>
                </a>
                <a href="mailto: base.ust.hk" rel="noopener noreferrer">
                    <div className='footer-link-container'>
                        <i class="fa-solid fa-envelope fa-3x footer-links-img"></i>
                        <span className='footer-links-text'>NEED HELP WITH YOUR <br />STARTUP? ASK US ANYTHING!</span>
                    </div>
                </a>
            </div>
            <div className='footer-base-logo'>
                <img src={BaseLogo} alt=""/>
            </div>
            <div className='footer-copyright'>&#169; The BASE, HKUST. All Rights Reserved.</div>
        </div>
    )
}

export default Footer;