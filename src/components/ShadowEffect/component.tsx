import React from 'react';

import { Testable } from '../../modules/test-ids';
import { HtmlTag } from '../../modules/html-tag';

import { Size, Styled } from './styled';

export type Props = Omit<React.AllHTMLAttributes<HTMLElement>, 'as' | 'size'> &
  Testable & {
    htmlTag?: HtmlTag;
    size: Size;
  };

export const Component = ({ htmlTag, ...otherProps }: Props) => (
  <Styled {...otherProps} as={htmlTag as any} />
);

Component.displayName = 'ShadowEffect';
