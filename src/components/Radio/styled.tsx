import styled from 'styled-components';
import { em, transitions } from 'polished';

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

  > svg:first-child {
    opacity: 0;
    ${({ theme }) => transitions(['opacity'], theme.honeycomb.duration.normal)};
  }

  ${Input}:checked ~ & {
    ::before {
      border: transparent;
      background: transparent;
    }

    > svg:first-child {
      opacity: 1;
    }
  }
`;

export const Svg = styled.svg`
  position: absolute;
  width: ${({ theme }) => em(theme.honeycomb.size.normal)};
  height: ${({ theme }) => em(theme.honeycomb.size.normal)};
  overflow: visible;
`;
