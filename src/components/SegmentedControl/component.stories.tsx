import React, { useState } from 'react';

import { Sections } from '../../modules/sections';

import { SegmentedControl } from './';

export default {
  title: `${Sections.Elements}|SegmentedControl`,
};

export const Simple = () => {
  const [selectedItem, setSelectedItem] = useState('1');

  const items: React.ComponentProps<typeof SegmentedControl>['items'] = [
    { id: '1', target: 'Target 1', content: 'Content 1' },
    { id: '2', target: 'Target 2', content: 'Content 2' },
  ];

  return (
    <SegmentedControl
      items={items}
      selectedItemId={selectedItem}
      onItemSelected={(id) => setSelectedItem(id)}
    />
  );
};
