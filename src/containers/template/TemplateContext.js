import React from 'react';

const TemplateContext = React.createContext({
    title: 'default title',
    list: [{
        id: 0,
        name: 'Not itens'
    }]
});

export default TemplateContext;