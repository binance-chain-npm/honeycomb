import styled, { css } from 'styled-components';
import { em } from 'polished';

export const Styled = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const flex = css`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Left = styled.div`
  ${flex};
  justify-content: center;
  flex-shrink: 0;
  padding: 0 ${({ theme }) => em(theme.honeycomb.size.reduced)};
  background-color: ${({ theme }) => theme.honeycomb.color.text.normal};
`;

export const Right = styled.div`
  ${flex};
  justify-content: start;
  flex-grow: 1;
  color: ${({ theme }) => theme.honeycomb.color.text.normal};
  font-size: ${({ theme }) => em(theme.honeycomb.size.reduced)};
  padding: ${({ theme }) => em(theme.honeycomb.size.reduced, theme.honeycomb.size.reduced)};
`;
