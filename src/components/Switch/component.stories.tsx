import React, { useState } from 'react';
import styled from 'styled-components';
import { em } from 'polished';

import { decorators } from '../../modules/decorators';
import { Sections } from '../../modules/sections';

import { SIZES } from './styled';

import { Switch } from '.';

export default {
  component: Switch,
  decorators,
  title: `${Sections.Inputs}/Switch`,
};

export const Default = () => {
  const [checked, setChecked] = useState(false);

  return <Switch onChange={(evt) => setChecked(evt.target.checked)} checked={checked} />;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  > *:not(:last-child) {
    margin-bottom: ${({ theme }) => em(theme.honeycomb.size.normal)};
  }
`;

export const Sizes = () => {
  const [checked, setChecked] = useState<Record<number, boolean>>({});

  return (
    <Container>
      {SIZES.map((size, index) => (
        <Switch
          data-testid={`switch.${size}`}
          size={size}
          label={size}
          checked={checked[index]}
          onChange={() => setChecked((state) => ({ ...state, [index]: !state[index] }))}
        />
      ))}
    </Container>
  );
};
