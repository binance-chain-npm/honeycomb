import styled, { css } from 'styled-components';
import { em } from 'polished';

import { ListItem } from '../../ListItem';

const panel = css`
  height: ${em(40)};
`;

export const PanelElementItem = styled.div`
  padding: ${({ theme }) => em(theme.honeycomb.size.normal)};

  > button {
    width: 100%;
  }
`;

export const PanelContainer = styled(ListItem)`
  ${panel};
`;

export const PanelItem = styled.div<{ hasChildren: boolean }>`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => em(theme.honeycomb.size.reduced)};
  font-weight: 600;

  ${({ hasChildren }) =>
    hasChildren &&
    css`
      justify-content: space-between;
    `};
`;

export const PanelDropdownContainer = styled(ListItem)`
  ${panel};

  padding: 0 ${({ theme }) => em(theme.honeycomb.size.large)};
`;

export const PanelDropdownItem = styled.div`
  font-size: ${({ theme }) => em(theme.honeycomb.size.small)};
`;
