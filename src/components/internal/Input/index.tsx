import styled, { css } from 'styled-components';
import { transitions, em } from 'polished';

export const baseInputStyle = css`
  flex: 1;
  display: flex;
  margin: 0;
  padding: 0;
  outline: none;
  border: none;
  text-decoration: none;
  background: transparent;
  color: inherit;
  height: ${({ theme }) => em(theme.honeycomb.size.huge, theme.honeycomb.size.reduced)};
  line-height: ${({ theme }) => em(theme.honeycomb.size.huge, theme.honeycomb.size.reduced)};
  text-indent: ${({ theme }) => em(theme.honeycomb.size.small, theme.honeycomb.size.reduced)};
  padding-right: ${({ theme }) => em(theme.honeycomb.size.small, theme.honeycomb.size.reduced)};
  font-size: ${({ theme }) => em(theme.honeycomb.size.reduced)};

  ${({ theme }) => transitions(['color'], `${theme.honeycomb.duration.normal} ease-in-out`)};

  ::placeholder {
    color: ${({ theme }) => theme.honeycomb.color.text.masked};
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: ${({ theme }) => theme.honeycomb.color.bg.masked};
  border: 1px solid transparent;
  border-radius: ${({ theme }) => em(theme.honeycomb.radius.normal, theme.honeycomb.size.reduced)};
  color: ${({ theme }) => theme.honeycomb.color.readable.normal(theme.honeycomb.color.bg.masked)};
  overflow: hidden;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: stretch;
  padding-left: ${({ theme }) => em(theme.honeycomb.size.increased)};
`;

export const Right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: stretch;
  padding-right: ${({ theme }) => em(theme.honeycomb.size.increased)};
`;
