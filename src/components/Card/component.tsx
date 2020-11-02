import React from 'react';

import { HtmlTag } from '../../modules/html-tag';
import { Testable } from '../../modules/test-ids';

import { Container, Position, Variant } from './styled';

export type Props = Omit<React.AllHTMLAttributes<HTMLElement>, 'as'> &
  Testable & {
    htmlTag?: HtmlTag;
    position?: Position;
    variant?: Variant;
  };

export const Component = ({
  children,
  htmlTag,
  'data-testid': testId,
  position = 'center',
  variant = 'default',
  ...otherProps
}: Props) => (
  <Container
    {...otherProps}
    as={htmlTag as any}
    position={position}
    variant={variant}
    data-testid={testId}
  >
    {children}
  </Container>
);

Component.displayName = 'Card';
