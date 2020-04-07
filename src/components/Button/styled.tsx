import styled, { css } from 'styled-components';

import { Styleless } from '../Styleless';
import { hcStyle } from '../../modules/themes';

export enum Look {
  Default = 'Default',
  Primary = 'Primary',
}

export interface Props {
  look: Look;
  disabled?: boolean;
}

const primary = css`
  border: none;
  color: ${({ theme }) => theme.honeycomb.color.readable(theme.honeycomb.color.primary)};
`;

const primaryBefore = css`
  opacity: 1;
`;

const disabled = css`
  background: ${({ theme }) => theme.honeycomb.color.placeholder};
  color: ${({ theme }) => theme.honeycomb.color.readable(theme.honeycomb.color.placeholder)};
  cursor: not-allowed;

  ::before {
    content: none;
  }
`;

export const Styled = styled(Styleless)<Props>`
  position: relative;
  color: ${({ theme }) => theme.honeycomb.color.readable(theme.honeycomb.color.secondary)};
  background: ${({ theme }) => theme.honeycomb.color.secondary};
  border-radius: ${hcStyle.halfOf(hcStyle.huge({ forFontSize: 'reduced' }))};
  cursor: pointer;
  height: ${hcStyle.huge({ forFontSize: 'reduced' })};
  padding: 0 ${hcStyle.normal({ forFontSize: 'reduced' })};
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: stretch;
  transition: color 300ms;
  font-weight: 600;
  font-size: ${hcStyle.reduced()};
  ${({ look }) => look === Look.Primary && primary};

  ::before {
    content: '';
    position: absolute;
    border-radius: ${hcStyle.halfOf(hcStyle.huge({ forFontSize: 'reduced' }))};
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
  :active {
    border: none;
    color: ${({ theme }) => theme.honeycomb.color.readable(theme.honeycomb.color.primary)};

    ::before {
      background: ${({ theme }) => theme.honeycomb.color.gradient.primary};
      opacity: 1;
    }
  }

  :focus,
  :focus-within {
    box-shadow: 0 0 5px 1px ${({ theme }) => theme.honeycomb.color.primary};
  }

  ${({ disabled: isDisabled }) => isDisabled && disabled};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;
