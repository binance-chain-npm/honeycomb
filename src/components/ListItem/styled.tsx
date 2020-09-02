import styled, { css } from 'styled-components';
import { em, transitions } from 'polished';

import { hoverEffect } from '../HoverEffect';
import { styleless } from '../Styleless';
import { boxSizing } from '../../modules/box-sizing';

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

export const ContentContainer = styled.div`
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  height: 100%;
`;

export const Content = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  text-align: left;
`;

export const Left = styled.div`
  margin-right: ${({ theme }) => em(theme.honeycomb.size.small)};
`;

export const Right = styled.div`
  margin-left: ${({ theme }) => em(theme.honeycomb.size.small)};
`;
