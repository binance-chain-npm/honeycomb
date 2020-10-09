import styled, { css } from 'styled-components';
import { em } from 'polished';

import { boxSizing } from '../../modules/box-sizing';
import { ListItem } from '../ListItem';
import { styleless } from '../Styleless';
import { Dropdown } from '../Dropdown';

import { HeaderItems } from './HeaderItems';

export const Styled = styled.div`
  ${styleless};
  ${boxSizing};

  display: flex;
  align-items: center;
  height: ${em(64)};
  padding-left: ${({ theme }) => em(theme.honeycomb.size.increased)};
  padding-right: ${({ theme }) => em(theme.honeycomb.size.increased)};
  background: ${({ theme }) => theme.honeycomb.color.bg.tooltip.normal};
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-grow: 1;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${({ theme }) => em(theme.honeycomb.size.increased)};
`;

export const LeftHeaderItems = styled(HeaderItems)`
  > *:not(:last-child) {
    margin-right: ${({ theme }) => em(theme.honeycomb.size.increased)};
  }
`;

export const RightHeaderItems = styled(HeaderItems)`
  > *:not(:first-child) {
    margin-left: ${({ theme }) => em(theme.honeycomb.size.increased)};
  }
`;

export const NonCollapsibleHeaderItems = styled(HeaderItems)`
  > * {
    margin-left: ${({ theme }) => em(theme.honeycomb.size.increased)};
  }
`;

export const headerItem = css`
  display: flex;
  align-items: center;
  cursor: pointer;
  white-space: nowrap;
  background: transparent;
  font-size: ${({ theme }) => em(theme.honeycomb.size.reduced)};

  :focus,
  :hover,
  :active {
    background-color: transparent;
    color: ${({ theme }) => theme.honeycomb.color.primary.normal};
  }
`;

export const Item = styled(ListItem)<{ isMenu?: boolean }>`
  ${headerItem};

  width: auto;
  padding: 0;

  ${({ isMenu }) =>
    isMenu &&
    css`
      margin-left: ${({ theme }) => em(theme.honeycomb.size.increased)};
      order: 100;
    `};
`;

export const DropdownItem = styled(Dropdown.DefaultTarget)`
  ${headerItem};
`;
