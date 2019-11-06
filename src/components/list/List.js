import React, { useContext } from 'react';
import Context from '../../store/config/Context';
import Item from '../../components/item/Item';

const List = () => {
    const { state } = useContext(Context);

    return (
        <ul data-testid="list">
            {
                state.list.map((item) => {
                    return state.listTemplate ? 
                        <state.listTemplate {...item} key={item.id}/> : 
                        <Item  {...item} key={item.id}/>;
                })
            }
        </ul>
    );
};

export default List;