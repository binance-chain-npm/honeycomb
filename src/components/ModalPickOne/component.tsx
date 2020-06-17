import React, { useState, useCallback, useMemo } from 'react';

import { Modal } from '../Modal';
import { Testable, useBuildTestId } from '../../modules/test-ids';
import { TextInput } from '../TextInput';
import { Space } from '../Space';

import { Content, Header } from './styled';

export type Props = Testable & {
  open?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
};

export const Component = ({ open, onClose, 'data-testid': testId, children }: Props) => {
  const buildTestId = useBuildTestId(testId);
  const [search, setSearch] = useState('');
  const updateSearch = useCallback(
    (evt: React.ChangeEvent<HTMLInputElement>) => setSearch(evt.target.value),
    [],
  );

  const lowerCaseSearch = useMemo(() => search.toLowerCase(), [search]);

  const filteredResults = useMemo(
    () =>
      React.Children.toArray(children).filter((it) => {
        if (!React.isValidElement<{ searchAs: string[] | string }>(it)) return false;

        const { searchAs } = it.props;
        if (!searchAs) return false;

        if (typeof searchAs === 'string') {
          return searchAs.toLowerCase().includes(lowerCaseSearch);
        }

        if (Array.isArray(searchAs)) {
          return !!searchAs.find((search) => search.toLowerCase().includes(lowerCaseSearch));
        }

        return false;
      }),
    [children, lowerCaseSearch],
  );

  return (
    <Modal open={open} onClose={onClose} data-testid={buildTestId()}>
      <Header>
        <TextInput value={search} onChange={updateSearch} />
      </Header>
      <Modal.Scroll>
        <Space size="increased" />
        <Content>{filteredResults}</Content>
        <Space size="increased" />
      </Modal.Scroll>
    </Modal>
  );
};

Component.displayName = 'ModalPickOne';
