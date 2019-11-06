import React, { useContext } from 'react';
import Context from '../../store/config/Context';

const TitleMain = () => {
    const { state } = useContext(Context);

    return (
        <h1 data-testid="titleMain">
            { state.title }
        </h1>
    );
};

export default TitleMain;