import React from "react";

import LogoSvg from "../../static/image/svg/Logo.svg";

const Logo = () => {
  return (
    <figure className="content-image" data-testid="logo">
      <img src={LogoSvg} alt="logo" />
    </figure>
  );
};

export default Logo;
