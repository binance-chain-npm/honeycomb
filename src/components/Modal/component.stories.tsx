import React, { useState } from 'react';

import { Sections } from '../../modules/sections';
import { Button } from '../Button';

import { Modal } from './';

export default {
  title: `${Sections.Elements}/Modal`,
};

const items = new Array(200).fill(null).map((_, index) => <div key={index}>{index + 1}</div>);
export const Behaviour = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)} data-testid="OpenButton">
        Show
      </Button>
      <Modal open={show} onClose={() => setShow(false)} data-testid="MyModal">
        <Modal.Header data-testid="header" onClose={() => setShow(false)} title="A title" />
        <Modal.Content data-testid="content">{items}</Modal.Content>
      </Modal>
    </>
  );
};

export const WithTitle = () => (
  <Modal open={true} data-testid="MyModal">
    <Modal.Header title="A title" />
    <Modal.Content>{items}</Modal.Content>
  </Modal>
);

export const TitleComponetWithLoading = () => (
  <Modal open={true} data-testid="MyModal">
    <Modal.Header isLoading={true} title={<div>A title</div>} />
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
    <Modal.Content>{items}</Modal.Content>
  </Modal>
);
