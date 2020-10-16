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

export const Default = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {new Array(5).fill(null).map((_, index) => {
        const key = `steps-${index}`;

        return (
          <React.Fragment key={key}>
            <Steps activeStep={index - 1} data-testid={'steps'}>
              {renderItems(key)}
            </Steps>
            <Space size="normal" />
          </React.Fragment>
        );
      })}
    </div>
  );
};
