import React from 'react';

import { Testable } from '../../modules/test-ids';

import { Styled } from './styled';

export type Props = React.AllHTMLAttributes<HTMLElement> &
  Testable & { htmlTag?: keyof React.ReactHTML };

export const Component = ({ htmlTag, ...otherProps }: Props) => (
  <Styled {...otherProps} as={htmlTag as any} />
);

Component.displayName = 'Styleless';
