import React from 'react';

const ListItem = props => {
    return (
        <li data-testid="item">
            { props.name }
        </li>
    );
};

export default ListItem;