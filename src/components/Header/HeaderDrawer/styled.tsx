import styled, { css } from 'styled-components';
import { em } from 'polished';

import { ListItem } from '../../ListItem';

const panel = css`
  height: ${({ theme }) => em(theme.honeycomb.size.huge)};
`;

export const PanelElementItem = styled.div`
  padding: ${({ theme }) => em(theme.honeycomb.size.normal)};

  > div > * {
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
