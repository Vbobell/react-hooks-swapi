import React from 'react';

import LogoSvg from '../../../public/image/svg/Logo.svg';

const Logo = () => {
    return (
        <figure className="content-image" data-testid="logo">
            <LogoSvg />
        </figure>
    );
};

export default Logo;