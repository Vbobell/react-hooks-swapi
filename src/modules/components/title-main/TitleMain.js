import React, { useContext } from 'react';
import TemplateContext from '../../containers/template/TemplateContext';

const TitleMain = () => {
    const template = useContext(TemplateContext);

    return (
        <h1 data-testid="titleMain">
            { template.title }
        </h1>
    );
};

export default TitleMain;