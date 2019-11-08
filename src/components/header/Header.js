import React from 'react';
import Logo from '../logo/Logo';

const Header = () => {
    return (
        <header className="container container-header" data-testid="header">
            <Logo />
        </header>
    );
};

export default Header;