import React, { useEffect, useContext } from 'react';
import Context from '../../store/config/Context';
import { setStar, renderStar } from '../../store/space-background/SpaceBackground';
import StarsBackground from '../../models/StarsBackground';


import './SpaceBackground.scss';

const SpaceBackground = () => {
    const { state, dispatch } = useContext(Context);

    const { spaceBackgroundState } = state;
    const { spaceBackgroundDispatch } = dispatch;

    useEffect(() => {
        const { innerWidth, innerHeight } = window;
        const canvas = document.querySelector('#space-background');

        setStar(spaceBackgroundState, spaceBackgroundDispatch, { canvas, innerWidth, innerHeight });
        

        /*const { innerWidth, innerHeight } = window;
        const canvas = document.querySelector('#space-background');

        canvas.setAttribute('width', innerWidth);
        canvas.setAttribute('height', innerHeight);

        if (canvas) {
            starsBackground = new StarsBackground(50, 300, innerWidth, innerHeight, canvas);

            starsBackground.init();
            starsBackground.animate();
        }*/
    }, []);

    return (
        <canvas data-testid="space-background" id="space-background"></canvas>
    );
};

export default SpaceBackground;