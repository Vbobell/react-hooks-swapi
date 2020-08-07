import React from 'react';
import Logo from './logo';

export function Header({ children }) {
  return (
    <header className="container container-header">
      <Logo />
      {children}
    </header>
  );
}

export default Header;
