import React, { useState } from 'react';
import styled from 'styled-components';
import { em } from 'polished';

import { Button } from '../components/Button';
import { Dropdown } from '../components/Dropdown';
import { Modal } from '../components/Modal';
import { Select } from '../components/Select';
import { Space } from '../components/Space';
import { Text } from '../components/Text';
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
  const [isSelectOpen, setIsSelectOpen] = useState(false);

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
          <Modal open={showInner} onClose={() => setShowInner(false)} data-testid="modal-inner">
            <Modal.Header title="Inner Modal" />
            <Modal.Content>
              <Guide size="reduced">
                This is to test that closing a dropdown by background click does not close the
                modal.
              </Guide>
              <Dropdown
                target={<Dropdown.DefaultTarget>Dropdown</Dropdown.DefaultTarget>}
                appendTo={appendTo}
                data-testid="dropdown"
              >
                <Dropdown.Item data-testid="option">Option</Dropdown.Item>
              </Dropdown>
              <Space size="normal" />
              <Select
                open={isSelectOpen}
                onClose={() => setIsSelectOpen(false)}
                variant="dropdown"
                target={
                  <Select.DefaultTarget onClick={() => setIsSelectOpen((value) => !value)}>
                    Select
                  </Select.DefaultTarget>
                }
                data-testid="select"
              >
                <Select.Option data-testid="option">Option</Select.Option>
              </Select>
            </Modal.Content>
          </Modal>
        </Modal.Content>
      </Modal>
    </>
  );
};

export const ControlledModal = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Show modal
      </Button>
      {show && (
        <Modal open={show} onClose={() => setShow(false)}>
          <Modal.Header title="Modal" />
          <Modal.Content>When this modal is closed, there should be no errors.</Modal.Content>
        </Modal>
      )}
    </>
  );
};
