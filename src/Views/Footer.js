import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <p>Copyright &copy; All Rights Reserved Varden Foods {date()}</p>
        </footer>
    )
}

const date =  () => {
    return new Date().getFullYear();
}


export default Footer;