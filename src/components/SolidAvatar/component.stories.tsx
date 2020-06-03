import React from 'react';

import { Sections } from '../../modules/sections';

import { SolidAvatar } from '.';

export default {
  title: `${Sections.Elements}|SolidAvatar`,
};

export const Default = () => (
  <div style={{ fontSize: '5em' }}>
    <SolidAvatar value="9" />
    <SolidAvatar value="4" initial="鲁" />
    <SolidAvatar value="30" initial="A" />
    <SolidAvatar value="1" />
    <SolidAvatar value="21" />
    <SolidAvatar value="38" />
    <SolidAvatar value="31" />
    <SolidAvatar value="3" />
    <SolidAvatar value="26" />
    <SolidAvatar value="7" />
    <SolidAvatar value="5" />
    <SolidAvatar value="0" />
    <SolidAvatar value="6" />
    <SolidAvatar value="2" />
    <SolidAvatar value="50" />
    <SolidAvatar value="8" />
  </div>
);
