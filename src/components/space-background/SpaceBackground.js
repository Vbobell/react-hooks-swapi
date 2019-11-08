import React, { useEffect, useState } from 'react';
import StarsBackground from '../../models/StarsBackground';

import './SpaceBackground.scss';

const SpaceBackground = () => {
    let starsBackground;

    useEffect(() => {
        const { innerWidth, innerHeight } = window;
        const canvas = document.querySelector('#space-background');

        canvas.setAttribute('width', innerWidth);
        canvas.setAttribute('height', innerHeight);

        if (canvas) {
            starsBackground = new StarsBackground(50, 300, innerWidth, innerHeight, canvas);

            starsBackground.init();
            starsBackground.animate();
        }
    }, []);

    return (
        <canvas data-testid="space-background" id="space-background"></canvas>
    );
};

export default SpaceBackground;