import React from 'react';

import { Sections } from '../../modules/sections';

import { QRCode } from './';

export default {
  component: QRCode,
  title: `${Sections.Elements}/QRCode`,
  parameters: {
    controls: {
      disabled: true,
    },
  },
};

export const Default = () => (
  <>
    <div style={{ marginBottom: '1em' }}>
      <QRCode value="a value here" />
    </div>
    <div style={{ marginBottom: '1em' }}>
      <QRCode value="a value here" style={{ fontSize: 100 }} />
    </div>
    <QRCode value="a value here" style={{ fontSize: 300 }} />
  </>
);

export const WithFrame = () => (
  <>
    <div style={{ marginBottom: '1em' }}>
      <QRCode value="a value here" hasFrame />
    </div>
    <div style={{ marginBottom: '1em' }}>
      <QRCode value="a value here" style={{ fontSize: 100 }} hasFrame />
    </div>
    <QRCode value="a value here" style={{ fontSize: 300 }} hasFrame />
  </>
);
