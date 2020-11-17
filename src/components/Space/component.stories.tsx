import React from 'react';
import styled, { createGlobalStyle as css } from 'styled-components';

import { Sections } from '../../modules/sections';

import { Space } from './';

export default {
  component: Space,
  title: `${Sections.Elements}/Space`,
};

const Global = css`
  body {
    margin: 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 2rem);
  height: calc(100vh - 2rem);
`;

export const Default = () => (
  <>
    <Global />
    <Container>
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
    </Container>
  </>
);
