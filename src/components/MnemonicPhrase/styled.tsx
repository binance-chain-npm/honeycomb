import styled from 'styled-components';
import { em } from 'polished';

export const Container = styled.ol`
  counter-reset: listCounter;
  display: flex;
  list-style: none;
  margin: -${({ theme }) => theme.honeycomb.size.scale(-5)};
  padding: 0;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Item = styled.li`
  counter-increment: listCounter;
  display: flex;
  min-width: 50px;
  background: ${({ theme }) => theme.honeycomb.color.secondary};
  color: ${({ theme }) => theme.honeycomb.color.readable(theme.honeycomb.color.secondary)};
  border-radius: ${({ theme }) => em(theme.honeycomb.size.touchable / 2)};
  flex-grow: 1;
  flex-shrink: 0;
  align-items: center;
  justify-content: flex-start;
  margin: ${({ theme }) => theme.honeycomb.size.scale(-5)};
  padding-right: ${({ theme }) => theme.honeycomb.size.scale(1)};
  height: ${({ theme }) => em(theme.honeycomb.size.touchable)};

  ::before {
    content: '#' counter(listCounter);
    font-size: ${({ theme }) => em(theme.honeycomb.fontSize.tiny)};
    min-width: ${({ theme }) => em(theme.honeycomb.size.touchable, theme.honeycomb.fontSize.tiny)};
    height: ${({ theme }) => em(theme.honeycomb.size.touchable, theme.honeycomb.fontSize.tiny)};
    background: ${({ theme }) => theme.honeycomb.color.bg};
    border: 1px solid ${({ theme }) => theme.honeycomb.color.secondary};
    border-right: none;
    border-top-left-radius: ${({ theme }) =>
      em(theme.honeycomb.size.touchable / 2, theme.honeycomb.fontSize.tiny)};
    border-bottom-left-radius: ${({ theme }) =>
      em(theme.honeycomb.size.touchable / 2, theme.honeycomb.fontSize.tiny)};
    display: flex;
    padding: 0 ${({ theme }) => theme.honeycomb.size.scale(-3)};
    margin-right: ${({ theme }) => theme.honeycomb.size.scale(3)};
    align-items: center;
    justify-content: center;
  }
`;
