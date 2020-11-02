import styled, { css } from 'styled-components';
import { transitions, em } from 'polished';

import { Input, label } from '../Checkbox/styled';

export const Styled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Label = styled.label`
  ${label};

  ::before {
    border-radius: 50%;
  }

  ${Input}:checked ~ & {
    ::before {
      border: 1px solid ${({ theme }) => theme.honeycomb.color.primary.normal};
      background: transparent;
    }
  }
`;

export const Check = styled.div<{ visible: boolean }>`
  position: absolute;
  left: ${em(3.5)};
  width: ${em(9)};
  height: ${em(9)};
  border-radius: 50%;
  ${({ theme }) => transitions(['background-color', 'border'], theme.honeycomb.duration.normal)};

  ${({ visible }) =>
    visible &&
    css`
      background: ${({ theme }) => theme.honeycomb.color.primary.normal};
    `};
`;
