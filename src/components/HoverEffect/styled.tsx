import styled, { css } from 'styled-components';
import { rgba } from 'polished';

export const hoverEffect = css`
  :focus,
  :hover,
  :active {
    background-color: ${({ theme }) => rgba(theme.honeycomb.color.primary.normal, 0.06)};
  }
`;

export const Styled = styled.div`
  ${hoverEffect};
`;
