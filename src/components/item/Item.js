import React from 'react';

const Item = props => {
    return (
        <li data-testid="item">
            { props.name }
        </li>
    );
};

export default Item;