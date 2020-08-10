import React, { useContext } from 'react';

import { useBuildTestId, Testable } from '../../../modules/test-ids';
import { Button } from '../../Button';
import { Icon } from '../../Icon';
import { Loading } from '../../Loading';
import { Modal } from '../../Modal';
import { TestIdContext } from '../context';

import { Header, Title, LoadingState } from './styled';

export type Props = Pick<React.ComponentPropsWithoutRef<typeof Modal>, 'className'> &
  Testable & {
    title?: React.ReactNode;
    isLoading?: boolean;
    onClose?: () => void;
  };

export const Component = ({
  title,
  isLoading,
  className,
  onClose,
  'data-testid': testId,
}: Props) => {
  const parentTestId = useContext(TestIdContext);
  const buildTestId = useBuildTestId(
    testId ?? (parentTestId ? `${parentTestId}.header` : undefined),
  );

  return (
    <Header hasHeader={!!title} className={className}>
      <Title>
        {!!title && isLoading && (
          <LoadingState>
            <Loading />
          </LoadingState>
        )}
        {title}
      </Title>
      <Button
        variant="secondary"
        size="increased"
        shape="square"
        onClick={onClose}
        data-testid={buildTestId('close-btn')}
      >
        <Icon.Cross />
      </Button>
    </Header>
  );
};

Component.displayName = 'Modal.Header';
