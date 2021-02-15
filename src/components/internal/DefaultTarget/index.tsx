import styled, { css } from 'styled-components';
import { transitions, em } from 'polished';

import { styleless } from '../../Styleless';
import { boxSizing } from '../../../modules/box-sizing';

export const defaultTarget = css`
  width: 100%;
  background: ${({ theme }) => theme.honeycomb.color.bg.input.normal};
  border-radius: ${({ theme }) => em(theme.honeycomb.radius.normal, theme.honeycomb.size.reduced)};
  height: ${({ theme }) => em(theme.honeycomb.size.huge, theme.honeycomb.size.reduced)};
  font-size: ${({ theme }) => em(theme.honeycomb.size.reduced)};
  cursor: pointer;
  ${({ theme }) => transitions(['background', 'color'], theme.honeycomb.duration.normal)};
`;

export const DefaultTarget = styled.div`
  ${styleless};
  ${boxSizing};
  ${defaultTarget};
`;
