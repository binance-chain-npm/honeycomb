import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

import { decorators } from '../../modules/decorators';
import { Sections } from '../../modules/sections';
import { useBuildTestId } from '../../modules/test-ids';
import { Space } from '../Space';
import { Styleless } from '../Styleless';

import { Radio } from './';

export default {
  component: Radio,
  decorators,
  title: `${Sections.Inputs}/Radio`,
};

export const Default = () => <Radio onChange={action('change')} label="A value" />;

const Container = styled.div`
  display: flex;
`;

export const Grouped = () => {
  const { buildTestId } = useBuildTestId();

  const [checkedA, setCheckedA] = useState(1);
  const [checkedB, setCheckedB] = useState(-1);

  return (
    <Container>
      <Styleless
        htmlTag="fieldset"
        id={buildTestId('groupA')}
        style={{ flexDirection: 'column', alignItems: 'flex-start' }}
      >
        Group A
        <Space size="tiny" />
        {new Array(5).fill(null).map((_, index) => (
          <>
            <Radio
              onChange={() => setCheckedA(index)}
              label={`Option ${index + 1}`}
              name={buildTestId('groupA')}
              checked={checkedA === index}
            />
            <Space size="tiny" />
          </>
        ))}
      </Styleless>
      <Space size="large" />
      <Styleless
        htmlTag="fieldset"
        id={buildTestId('groupB')}
        style={{ flexDirection: 'column', alignItems: 'flex-start' }}
      >
        Group B
        <Space size="tiny" />
        {new Array(5).fill(null).map((_, index) => (
          <>
            <Radio
              onChange={() => setCheckedB(index)}
              label={`Option ${index + 1}`}
              name={buildTestId('groupB')}
              checked={checkedB === index}
            />
            <Space size="tiny" />
          </>
        ))}
      </Styleless>
    </Container>
  );
};
