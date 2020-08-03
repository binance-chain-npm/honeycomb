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
      <Modal open={show} onClose={() => setShow(false)} data-testid="MyModal" title="A title">
        <Modal.Content>{items}</Modal.Content>
      </Modal>
    </>
  );
};

export const WithTitle = () => (
  <Modal open={true} data-testid="MyModal" title="A title">
    <Modal.Content>{items}</Modal.Content>
  </Modal>
);

export const TitleComponetWithLoading = () => (
  <Modal open={true} data-testid="MyModal" title={<div>A title</div>} isLoading={true}>
    <Modal.Content>{items}</Modal.Content>
  </Modal>
);

export const WithTitleAtBottom = () => (
  <Modal open={true} data-testid="MyModal" title="A title" position="bottom">
    <Modal.Content>{items}</Modal.Content>
  </Modal>
);

export const SmallWithTitle = () => (
  <Modal open={true} data-testid="MyModal" title="A title">
    <Modal.Content>Just a line</Modal.Content>
  </Modal>
);

export const SmallWithTitleAtBottom = () => (
  <Modal open={true} data-testid="MyModal" title="A title" position="bottom">
    <Modal.Content>Just a line</Modal.Content>
  </Modal>
);

export const WithoutTitle = () => (
  <Modal open={true} data-testid="MyModal">
    <Modal.Content>{items}</Modal.Content>
  </Modal>
);
