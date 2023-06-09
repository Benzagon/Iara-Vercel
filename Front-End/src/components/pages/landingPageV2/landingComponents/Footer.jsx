import React from "react";
import logo_text from "../images/logo_txt.svg"

const Footer = () => {

    return (
        <div id="contact" className="footer">
            <div className="footer__logo">
                <img src={logo_text} alt="IARA" />
                <span className="footer__line"></span>
            </div>
            <div>
                <h1>Contact</h1>
                <h2>
                    <a className="" href="mailto:hello@iara.ar">hello@iara.ar</a>
                </h2>
            </div>
            {/* <div className="footer__about">
                <h2>About</h2>
                <h2>Accesibility</h2>
                <h2>Follow us</h2>
            </div>
            <div className="footer__contact">
                <h2>Contact us</h2>
            </div> */}
        </div>
    )
};

export default Footer;