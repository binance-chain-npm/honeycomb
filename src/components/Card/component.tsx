import React from 'react';

import { HtmlTag } from '../../modules/html-tag';
import { Testable } from '../../modules/test-ids';

import { Container, Position, Variant } from './styled';

export type Props = Pick<React.AllHTMLAttributes<HTMLElement>, 'className' | 'children'> &
  Testable & {
    htmlTag?: HtmlTag;
    position?: Position;
    variant?: Variant;
  };

export const Component = ({
  children,
  className,
  htmlTag,
  'data-testid': testId,
  position = 'center',
  variant = 'default',
}: Props) => (
  <Container
    className={className}
    as={htmlTag as any}
    position={position}
    variant={variant}
    data-testid={testId}
  >
    {children}
  </Container>
);

Component.displayName = 'Card';
