import React, { useContext } from 'react';
import Context from '../../store/config/Context';

const List = () => {
    const { state } = useContext(Context);

    return (
        <ul data-testid="list">
            {
                state.list.map((item) => {
                    return <li key={item.id}>
                        { item.name }
                    </li>;
                })
            }
        </ul>
    );
};

export default List;