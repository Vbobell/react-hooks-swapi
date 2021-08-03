import React from 'react';
import { withResizeDetector } from 'react-resize-detector';
import { SpaceBackgroundProvider, SpaceBackground } from '@vbobel/react-space-background';

import Header from '../../components/header';
import SectionFilms from '../../components/section-films';

import '../template.scss';

function FilmsBase({ width, height }) {
  return (
    <div className="main">
      <Header />
      <SectionFilms />
      <SpaceBackgroundProvider>
        <SpaceBackground id="space-background" width={width} height={height} />
      </SpaceBackgroundProvider>
    </div>
  );
}

const Films = withResizeDetector(FilmsBase);

export default Films;
