import styled, { css } from 'styled-components';
import { em } from 'polished';

import { styleless } from '../Styleless';
import { boxSizing } from '../../modules/box-sizing';

export const headerItem = css`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => em(theme.honeycomb.size.reduced)};
  cursor: pointer;

  :focus,
  :hover,
  :active {
    background-color: transparent;
    color: ${({ theme }) => theme.honeycomb.color.primary.normal};
  }
`;

export const Styled = styled.div`
  ${styleless};
  ${boxSizing};

  display: flex;
  align-items: center;
  height: ${em(64)};
  padding-left: ${({ theme }) => em(theme.honeycomb.size.increased)};
  padding-right: ${({ theme }) => em(theme.honeycomb.size.increased)};
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

export const Left = styled.div`
  display: flex;
  align-items: center;

  > *:not(:last-child) {
    margin-right: ${({ theme }) => em(theme.honeycomb.size.increased)};
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;

  > *:not(:first-child) {
    margin-left: ${({ theme }) => em(theme.honeycomb.size.increased)};
  }
`;
