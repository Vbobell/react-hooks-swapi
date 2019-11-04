import React from 'react';
import TemplateContext from '../../containers/template/TemplateContext';

const TitleMain = () => {
    return (
        <TemplateContext.Consumer> 
            {
                ({title}) => (
                    <h1 data-testid="titleMain">{ title }</h1>
                )
            }
        </TemplateContext.Consumer>
    );
};

export default TitleMain;