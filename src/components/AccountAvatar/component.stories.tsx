import React from 'react';

import { Sections } from '../../modules/sections';

import { AccountAvatar } from '.';

export default {
  title: `${Sections.Elements}|AccountAvatar`,
};

export const Default = () => (
  <div style={{ fontSize: '5em' }}>
    <AccountAvatar value="what is this even" />
    <AccountAvatar value="another text" />
    <AccountAvatar value="and another one" />
    <AccountAvatar value="and one more" />
  </div>
);
