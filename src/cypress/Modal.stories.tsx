import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { em } from 'polished';
import { action } from '@storybook/addon-actions';

import { Button } from '../components/Button';
import { Dropdown } from '../components/Dropdown';
import { Code } from '../components/internal/Docs';
import { Modal } from '../components/Modal';
import { Space } from '../components/Space';
import { Text } from '../components/Text';
import { TextInput } from '../components/TextInput';
import { Sections } from '../modules/sections';

const appendTo = typeof document === 'undefined' ? undefined : document.body;

export default {
  component: Modal,
  title: `${Sections.Tests}/Modal`,
};

const Guide = styled(Text)`
  display: block;
  margin-bottom: ${({ theme }) => em(theme.honeycomb.size.normal)};
`;

export const Default = () => {
  const [show, setShow] = useState(false);
  const [showInner, setShowInner] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)} data-testid="open-btn-outer">
        Show outer modal
      </Button>
      <Modal open={show} onClose={() => setShow(false)} data-testid="modal-outer">
        <Modal.Header title="Outer Modal" />
        <Modal.Content>
          <Button variant="primary" onClick={() => setShowInner(true)} data-testid="open-btn-inner">
            Show inner modal
          </Button>
          <Modal
            open={showInner}
            onClose={() => setShowInner(false)}
            closeOnBackgroundClick={false}
            data-testid="modal-inner"
          >
            <Modal.Header title="Inner Modal" />
            <Modal.Content>
              <Guide size="reduced">
                If you put an element like <Code>Dropdown</Code> inside a modal, make sure
                <Code>closeOnBackgroundClick=&#123;false&#125;</Code> (default).
              </Guide>
              <Guide size="reduced">
                Otherwise the modal will be closed when clicking outside of the dropdown.
              </Guide>
              <Dropdown
                target={<Dropdown.DefaultTarget>Dropdown</Dropdown.DefaultTarget>}
                appendTo={appendTo}
                data-testid="dropdown"
              >
                {new Array(5).fill(null).map((_, index) => (
                  <Dropdown.Item key={index} data-testid={`${index}`}>
                    Option {index + 1}
                  </Dropdown.Item>
                ))}
              </Dropdown>
            </Modal.Content>
          </Modal>
        </Modal.Content>
      </Modal>
    </>
  );
};

type Props = Pick<React.ComponentProps<typeof Modal>, 'open' | 'onClose'> &
  Pick<React.ComponentProps<typeof Modal.Header>, 'title'> & {
    defaultName?: string;
    callback: ({ name }: { name: string }) => void;
  };

const MemoryLeak = ({ open, onClose, title, defaultName, callback }: Props) => {
  const [name, setName] = useState('');

  useEffect(() => {
    if (!defaultName) return;
    setName(defaultName);
  }, [defaultName]);

  const change = useCallback<NonNullable<React.ComponentProps<typeof TextInput>['onChange']>>(
    (evt) => setName(evt.target.value),
    [],
  );

  const confirm = useCallback(() => {
    callback({ name });
    setName('');
    onClose?.();
  }, [name, callback, onClose]);

  return (
    <Modal open={open} onClose={onClose}>
      <Modal.Header title={title} />
      <Modal.Content>
        <TextInput value={name} label="Label" onChange={change} />
        <Space size="increased" />
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={confirm}>
          Confirm
        </Button>
      </Modal.Content>
    </Modal>
  );
};

export const MemoryLeakTest = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const callback = useCallback(({ name }: { name: string }) => {
    action(name)();
  }, []);

  return (
    <>
      <Button variant="primary" onClick={open}>
        Open
      </Button>
      <MemoryLeak open={isOpen} onClose={close} title="Memory Leak Modal" callback={callback} />
    </>
  );
};
