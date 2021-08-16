import React, { useState } from 'react';
import styled from 'styled-components';
import { em } from 'polished';
import { Story } from '@storybook/react/types-6-0';

import { decorators } from '../../modules/decorators';
import { Sections } from '../../modules/sections';
import { GoldLight } from '../../modules/themes/themes/GoldLight';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Space } from '../Space';
import { Text } from '../Text';

import { Modal } from './';

export default {
  component: Modal,
  title: `${Sections.Elements}/Modal`,
};

Modal.setAppElement('#root');

const Container = styled.div`
  display: flex;
  flex-direction: column;

  > *:not(:last-child) {
    margin-bottom: ${({ theme }) => em(theme.honeycomb.size.normal)};
  }
`;

const Hr = styled.hr`
  opacity: 0.1;
`;

const items = (
  <Container>
    {new Array(200).fill(null).map((_, index) => (
      <div>
        <Hr key={index} />
      </div>
    ))}
  </Container>
);

export const Default: Story = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setOpen(true)} data-testid="btn-open">
        {open ? (
          <Icon.EyeBlocked fontSize={GoldLight.honeycomb.size.increased} />
        ) : (
          <Icon.Eye fontSize={GoldLight.honeycomb.size.increased} />
        )}
      </Button>
      <Modal open={open} onClose={() => setOpen(false)} data-testid="modal">
        <Modal.Header title="A Title" />
        <Modal.Content>
          <Text size="normal" alignSelf="start">
            Content that overflows will scroll.
          </Text>
          <Space size="normal" />
          {items}
        </Modal.Content>
      </Modal>
    </>
  );
};
Default.decorators = decorators;

export const WithLoading = () => (
  <Modal open={true} loading data-testid="modal">
    <Modal.Header title={<div>A Title</div>} />
    <Modal.Content>{items}</Modal.Content>
  </Modal>
);

export const WithFooter = () => (
  <Modal open={true} data-testid="modal">
    <Modal.Header title={<div>A Title</div>} />
    <Modal.Content>{items}</Modal.Content>
    <Modal.Footer>
      <Text size="normal" alignSelf="start">
        A footer.
      </Text>
      <Space size="reduced" />
      <Button variant="primary">OK</Button>
    </Modal.Footer>
  </Modal>
);

export const PositionBottom = () => (
  <Modal open={true} data-testid="modal" position="bottom">
    <Modal.Header title="A Title" />
    <Modal.Content>{items}</Modal.Content>
  </Modal>
);

export const PositionBottomWithFooter = () => (
  <Modal open={true} data-testid="modal" position="bottom">
    <Modal.Header title="A Title" />
    <Modal.Content>{items}</Modal.Content>
    <Modal.Footer>
      <Text size="normal">A footer.</Text>
    </Modal.Footer>
  </Modal>
);

export const Small = () => (
  <Modal open={true} data-testid="modal">
    <Modal.Header title="A Title" />
    <Modal.Content>Just a line.</Modal.Content>
  </Modal>
);

export const WithoutTitle = () => (
  <Modal open={true} data-testid="modal">
    <Modal.Header />
    <Modal.Content>{items}</Modal.Content>
  </Modal>
);
