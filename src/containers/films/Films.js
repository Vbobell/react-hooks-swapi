import React, { Fragment, useContext, useEffect } from 'react';
import Context from '../../store/config/Context';
import Header from '../../components/header/Header';
import SectionFilms from '../../components/section-films/SectionFilms';
import SpaceBackground from '../../components/space-background/SpaceBackground';
import { getList } from '../../store/films/Films';

import '../Containers.scss';

const Films = () => {
    const { dispatch } = useContext(Context);

    useEffect(() => {
        //getList(dispatch);
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