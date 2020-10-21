import styled from 'styled-components';

export const DefaultTarget = styled.div`
  :focus,
  :hover,
  :active {
    color: ${({ theme }) => theme.honeycomb.color.primary.normal};

    svg {
      fill: ${({ theme }) => theme.honeycomb.color.primary.normal};
    }
  }
`;
