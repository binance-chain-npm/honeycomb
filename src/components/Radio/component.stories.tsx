import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

import { Sections } from '../../modules/sections';
import { Card } from '../Card';
import { Space } from '../Space';
import { Styleless } from '../Styleless';

import { Radio } from '.';

export default {
  title: `${Sections.Inputs}/Radio`,
};

export const Default = () => (
  <Card>
    <Radio onChange={action('change')} label="A value" />
  </Card>
);

const StyledCard = styled(Card)`
  display: flex;
`;

export const Grouped = () => {
  const [checkedA, setCheckedA] = useState(1);
  const [checkedB, setCheckedB] = useState(-1);

  return (
    <StyledCard>
      <Styleless
        htmlTag="fieldset"
        id="groupA"
        style={{ flexDirection: 'column', alignItems: 'flex-start' }}
      >
        Group A
        <Space size="tiny" />
        {new Array(5).fill(null).map((_, index) => (
          <>
            <Radio
              onChange={() => setCheckedA(index)}
              label={`Option ${index}`}
              name="groupA"
              checked={checkedA === index}
            />
            <Space size="tiny" />
          </>
        ))}
      </Styleless>
      <Space size="increased" />
      <Styleless
        htmlTag="fieldset"
        id="groupA"
        style={{ flexDirection: 'column', alignItems: 'flex-start' }}
      >
        Group B
        <Space size="tiny" />
        {new Array(5).fill(null).map((_, index) => (
          <>
            <Radio
              onChange={() => setCheckedB(index)}
              label={`Option ${index}`}
              name="groupB"
              checked={checkedB === index}
            />
            <Space size="tiny" />
          </>
        ))}
      </Styleless>
    </StyledCard>
  );
};
