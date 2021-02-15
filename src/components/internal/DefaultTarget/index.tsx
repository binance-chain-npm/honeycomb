import styled from 'styled-components';
import { transitions, em } from 'polished';

import { styleless } from '../../Styleless';
import { boxSizing } from '../../../modules/box-sizing';

export const DefaultTarget = styled.div`
  ${styleless};
  ${boxSizing};

  width: 100%;
  background: ${({ theme }) => theme.honeycomb.color.bg.input.normal};
  font-size: ${({ theme }) => em(theme.honeycomb.size.reduced)};
  border-radius: ${({ theme }) => em(theme.honeycomb.radius.normal, theme.honeycomb.size.reduced)};
  height: ${({ theme }) => em(theme.honeycomb.size.huge, theme.honeycomb.size.reduced)};
  cursor: pointer;
  ${({ theme }) => transitions(['background', 'color'], theme.honeycomb.duration.normal)};
`;
