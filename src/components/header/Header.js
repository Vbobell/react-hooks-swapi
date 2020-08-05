import React from 'react';
import Logo from '../logo/Logo';

export function Header({ children }) {
  return (
    <header className="container container-header">
      <Logo />
      {children}
    </header>
  );
}
