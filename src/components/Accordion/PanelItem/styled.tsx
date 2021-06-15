import styled from 'styled-components';

export const Styled = styled.div``;

export const Content = styled.div`
  overflow: hidden;
  will-change: height;
  transition: height ${({ theme }) => theme.honeycomb.duration.normal} ease-in-out;
`;
