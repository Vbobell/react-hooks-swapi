import React from 'react';
import { screen } from '@testing-library/react';

import { render } from '../../test/utils/render';

import TitleMain from './';

describe('TitleMain component', () => {
  test('Check render title main', async () => {
    render(<TitleMain>title element</TitleMain>);

    const title = await screen.findByText(/title element/i);

    expect(title).toBeVisible();
  });

  test('Check render title with children element', async () => {
    render(
      <TitleMain>
        <span>title element</span>
      </TitleMain>
    );

    const title = await screen.findByText(/title element/i);

    expect(title).toBeVisible();
  });
});
