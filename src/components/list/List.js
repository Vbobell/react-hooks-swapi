import React, { useContext } from 'react';
import Context from '../../store/config/Context';
import ListItem from '../../components/list-item/ListItem';

const List = () => {
    const { state } = useContext(Context);

    return (
        <ul data-testid="list">
            {
                state.list.map((item) => {
                    return state.listTemplate ? 
                        <state.listTemplate {...item} key={item.id}/> : 
                        <ListItem  {...item} key={item.id}/>;
                })
            }
        </ul>
    );
};

export default List;