import styled from 'styled-components';

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.honeycomb.size.scale(2)};
`;
