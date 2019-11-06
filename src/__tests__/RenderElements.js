import React from 'react';
import { render } from '@testing-library/react';
import Films from '../containers/films/Films';
import Header from '../components/header/Header';
import List from '../components/list/List';

describe('<Films /> spec', () => {
    it('Render header', async () => {
        const { getByTestId } = render(<Films/>);
        const elem = getByTestId('header');

        expect(elem.nodeName == 'HEADER');
    });

    it('Render list', async () => {
        const { getByTestId } = render(<List/>);
        const elem = getByTestId('list');

        expect(elem.nodeName == 'UL');
    });
});

describe('<Header /> spec', () => {
    it('Render h1', async () => {
        const { getByTestId } = render(<Header/>);
        const elem = getByTestId('titleMain');

        expect(elem.nodeName == 'H1');
    });
});