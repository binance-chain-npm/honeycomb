import React, { useState } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { Sections } from '../../modules/sections';
import { Button } from '../Button';

import { Modal } from './';

export default {
  component: Modal,
  title: `${Sections.Elements}/Modal`,
  parameters: {
    controls: {
      disabled: true,
    },
  },
};

const items = new Array(200).fill(null).map((_, index) => <div key={index}>{index + 1}</div>);

export const Default: Story = (args) => (
  <Modal {...args}>
    <Modal.Header title="Modal" />
    <Modal.Content>Some modal content...</Modal.Content>
  </Modal>
);
Default.parameters = {
  controls: {
    disabled: false,
  },
};
Default.argTypes = {
  'data-testid': { table: { disable: true } },
  className: { table: { disable: true } },
  open: {
    defaultValue: true,
    control: {
      type: 'boolean',
    },
  },
  position: {
    defaultValue: 'center',
  },
};

export const WithTitle = () => (
  <Modal open={true} data-testid="MyModal">
    <Modal.Header title="A title" />
    <Modal.Content>{items}</Modal.Content>
  </Modal>
);

export const TitleComponentWithLoading = () => (
  <Modal open={true} data-testid="MyModal">
    <Modal.Header loading={true} title={<div>A title</div>} />
    <Modal.Content>{items}</Modal.Content>
  </Modal>
);

export const WithTitleAtBottom = () => (
  <Modal open={true} data-testid="MyModal" position="bottom">
    <Modal.Header title="A title" />
    <Modal.Content>{items}</Modal.Content>
  </Modal>
);

export const SmallWithTitle = () => (
  <Modal open={true} data-testid="MyModal">
    <Modal.Header title="A title" />
    <Modal.Content>Just a line</Modal.Content>
  </Modal>
);

export const SmallWithTitleAtBottom = () => (
  <Modal open={true} data-testid="MyModal" position="bottom">
    <Modal.Header title="A title" />
    <Modal.Content>Just a line</Modal.Content>
  </Modal>
);

export const WithoutTitle = () => (
  <Modal open={true} data-testid="MyModal">
    <Modal.Header />
    <Modal.Content>{items}</Modal.Content>
  </Modal>
);

export const WithNestedModal = () => {
  const [show, setShow] = useState(false);
  const [showInner, setShowInner] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)} data-testid="open-btn-outer">
        Show Outer Modal
      </Button>
      <Modal open={show} data-testid="modal-outer">
        <Modal.Header onClose={() => setShow(false)} title="Outer Modal" />
        <Modal.Content>
          <Button variant="primary" onClick={() => setShowInner(true)} data-testid="open-btn-inner">
            Show Inner Modal
          </Button>
          <Modal open={showInner} data-testid="modal-inner">
            <Modal.Header onClose={() => setShowInner(false)} title="Inner Modal" />
            <Modal.Content>Just a line</Modal.Content>
          </Modal>
        </Modal.Content>
      </Modal>
    </>
  );
};
