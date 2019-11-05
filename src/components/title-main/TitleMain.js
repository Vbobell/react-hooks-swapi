import React, { useContext } from 'react';
import TemplateContext from '../../containers/template/TemplateContext';

const TitleMain = () => {
    const { title } = useContext(TemplateContext);

    return (
        <h1 data-testid="titleMain">
            { title }
        </h1>
    );
};

export default TitleMain;