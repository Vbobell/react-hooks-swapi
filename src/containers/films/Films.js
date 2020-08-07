import React from 'react';
import { withResizeDetector } from 'react-resize-detector';

import { SpaceBackgroundProvider } from '../../store/space-background';

import Header from '../../components/header';
import SectionFilms from '../../components/section-films/SectionFilms';
import SpaceBackground from '../../components/space-background/SpaceBackground';

import '../template.scss';

function FilmsBase({ width, height }) {
  return (
    <div className="main">
      <Header />
      <SectionFilms />
      <SpaceBackgroundProvider>
        <SpaceBackground width={width} height={height} />
      </SpaceBackgroundProvider>
    </div>
  );
}

const Films = withResizeDetector(FilmsBase);

export default Films;
