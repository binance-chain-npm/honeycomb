import React from 'react';
import styled from 'styled-components';

import { Sections } from '../../modules/sections';
import { Icon } from '../Icon';

export default {
  title: `${Sections.Elements}/Icon`,
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Wrapper = styled.div`
  margin: 1em;
`;

export const Default = () => (
  <Container>
    {Object.keys(Icon).map((iconName) => {
      const Component = Icon[iconName as keyof typeof Icon];
      return (
        <Wrapper key={iconName}>
          <Component />
        </Wrapper>
      );
    })}
  </Container>
);
