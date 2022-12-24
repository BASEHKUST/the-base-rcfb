import React from "react";
import HeaderAndNavbar from "./HeaderAndNavbar";
import Footer from "./Footer";

function PageWrapper(props) {
    return (
        <React.Fragment>
            <HeaderAndNavbar />
            <div className='footer-fb'>
                {props.children}
                <Footer />
            </div>
        </React.Fragment>
    );
}

export default PageWrapper;