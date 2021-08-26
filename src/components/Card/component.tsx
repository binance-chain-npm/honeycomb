import React from 'react';

import { HtmlTag } from '../../modules/html-tag';
import { Testable } from '../../modules/test-ids';

import { Container, Position, Shadow } from './styled';

export type Props = Pick<React.AllHTMLAttributes<HTMLElement>, 'className' | 'children'> &
  Testable & {
    htmlTag?: HtmlTag;
    position?: Position;
    shadow?: Shadow;
  };

export const Component = ({
  children,
  className,
  htmlTag,
  position = 'center',
  shadow = 'normal',
  'data-testid': testId,
}: Props) => (
  <Container
    className={className}
    as={htmlTag as any}
    position={position}
    shadow={shadow}
    data-testid={testId}
  >
    {children}
  </Container>
);

Component.displayName = 'Card';
