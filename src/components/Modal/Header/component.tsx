import React, { useContext } from 'react';

import { useBuildTestId } from '../../../modules/test-ids';
import { Button } from '../../Button';
import { Icon } from '../../Icon';
import { Loading } from '../../Loading';
import { Context } from '../context';

import { Header, Title, LoadingState } from './styled';

export type Props = {
  className?: string;
  title?: React.ReactNode;
};

export const Component = ({ className, title }: Props) => {
  const { testId: parentTestId, loading, onClose } = useContext(Context);
  const { buildTestId } = useBuildTestId({
    id: parentTestId ? `${parentTestId}.header` : undefined,
  });

  return (
    <Header hasHeader={!!title} className={className}>
      <Title>
        {!!title && loading && (
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
