import React from 'react';
import styled from 'styled-components';
import { em } from 'polished';
import { action } from '@storybook/addon-actions';

import { decorators } from '../../modules/decorators';
import { Sections } from '../../modules/sections';

import { SIZES } from './styled';

import { Switch } from '.';

export default {
  component: Switch,
  decorators,
  title: `${Sections.Inputs}/Switch`,
};

export const Default = () => <Switch onChange={action('change')} />;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  > *:not(:last-child) {
    margin-bottom: ${({ theme }) => em(theme.honeycomb.size.normal)};
  }
`;

export const Sizes = () => {
  return (
    <Container>
      {SIZES.map((size) => (
        <Switch data-testid={`switch.${size}`} size={size} label={size} />
      ))}
    </Container>
  );
};
