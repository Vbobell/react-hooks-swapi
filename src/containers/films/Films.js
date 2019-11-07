import React, { Fragment, useContext, useEffect } from 'react';
import Context from '../../store/config/Context';
import Header from '../../components/header/Header';
import List from '../../components/list/List';
import SpaceBackground from '../../components/space-background/SpaceBackground';
import { getList } from '../../store/films/Films';

const Films = () => {
    const { dispatch } = useContext(Context);

    useEffect(() => {
        getList(dispatch);
    }, []);

    return (
        <Fragment>
            <Header/>
            <List/>
            <SpaceBackground/>
        </Fragment>
    );
};

export default Films;