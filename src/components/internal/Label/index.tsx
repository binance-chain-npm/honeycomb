import styled from 'styled-components';
import { em } from 'polished';

import { baseStyles } from '../../../modules/core';

export const Label = styled.label`
  ${baseStyles};

  display: block;
  font-size: ${({ theme }) => em(theme.honeycomb.fontSize.small)};
  color: ${({ theme }) => theme.honeycomb.color.readable(theme.honeycomb.color.bg)};
  font-weight: 600;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
