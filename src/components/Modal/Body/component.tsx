import React, { useContext } from 'react';

import { TestIdContext } from '../../Dropdown/context';
import { useBuildTestId } from '../../../modules/test-ids';

import { Scroll, Body } from './styled';

export type Props = {
  children?: React.ReactNode;
  disableScroll?: boolean;
  withoutPadding?: boolean;
};

export const Component = ({ children, disableScroll = false, withoutPadding = false }: Props) => {
  const testId = useContext(TestIdContext);
  const buildTestId = useBuildTestId(testId);

  return (
    <Scroll hasScroll={!disableScroll} data-testid={buildTestId('scroll-container')}>
      <Body hasNoPadding={withoutPadding} data-testid={buildTestId('body')}>
        {children}
      </Body>
    </Scroll>
  );
};

Component.displayName = 'Modal.Body';
