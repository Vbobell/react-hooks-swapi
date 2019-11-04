import React, { Fragment } from 'react';
import Header from '../../components/header/Header';
import TemplateContext from '../template/TemplateContext';

const Films = () => {
    const templateFilms = {
        title: 'Filmes'
    };

    return (
        <TemplateContext.Provider value={ templateFilms }>
            <Fragment>
                <Header></Header>
            </Fragment>
        </TemplateContext.Provider>
    );
};

export default Films;