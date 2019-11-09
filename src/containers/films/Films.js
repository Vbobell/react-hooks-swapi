import React, { Fragment, useContext, useEffect } from 'react';
import Context from '../../store/config/Context';
import Header from '../../components/header/Header';
import SectionFilms from '../../components/section-films/SectionFilms';
import SpaceBackground from '../../components/space-background/SpaceBackground';
import { getList } from '../../store/films/Films';
import { setCanvasDimensions } from '../../store/space-background/SpaceBackground';

import '../template.scss';

const Films = () => {
    const { state, dispatch } = useContext(Context);
    const { spaceBackgroundState } = state;
    const { filmsDispatch, spaceBackgroundDispatch } = dispatch;

    const initFilms = async () => {
        await getList(filmsDispatch);

        const { clientWidth, clientHeight } = document.body;
        await setCanvasDimensions(spaceBackgroundState, spaceBackgroundDispatch, { clientWidth, clientHeight });
    };

    useEffect(() => {
        initFilms();
    }, []);

    return (
        <Fragment>
            <Header/>
            <SectionFilms/>
            <SpaceBackground/>
        </Fragment>
    );
};

export default Films;