import React from 'react';
import { screen } from '@testing-library/react';

import { render } from '../../test/utils/render';

import ListItemFilm from './';

describe('ListItemFilm component', () => {
  test('Check render with default props', async () => {
    const defaultProps = {
      id: 0,
      name: 'Wait..',
      description: '',
    };

    render(<ListItemFilm {...defaultProps} />);

    const defaultText = await screen.findByText(/Wait../i);

    expect(defaultText).toBeVisible();
  });

  test('Check render with custom props', async () => {
    const defaultProps = {
      id: 1,
      name: 'Custom name',
      description: 'Custom description',
    };

    render(<ListItemFilm {...defaultProps} />);

    const customText = await screen.findByText(/Custom name/i);
    const customDescription = await screen.findByText(/Custom description/i);

    expect(customText).toBeVisible();
    expect(customDescription).toBeVisible();
  });
});
