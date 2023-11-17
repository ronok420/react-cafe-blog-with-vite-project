import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className="header-container">
                <h1>Knowledge cafe</h1>

            </div>
            <div className="header-image-container">
               
                <img src="../src/assets/images/profile.png" alt="" />

            </div>
            
        </div>
    );
};

export default Header;