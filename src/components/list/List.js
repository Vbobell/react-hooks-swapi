import React, { useContext } from 'react';
import Context from '../../store/config/Context';
import ListItem from '../../components/list-item/ListItem';

const List = () => {
    const { state } = useContext(Context);
    const { listState } = state;

    return (
        <ul data-testid="list">
            {
                listState.list.map((item) => {
                    return listState.listTemplate ? 
                        <listState.listTemplate {...item} key={item.id}/> : 
                        <ListItem  {...item} key={item.id}/>;
                })
            }
        </ul>
    );
};

export default List;