import styled, { css } from 'styled-components';
import { transitions } from 'polished';

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
  background: ${({ theme }) => theme.honeycomb.color.primary.normal};
  color: ${({ theme }) =>
    theme.honeycomb.color.readable.normal(theme.honeycomb.color.primary.normal)};

  :hover,
  :active {
    border: none;
    background: ${({ theme }) => theme.honeycomb.color.primary.active};
    color: ${({ theme }) =>
      theme.honeycomb.color.readable.normal(theme.honeycomb.color.primary.active)};
  }
`;

const disabled = css`
  border: none !important;
  background: ${({ theme }) => theme.honeycomb.color.bg.disabled} !important;
  color: ${({ theme }) =>
    theme.honeycomb.color.readable.disabled(theme.honeycomb.color.bg.disabled)} !important;
  cursor: not-allowed !important;
`;

export const Styled = styled(Styleless)<Props>`
  position: relative;
  color: ${({ theme }) => theme.honeycomb.color.readable.normal(theme.honeycomb.color.bg.normal)};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.honeycomb.color.border};
  border-radius: ${hcStyle.halfOf(hcStyle.huge({ forFontSize: 'reduced' }))};
  cursor: pointer;
  height: ${hcStyle.huge({ forFontSize: 'reduced' })};
  padding: 0 ${hcStyle.normal({ forFontSize: 'reduced' })};
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: stretch;
  font-weight: 600;
  font-size: ${hcStyle.reduced()};
  ${({ theme }) => transitions(['background', 'color', 'border'], theme.honeycomb.duration.normal)};

  :hover,
  :active {
    border-color: ${({ theme }) => theme.honeycomb.color.primary.active};
    background: ${({ theme }) => theme.honeycomb.color.primary.active};
    color: ${({ theme }) =>
      theme.honeycomb.color.readable.normal(theme.honeycomb.color.primary.active)};
  }

  :focus,
  :focus-within {
    box-shadow: 0 0 5px 1px ${({ theme }) => theme.honeycomb.color.primary};
  }

  ${({ look }) => look === Look.Primary && primary};
  ${({ disabled: isDisabled }) => isDisabled && disabled};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;
