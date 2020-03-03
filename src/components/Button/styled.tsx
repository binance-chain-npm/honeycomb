import styled, { css } from 'styled-components';
import { em } from 'polished';

import { Styleless } from '../Styleless';

export enum Look {
  Default = 'Default',
  Primary = 'Primary',
}

export interface Props {
  look: Look;
}

const primary = css`
  border: none;
  color: ${({ theme }) => theme.honeycomb.color.readable(theme.honeycomb.color.primary)};
`;

const primaryBefore = css`
  opacity: 1;
`;

export const Styled = styled(Styleless)<Props>`
  position: relative;
  color: ${({ theme }) => theme.honeycomb.color.readable(theme.honeycomb.color.secondary)};
  background: ${({ theme }) => theme.honeycomb.color.secondary};
  border-radius: ${({ theme }) =>
    em(theme.honeycomb.size.inputHorizontalPadding, theme.honeycomb.fontSize.small)};
  cursor: pointer;
  height: ${({ theme }) => em(theme.honeycomb.size.touchable, theme.honeycomb.fontSize.small)};
  padding: 0 1em;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: stretch;
  transition: color 300ms;
  font-weight: 600;
  font-size: ${({ theme }) => em(theme.honeycomb.fontSize.small)};
  ${({ look }) => look === Look.Primary && primary};

  ::before {
    content: '';
    position: absolute;
    border-radius: ${({ theme }) =>
      em(theme.honeycomb.size.inputHorizontalPadding, theme.honeycomb.fontSize.small)};
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    opacity: 0;
    transition: opacity 300ms;
    background: ${({ theme }) => theme.honeycomb.color.gradient.primary};
    ${({ look }) => look === Look.Primary && primaryBefore};
  }

  :hover,
  :focus,
  :active {
    border: none;
    color: ${({ theme }) => theme.honeycomb.color.readable(theme.honeycomb.color.primary)};

    ::before {
      background: ${({ theme }) => theme.honeycomb.color.gradient.primary};
      opacity: 1;
    }
  }
`;
