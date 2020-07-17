import React from "react";
import Logo from "../logo/Logo";

function Header() {
  return (
    <header className="container container-header" data-testid="header">
      <Logo />
    </header>
  );
}

export default Header;
