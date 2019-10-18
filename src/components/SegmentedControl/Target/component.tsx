import React from 'react';

import { Styleless } from '../../Styleless';

export type Props = React.ComponentProps<typeof Styleless> & { isSelected: boolean };

export const Component = (props: Props) => <Styleless {...props} />;

Component.displayName = 'SegmentedControl.Target';
Component.defaultProps = {
  tag: 'button',
  isSelected: false,
} as Props;
