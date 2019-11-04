import React from 'react';
import { render } from '@testing-library/react';
import Films from '../modules/containers/films/Films.js';

describe('<Films /> spec', () => {
    it('Render header', () => {
        const { getByTestId } = render(<Films/>);
        const elem = getByTestId('header');

        expect(elem.nodeName == 'HEADER');
    });
});