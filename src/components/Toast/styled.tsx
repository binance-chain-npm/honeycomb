import styled, { css } from 'styled-components';
import { em } from 'polished';

export const Styled = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.honeycomb.color.bg.normal};
  width: 100%;
  min-height: ${({ theme }) => em(56, theme.honeycomb.size.normal)};
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
  width: ${em(60)};
  background-color: ${({ theme }) => theme.honeycomb.color.text.normal};
`;

export const Right = styled.div`
  ${flex};
  justify-content: start;
  flex-grow: 1;
  color: ${({ theme }) => theme.honeycomb.color.text.normal};
  font-size: ${({ theme }) => em(theme.honeycomb.size.reduced)};
  margin: ${({ theme }) => em(theme.honeycomb.size.reduced, theme.honeycomb.size.reduced)};
  margin-right: ${({ theme }) => em(theme.honeycomb.size.normal, theme.honeycomb.size.reduced)};
`;