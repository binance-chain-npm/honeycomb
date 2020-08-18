import styled, { css } from 'styled-components';
import { transitions, em } from 'polished';

import { styleless } from '../Styleless';
import { boxSizing } from '../../modules/box-sizing';
import { hoverEffect } from '../../modules/hover-effect';

const disabled = css`
  opacity: 0.3;
  pointer-events: none;
`;

export const Styled = styled.button`
  ${styleless};
  ${boxSizing};
  ${hoverEffect};

  cursor: pointer;
  height: ${em(60)};
  padding: 0 ${({ theme }) => em(theme.honeycomb.size.normal)};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-bottom: 1px solid ${({ theme }) => theme.honeycomb.color.border};
  width: 100%;
  ${({ theme }) => transitions(['background', 'color', 'border'], theme.honeycomb.duration.normal)};

  :focus,
  :focus-within {
    box-shadow: 0 0 5px 1px ${({ theme }) => theme.honeycomb.color.primary.normal};
  }

  :hover,
  :active {
    text-decoration: none;
  }

  :disabled {
    ${disabled};
  }

  ${({ disabled: isDisabled }) => isDisabled && disabled};
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 100%;
`;

export const Value = styled.span`
  margin-left: ${({ theme }) => em(theme.honeycomb.size.small, theme.honeycomb.size.reduced)};
  font-size: ${({ theme }) => em(theme.honeycomb.size.reduced)};
  color: ${({ theme }) => theme.honeycomb.color.text.masked};
`;

export const LeftContainer = styled.div`
  margin-right: ${({ theme }) => em(theme.honeycomb.size.small)};
`;

export const RightContainer = styled.div`
  margin-left: ${({ theme }) => em(theme.honeycomb.size.small)};
`;
