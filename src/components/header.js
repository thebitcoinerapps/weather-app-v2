import React from 'react';
import { ReactComponent as Logo }from '../logo.svg';

const Header = () => {

    return(
        <div className="header">
        <p className="company-name">Fast Weather</p>
        <Logo className="logo" />
        </div>
    );

};
export default Header;