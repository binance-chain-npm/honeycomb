import styled, { css } from 'styled-components';
import { em } from 'polished';

import { boxSizing } from '../../modules/box-sizing';
import { Dropdown } from '../Dropdown';
import { ListItem } from '../ListItem';
import { styleless } from '../Styleless';

import { HeaderItems } from './HeaderItems';

export const Styled = styled.div`
  ${styleless};
  ${boxSizing};

  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${em(64)};
  padding-left: ${({ theme }) => em(theme.honeycomb.size.increased)};
  padding-right: ${({ theme }) => em(theme.honeycomb.size.increased)};
  background: ${({ theme }) => theme.honeycomb.color.bg.tooltip.normal};
`;

export const LeftContainer = styled.div`
  display: flex;
`;

export const CenterContainer = styled.div`
  display: flex;
`;

export const RightContainer = styled.div`
  display: flex;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  :not(:last-child) {
    margin-right: ${({ theme }) => em(theme.honeycomb.size.increased)};
  }
`;

export const ItemSpace = styled.div`
  width: ${({ theme }) => em(theme.honeycomb.size.increased)};
`;

export const LeftHeaderItems = styled(HeaderItems)`
  margin-right: ${({ theme }) => em(theme.honeycomb.size.increased)};
`;

export const RightHeaderItems = styled(HeaderItems)`
  margin-left: ${({ theme }) => em(theme.honeycomb.size.increased)};
`;

export const NonCollapsibleHeaderItems = styled(HeaderItems)`
  margin-left: ${({ theme }) => em(theme.honeycomb.size.increased)};
`;

export const headerItem = css`
  display: flex;
  align-items: center;
  cursor: pointer;
  white-space: nowrap;
  background: transparent;
  font-size: ${({ theme }) => em(theme.honeycomb.size.reduced)};

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

export const StyledDropdownDefaultTarget = styled(Dropdown.DefaultTarget)`
  ${headerItem};
  padding: 0;
`;

export const StyledDropdownItem = styled(Dropdown.Item)`
  padding-left: ${({ theme }) => em(theme.honeycomb.size.normal, theme.honeycomb.size.reduced)};
  padding-right: ${({ theme }) => em(theme.honeycomb.size.normal, theme.honeycomb.size.reduced)};

  :hover,
  :active {
    color: ${({ theme }) => theme.honeycomb.color.primary.normal};
  }
`;
