import React, { useContext } from 'react';
import { useTheme } from 'styled-components';

import { TestIdContext } from '../context';
import { useBuildTestId, Testable } from '../../../modules/test-ids';
import { HtmlTag } from '../../../modules/html-tag';
import { Icon } from '../../Icon';
import { Space } from '../../Space';

import { Container, Variant } from './styled';

export type Props = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> &
  Testable & {
    isSelected?: boolean;
    isNonInteractive?: boolean;
    variant?: Variant;
    htmlTag?: HtmlTag;
  };

export const Component = ({
  htmlTag = 'button',
  variant = 'normal',
  isNonInteractive = false,
  isSelected = false,
  ...otherProps
}: Props) => {
  const theme = useTheme();
  const parentTestId = useContext(TestIdContext);
  const buildTestId = useBuildTestId(otherProps['data-testid'] ? parentTestId : undefined);

  return (
    <Container
      {...otherProps}
      isSelected={isSelected}
      isNonInteractive={isNonInteractive}
      variant={variant}
      as={htmlTag as any}
      data-testid={buildTestId(otherProps['data-testid'])}
    >
      {otherProps.children}
      <Space size="fill" />
      {isSelected && <Icon.Tick color={theme.honeycomb.color.primary.normal} />}
    </Container>
  );
};

Component.displayName = 'Dropdown.Item';
