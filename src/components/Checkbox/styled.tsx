import styled, { css } from 'styled-components';
import { transitions, em } from 'polished';

import { icons } from '../Icon';
import { boxSizing } from '../../modules/box-sizing';

export const Input = styled.input`
  ${boxSizing};

  position: absolute;
  width: 0;
  height: 0;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  cursor: inherit;
  opacity: 0;
`;

export const label = css`
  ${boxSizing};

  display: flex;
  flex-direction: row;
  align-items: center;

  ::before {
    content: '';
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({ theme }) => em(theme.honeycomb.size.normal)};
    height: ${({ theme }) => em(theme.honeycomb.size.normal)};
    background: ${({ theme }) => theme.honeycomb.color.bg.input.normal};
    border: 1px solid ${({ theme }) => theme.honeycomb.color.border};
    display: flex;
    cursor: pointer;
    ${({ theme }) => transitions(['background-color', 'border'], theme.honeycomb.duration.normal)};
  }
`;

export const Label = styled.label`
  ${label};

  ::before {
    border-radius: ${({ theme }) => em(theme.honeycomb.radius.reduced)};
  }

  ${Input}:checked ~ & {
    ::before {
      color: ${({ theme }) =>
        theme.honeycomb.color.readable.normal(theme.honeycomb.color.primary.normal)};
      border-color: transparent;
      background: ${({ theme }) => theme.honeycomb.color.primary.normal};
      background-image: url(${icons.Tick});
      background-size: ${({ theme }) => em(theme.honeycomb.size.tiny)};
      background-repeat: no-repeat;
      background-position: center;
    }
  }
`;

export const LabelContent = styled.span`
  cursor: pointer;
  font-size: ${({ theme }) => em(theme.honeycomb.size.reduced)};
  margin-left: ${({ theme }) => em(theme.honeycomb.size.tiny, theme.honeycomb.size.reduced)};
`;
