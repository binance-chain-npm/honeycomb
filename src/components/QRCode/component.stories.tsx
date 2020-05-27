import React from 'react';

import { Sections } from '../../modules/sections';

import { QRCode } from './';

export default {
  title: `${Sections.Elements}|QRCode`,
};

export const Default = () => (
  <>
    <div style={{ marginBottom: '1em' }}>
      <QRCode value="a value here" style={{ fontSize: 100 }} />
    </div>
    <QRCode value="a value here" style={{ fontSize: 300 }} />
  </>
);

export const WithFrame = () => (
  <>
    <div style={{ marginBottom: '1em' }}>
      <QRCode value="a value here" style={{ fontSize: 100 }} hasFrame />
    </div>
    <QRCode value="a value here" style={{ fontSize: 300 }} hasFrame />
  </>
);
