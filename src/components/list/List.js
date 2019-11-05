import React, { useContext } from 'react';
import Context from '../../store/config/Context';

const List = () => {
    const { store } = useContext(Context);

    return (
        <ul data-testid="list">
            {
                store.list.map((item) => {
                    return <li key={item.id}>
                        { item.name }
                    </li>;
                })
            }
        </ul>
    );
};

export default List;