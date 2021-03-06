import React from 'react';

import { HtmlTag } from '../../modules/html-tag';
import { Testable } from '../../modules/test-ids';

import { Container, Padding, Position, Shadow } from './styled';

export type Props = Pick<React.AllHTMLAttributes<HTMLElement>, 'className' | 'children'> &
  Testable & {
    htmlTag?: HtmlTag;
    outlined?: boolean;
    padding?: Padding;
    position?: Position;
    shadow?: Shadow;
  };

export const Component = ({
  children,
  className,
  htmlTag,
  outlined = false,
  padding = 'normal',
  position = 'center',
  shadow = 'normal',
  'data-testid': testId,
}: Props) => (
  <Container
    className={className}
    as={htmlTag as any}
    outlined={outlined}
    padding={padding}
    position={position}
    shadow={shadow}
    data-testid={testId}
  >
    {children}
  </Container>
);

Component.displayName = 'Card';
