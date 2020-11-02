import styled from 'styled-components';
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

  ::after {
    content: '';
    ${({ theme }) => transitions(['background-color'], theme.honeycomb.duration.normal)};
  }

  ${Input}:checked ~ & {
    ::before {
      border: 1px solid ${({ theme }) => theme.honeycomb.color.primary.normal};
      background: transparent;
    }

    ::after {
      position: absolute;
      content: '';
      display: flex;
      align-items: center;
      justify-content: center;
      left: ${em(3.5)};
      width: ${em(9)};
      height: ${em(9)};
      border-radius: 50%;
      background: ${({ theme }) => theme.honeycomb.color.primary.normal};
    }
  }
`;
