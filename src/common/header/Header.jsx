import React from 'react';
import './style.scss';
import Nav from './nav/Nav';
const Header = () => {
    return (
        <header id="header">
            <div className="inner">
                <Nav />
            </div>
        </header>
    );
};

export default Header;
