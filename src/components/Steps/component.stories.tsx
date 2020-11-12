import React from 'react';
import styled from 'styled-components';
import { em } from 'polished';

import { decorators } from '../../modules/decorators';
import { Sections } from '../../modules/sections';
import { Space } from '../Space';
import { Badge } from '../Badge';

import { Steps } from './';

export default {
  component: Steps,
  decorators,
  title: `${Sections.Elements}/Steps`,
};

const renderItems = (key: string) => {
  return (
    <>
      <Steps.Item key={`${key}-1`}>1</Steps.Item>
      <Steps.Connector />
      <Steps.Item key={`${key}-2`}>2</Steps.Item>
      <Steps.Connector />
      <Steps.Item key={`${key}-3`}>3</Steps.Item>
    </>
  );
};

const HorizontalContainer = styled.div`
  display: flex;
  flex-direction: column;

  > *:not(:last-child) {
    margin-bottom: ${({ theme }) => em(theme.honeycomb.size.normal)};
  }
`;

export const Horizontal = () => {
  return (
    <HorizontalContainer>
      {new Array(5).fill(null).map((_, index) => {
        const key = `steps-${index}`;

        return (
          <Steps key={key} orientation="horizontal" activeStep={index - 1}>
            {renderItems(key)}
          </Steps>
        );
      })}
    </HorizontalContainer>
  );
};

const VerticalContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 15em;

  > *:not(:last-child) {
    margin-right: ${({ theme }) => em(theme.honeycomb.size.normal)};
  }
`;

export const Vertical = () => {
  return (
    <VerticalContainer>
      {new Array(5).fill(null).map((_, index) => {
        const key = `steps-${index}`;

        return (
          <Steps key={key} orientation="vertical" activeStep={index - 1}>
            {renderItems(key)}
          </Steps>
        );
      })}
    </VerticalContainer>
  );
};

export const WithCustomConnectorSize = () => {
  const size = 50;

  return (
    <Steps orientation="horizontal" activeStep={1}>
      <Steps.Item>1</Steps.Item>
      <Steps.Connector size={size * 1} />
      <Steps.Item>2</Steps.Item>
      <Steps.Connector size={size * 2} />
      <Steps.Item>3</Steps.Item>
      <Steps.Connector size={size * 3} />
      <Steps.Item>4</Steps.Item>
      <Steps.Connector />
      <Steps.Item>5</Steps.Item>
    </Steps>
  );
};

export const WithCustomSteps = () => {
  return (
    <Steps orientation="horizontal" activeStep={-1}>
      <Badge variant="danger">One</Badge>
      <Steps.Connector />
      <Badge variant="danger">Two</Badge>
      <Steps.Connector />
      <Badge variant="danger">Three</Badge>
    </Steps>
  );
};
