import React from 'react';
import styled from 'styled-components';
import { em } from 'polished';

import { decorators } from '../../modules/decorators';
import { Sections } from '../../modules/sections';

import { QRCode } from './';

export default {
  component: QRCode,
  decorators,
  title: `${Sections.Elements}/QRCode`,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => em(theme.honeycomb.size.normal)};
`;

export const Default = () => (
  <>
    <Container>
      <QRCode value="a value here" />
    </Container>
    <Container>
      <QRCode value="a value here" style={{ fontSize: 100 }} />
    </Container>
    <QRCode value="a value here" style={{ fontSize: 300 }} />
  </>
);

export const WithFrame = () => (
  <>
    <Container>
      <QRCode value="a value here" hasFrame />
    </Container>
    <Container>
      <QRCode value="a value here" style={{ fontSize: 100 }} hasFrame />
    </Container>
    <QRCode value="a value here" style={{ fontSize: 300 }} hasFrame />
  </>
);
