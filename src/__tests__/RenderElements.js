import React from 'react';
import { render } from '@testing-library/react';
import Films from '../containers/films/Films';
import Header from '../components/header/Header';
import List from '../components/list/List';
import ListItem from '../components/list-item/ListItem';

describe('<Films /> spec', () => {
    it('Render content', async () => {
        const { getByTestId } = render(<Films/>);
        const header = getByTestId('header');
        const list = getByTestId('list');

        expect(header.nodeName == 'HEADER' && list.nodeName == 'UL');
    });
});

describe('<Header /> spec', () => {
    it('Render h1', async () => {
        const { getByTestId } = render(<Header/>);
        const elem = getByTestId('titleMain');

        expect(elem.nodeName == 'H1');
    });
});

describe('<List /> spec', () => {
    it('Render item film', async () => {
        const { getByTestId } = render(<List/>);
        const elem = getByTestId('itemFilm');
    
        expect(elem.nodeName == 'LI');
    });
});

describe('<ListItem /> spec', () => {
    it('Render item list', async () => {
        const { getByTestId } = render(<ListItem/>);
        const elem = getByTestId('item');
    
        expect(elem.nodeName == 'LI');
    });
});