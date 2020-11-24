import React from 'react';

import { HtmlTag } from '../../modules/html-tag';
import { Testable } from '../../modules/test-ids';

import { Container, Position, Padding } from './styled';

export type Props = Pick<React.AllHTMLAttributes<HTMLElement>, 'className' | 'children'> &
  Testable & {
    htmlTag?: HtmlTag;
    position?: Position;
    padding?: Padding;
  };

export const Component = ({
  children,
  className,
  htmlTag,
  'data-testid': testId,
  position = 'center',
  padding = 'normal',
}: Props) => (
  <Container
    className={className}
    as={htmlTag as any}
    position={position}
    padding={padding}
    data-testid={testId}
  >
    {children}
  </Container>
);

Component.displayName = 'Card';
