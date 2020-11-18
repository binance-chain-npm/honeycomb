import React from 'react';

import { Testable } from '../../modules/test-ids';
import { HtmlTag } from '../../modules/html-tag';

import { Styled } from './styled';

export type Props = Omit<React.AllHTMLAttributes<HTMLElement>, 'as'> &
  Testable & { htmlTag?: HtmlTag };

export const Component = ({ htmlTag, ...otherProps }: Props) => (
  <Styled {...otherProps} as={htmlTag as any} />
);

Component.displayName = 'Styleless';
