import React from 'react';
import styled from 'styled-components';
import { Story } from '@storybook/react/types-6-0';

import { Sections } from '../../modules/sections';
import { Icon } from '../Icon';

export default {
  component: Icon,
  title: `${Sections.Elements}/Icon`,
  parameters: {
    controls: {
      disabled: true,
    },
  },
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Wrapper = styled.div`
  margin: 1em;
`;

export const Default: Story = (args) => (
  <Container>
    {Object.keys(Icon).map((iconName) => {
      const Component = Icon[iconName as keyof typeof Icon];
      return (
        <Wrapper key={iconName}>
          <Component {...args} />
        </Wrapper>
      );
    })}
  </Container>
);
Default.parameters = {
  controls: {
    disabled: false,
  },
};
Default.argTypes = {
  color: { control: 'color' },
};
