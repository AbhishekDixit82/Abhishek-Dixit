import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Abhishek Dixit</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>

                    <li>
                        <a href="#certificates" className="footer__link">Certificates</a>
                    </li>
                    <li>
                        <a href="https://github.com/AbhishekDixit82" className="footer__link">Projects</a>
                    </li>
                </ul>
                <div className="footer__social">
                    <a href="https://www.instagram.com/i_abhishekdixit/" className="footer__social-link" rel="noreferrer" target="_blank">
                        <i class="bx bxl-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/abhishek-dixit-279baa18a/" className="footer__social-link" rel="noreferrer" target="_blank">
                        <i class="bx bxl-linkedin"></i>
                    </a>
                    <a href="https://github.com/AbhishekDixit82" className="footer__social-link" rel="noreferrer" target="_blank">
                        <i class="bx bxl-github"></i>
                    </a>
                </div>
                <hr />
                <span className="footer__copy">
                    &#169; AbhishekDixit | All rights reserved
                </span>
            </div>
        </footer>
    );
}
export default Footer;