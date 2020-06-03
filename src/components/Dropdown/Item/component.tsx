import React, { useContext } from 'react';

import { TestIdContext } from '../context';
import { useBuildTestId, Testable } from '../../../modules/test-ids';
import { HtmlTag } from '../../../modules/html-tag';

import { Container, Variant } from './styled';

export type Props = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> &
  Testable & {
    variant?: Variant;
    htmlTag?: HtmlTag;
  };

export const Component = ({ htmlTag = 'button', variant = 'normal', ...otherProps }: Props) => {
  const parentTestId = useContext(TestIdContext);
  const buildTestId = useBuildTestId(otherProps['data-testid'] ? parentTestId : undefined);

  return (
    <Container
      {...otherProps}
      variant={variant}
      as={htmlTag as any}
      data-testid={buildTestId(otherProps['data-testid'])}
    >
      {otherProps.children}
    </Container>
  );
};

Component.displayName = 'Dropdown.Item';
