import React from 'react';
import { render } from '@testing-library/react';
import Films from '../modules/containers/films/Films';
import Header from '../modules/components/header/Header';

describe('<Films /> spec', () => {
    it('Render header', () => {
        const { getByTestId } = render(<Films/>);
        const elem = getByTestId('header');

        expect(elem.nodeName == 'HEADER');
    });
});

describe('<Header /> spec', () => {
    it('Render h1', () => {
        const { getByTestId } = render(<Header/>);
        const elem = getByTestId('titleMain');

        expect(elem.nodeName == 'H1');
    });
});