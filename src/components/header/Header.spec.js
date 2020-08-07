import React from 'react';
import { screen } from '@testing-library/react';

import { render } from '../../test/utils/render';

import Header from './';

describe('Header component', () => {
  test('Check render header', async () => {
    render(<Header>Header element</Header>);

    const headerText = await screen.findByText(/Header element/i);

    expect(headerText).toBeVisible();
  });

  test('Check render header logo', async () => {
    render(<Header></Header>);

    const headerLogo = await screen.findByAltText(/logo/i);

    expect(headerLogo).toBeVisible();
  });

  test('Check render header with children element', async () => {
    render(
      <Header>
        <h1>Header element</h1>
      </Header>
    );

    const headerText = await screen.findByText(/Header element/i);

    expect(headerText).toBeVisible();
  });
});
