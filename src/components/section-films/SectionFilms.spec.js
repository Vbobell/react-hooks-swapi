import React from 'react';
import { screen } from '@testing-library/react';
import { Provider as GraphqlProvider } from 'urql';
import { fromValue } from 'wonka';

import { render } from '../../test/utils/render';

import { FilmsProvider } from '../../provider/films';

import SectionFilms from './';

describe('SectionFilms component', () => {
  test('Check get films success', async () => {
    const mockClient = {
      executeQuery: jest.fn(() => {
        return fromValue({
          data: {
            films: [{ episode_id: 1, title: 'Mock Title', opening_crawl: 'Mock Description' }],
          },
        });
      }),
    };

    render(
      <GraphqlProvider value={mockClient}>
        <FilmsProvider>
          <SectionFilms />
        </FilmsProvider>
      </GraphqlProvider>
    );

    const title = await screen.findByText(/Films/i);
    const titleItem = await screen.findByText(/Mock Title/i);
    const descriptionItem = await screen.findByText(/Mock Description/i);

    expect(title).toBeVisible();
    expect(titleItem).toBeVisible();
    expect(descriptionItem).toBeVisible();
  });
});
