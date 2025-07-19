import React from 'react';
import './Footer.css';

const currentYear = new Date().getFullYear();

const Footer = () => {
    return(
        <footer>
            <p>&copy; Mihiret Bonda <br />
                All rights reserved <span>{currentYear}</span>
            </p>
        </footer>
    )
};

export default Footer;