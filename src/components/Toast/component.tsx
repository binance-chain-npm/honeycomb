import React from 'react';

import { useBuildTestId, Testable } from '../../modules/test-ids';

import { Icon as ToastIcon } from './Icon';
import { Box, Left, Row, Styled } from './styled';

export type Props = Testable & {
  children: React.ReactNode;
  icon: React.ReactNode;
};

export const Component = ({ children, icon, 'data-testid': testId }: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });

  return (
    <Styled data-testid={buildTestId()}>
      <Row>
        <Left>
          <Box>
            <ToastIcon icon={icon} />
          </Box>
          {children}
        </Left>
      </Row>
    </Styled>
  );
};

Component.displayName = 'Toast';
