import React from 'react';
import { render } from '@testing-library/react';
import Films from '../containers/films/Films';
import Header from '../components/header/Header';
import TitleMain from '../components/title-main/TitleMain';
import List from '../components/list/List';

describe('<Films /> spec', () => {
    it('Render header', () => {
        const { getByTestId } = render(<Films/>);
        const elem = getByTestId('header');

        expect(elem.nodeName == 'HEADER');
    });

    it('Render list', () => {
        const { getByTestId } = render(<List/>);
        const elem = getByTestId('list');

        expect(elem.nodeName == 'UL');
    });
});

describe('<Header /> spec', () => {
    it('Render h1', () => {
        const { getByTestId } = render(<Header/>);
        const elem = getByTestId('titleMain');

        expect(elem.nodeName == 'H1');
    });
});

describe('<TitleMain /> spec', () => {
    it('Check text h1', () => {
        const { getByTestId } = render(<TitleMain/>);
        const title = getByTestId('titleMain');

        expect(title.textContent).toMatch(/default title/);
    });
});