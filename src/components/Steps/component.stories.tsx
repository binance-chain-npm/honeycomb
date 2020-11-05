import React from 'react';

import { Sections } from '../../modules/sections';
import { Space } from '../Space';
import { Badge } from '../Badge';

import { Steps } from '.';

export default {
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

export const Horizontal = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {new Array(5).fill(null).map((_, index) => {
        const key = `steps-${index}`;

        return (
          <React.Fragment key={key}>
            <Steps orientation="horizontal" activeStep={index - 1}>
              {renderItems(key)}
            </Steps>
            <Space size="normal" />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export const Vertical = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', height: 'calc(100vh - 2rem)' }}>
      {new Array(5).fill(null).map((_, index) => {
        const key = `steps-${index}`;

        return (
          <React.Fragment key={key}>
            <Steps orientation="vertical" activeStep={index - 1}>
              {renderItems(key)}
            </Steps>
            <Space size="normal" />
          </React.Fragment>
        );
      })}
    </div>
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
