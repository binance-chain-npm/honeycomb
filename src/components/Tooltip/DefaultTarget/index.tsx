import styled from 'styled-components';

import { styleless } from '../../Styleless';

export const DefaultTarget = styled.div`
  ${styleless};

  :focus,
  :hover,
  :active {
    color: ${({ theme }) => theme.honeycomb.color.primary.normal};

    svg {
      fill: ${({ theme }) => theme.honeycomb.color.primary.normal};
    }
  }
`;
