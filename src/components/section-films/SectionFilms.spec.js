import React from 'react';
import { screen } from '@testing-library/react';

import { render } from '../../test/utils/render';
import { axiosMock } from '../../test/utils/axios';

import { FilmsProvider } from '../../provider/films';

import SectionFilms from './';

describe('SectionFilms component', () => {
  test('Check get films success', async () => {
    axiosMock.onGet('https://swapi.dev/api/films').replyOnce(200, {
      results: [{ episode_id: 1, title: 'Mock Title', opening_crawl: 'Mock Description' }],
    });

    render(
      <FilmsProvider>
        <SectionFilms />
      </FilmsProvider>
    );

    const title = await screen.findByText(/Films/i);
    const titleItem = await screen.findByText(/Mock Title/i);
    const descriptionItem = await screen.findByText(/Mock Description/i);

    expect(title).toBeVisible();
    expect(titleItem).toBeVisible();
    expect(descriptionItem).toBeVisible();
  });
});
