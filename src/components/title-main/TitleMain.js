import React, { useContext } from 'react';
import Context from '../../store/config/Context';

const TitleMain = () => {
    const { state } = useContext(Context);
    const { listState } = state;

    return (
        <h1 data-testid="title-main">
            { listState.title }
        </h1>
    );
};

export default TitleMain;