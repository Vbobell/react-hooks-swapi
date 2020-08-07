import React from 'react';
import { screen } from '@testing-library/react';

import { render } from '../../../test/utils/render';

import Logo from './';

describe('Logo component', () => {
  test('Check render logo', async () => {
    render(<Logo></Logo>);

    const logo = await screen.findByAltText(/logo/i);

    expect(logo).toBeVisible();
  });
});
