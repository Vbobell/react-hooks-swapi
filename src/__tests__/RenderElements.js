import React from 'react';
import { render } from '@testing-library/react';
import Films from '../containers/films/Films';
import Header from '../components/header/Header';
import List from '../components/list/List';
import SpaceBackground from '../components/space-background/SpaceBackground';

describe('<Films /> spec', () => {
    it('Render content', async () => {
        const { getByTestId } = render(<Films/>);
        const header = getByTestId('header');
        const sectionFilms = getByTestId('section-films');
        const spaceBackground = getByTestId('space-background');

        expect(
            header.nodeName == 'HEADER' && 
            sectionFilms.nodeName == 'SECTION' &&
            spaceBackground.nodeName == 'CANVAS'
        );
    });
});

describe('<Header /> spec', () => {
    it('Render logo', async () => {
        const { getByTestId } = render(<Header/>);
        const elem = getByTestId('logo');

        expect(elem.nodeName == 'FIGURE');
    });
});

describe('<List /> spec', () => {
    it('Render item list', async () => {
        const { getByTestId } = render(<List/>);
        const elem = getByTestId('item');
    
        expect(elem.nodeName == 'LI');
    });
});

describe('<SpaceBackground /> spec', () => {
    it('Render space background', async () => {
        const { getByTestId } = render(<SpaceBackground/>);
        const elem = getByTestId('space-background');
    
        expect(elem.nodeName == 'CANVAS');
    });
});