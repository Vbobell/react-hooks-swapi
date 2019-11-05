import React, { useContext } from 'react';
import TemplateContext from '../../containers/template/TemplateContext';

const List = () => {
    const { list } = useContext(TemplateContext);

    return (
        <ul data-testid="list">
            {
                list.map((item) => {
                    return <li key={item.id}>
                        { item.name }
                    </li>;
                })
            }
        </ul>
    );
};

export default List;