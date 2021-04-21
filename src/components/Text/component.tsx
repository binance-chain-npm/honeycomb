import React from 'react';
import { Property } from 'csstype';

import { HtmlTag } from '../../modules/html-tag';
import { Testable } from '../../modules/test-ids';

import { Size, Styled, Weight } from './styled';

export type Props = Omit<React.AllHTMLAttributes<HTMLElement>, 'as' | 'size'> &
  Testable & {
    htmlTag?: HtmlTag;
    alignItems?: Property.AlignItems;
    alignSelf?: Property.AlignSelf;
    color?: string;
    size: Size;
    weight?: Weight;
  };

export const Component = ({ htmlTag, color, 'data-testid': testId, ...otherProps }: Props) => {
  return <Styled {...otherProps} $color={color} as={htmlTag as any} data-testid={testId} />;
};

Component.displayName = 'Text';
