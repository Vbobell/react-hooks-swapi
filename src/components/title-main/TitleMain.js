import React, { useContext } from 'react';
import Context from '../../store/config/Context';

const TitleMain = () => {
    const { store } = useContext(Context);

    return (
        <h1 data-testid="titleMain">
            { store.title }
        </h1>
    );
};

export default TitleMain;