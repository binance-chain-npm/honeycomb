import React from 'react';

import { Sections } from '../../modules/sections';
import { Space } from '../Space';

import { Steps } from '.';

export default {
  title: `${Sections.Elements}/Steps`,
};

const renderItems = (key: string) =>
  new Array(3)
    .fill(null)
    .map((_, index) => <Steps.Item key={`${key}-${index}`}>{index + 1}</Steps.Item>);

export const Horizontal = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {new Array(5).fill(null).map((_, index) => {
        const key = `steps-${index}`;

        return (
          <React.Fragment key={key}>
            <Steps orientation="horizontal" activeStep={index - 1} data-testid={'steps'}>
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
    <div style={{ display: 'flex', flexDirection: 'row', height: 'calc(100vh - 20px)' }}>
      {new Array(5).fill(null).map((_, index) => {
        const key = `steps-${index}`;

        return (
          <React.Fragment key={key}>
            <Steps orientation="vertical" activeStep={index - 1} data-testid={'steps'}>
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
    <Steps orientation="horizontal" activeStep={1} data-testid={'steps'}>
      <Steps.Item size={size * 1}>1</Steps.Item>
      <Steps.Item size={size * 2}>2</Steps.Item>
      <Steps.Item size={size * 3}>3</Steps.Item>
      <Steps.Item size={size * 4}>4</Steps.Item>
      <Steps.Item>5</Steps.Item>
    </Steps>
  );
};
