import React from 'react';
import styled from 'styled-components';

import { Button } from '../../../components/Button';

const ExampleContainer = styled.div`
  padding: 1em;
  background: ${({ theme }) => theme.honeycomb.color.bg.masked};
`;

export const Example = ({ text, children }: { text: string; children?: React.ReactNode }) => (
  <ExampleContainer>
    <Button variant="primary">{text}</Button>
    {children}
  </ExampleContainer>
);
