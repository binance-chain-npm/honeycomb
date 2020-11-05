import React from 'react';
import { createGlobalStyle as css } from 'styled-components';

import { Sections } from '../../modules/sections';

import { Space } from './';

export default {
  component: Space,
  title: `${Sections.Elements}/Space`,
  parameters: {
    controls: {
      disabled: true,
    },
  },
};

const Global = css`
  body {
    margin: 0;
  }
`;

export const Default = () => (
  <>
    <Global />
    <div style={{ display: 'flex', width: '100vw', height: '100vh', flexDirection: 'column' }}>
      <div style={{ display: 'flex' }}>
        <span>a</span>
        <Space size="huge" />
        <span>b</span>
        <Space size="fill" />
        <span>c</span>
      </div>
      <Space size="fill" />
      <div style={{ display: 'flex' }}>
        <span>d</span>
        <Space size="fill" />
        <span>e</span>
        <Space size="fill" />
        <span>f</span>
      </div>
    </div>
  </>
);
