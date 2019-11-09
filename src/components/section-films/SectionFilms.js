import React from 'react';
import List from '../list/List';
import TitleMain from '../title-main/TitleMain';

const SectionFilms = () => {
    return (
        <section className="container container-section" data-testid="section-films">
            <TitleMain/>
            <List/>
        </section>
    );
};

export default SectionFilms;