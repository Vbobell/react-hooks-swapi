import React, { Fragment, useContext, useEffect } from 'react';
import Context from '../../store/config/Context';
import Header from '../../components/header/Header';
import List from '../../components/list/List';
import { getList } from '../../store/films/Films';

const Films = () => {
    const { store, dispatch } = useContext(Context);

    useEffect(() => {
        getList(dispatch);
    }, [store]);

    return (
        <Fragment>
            <Header></Header>
            <List></List>
        </Fragment>
    );
};

export default Films;