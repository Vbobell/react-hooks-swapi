import React, { Fragment, useState } from 'react';
import TemplateContext from '../template/TemplateContext';
import Header from '../../components/header/Header';
import List from '../../components/list/List';

const Films = () => {
    const templateFilms = {
        title: 'Filmes',
        list: [{
            id: 1,
            name: 'Filme 1'
        }]
    };

    return (
        <TemplateContext.Provider value={ templateFilms }>
            <Fragment>
                <Header></Header>
                <List></List>
            </Fragment>
        </TemplateContext.Provider>
    );
};

export default Films;