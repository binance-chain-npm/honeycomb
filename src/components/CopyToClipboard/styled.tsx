import styled, { css } from 'styled-components';
import { transitions } from 'polished';

import { hcStyle } from '../../modules/themes';
import { styleless } from '../Styleless';

const justCopied = css`
  background: ${({ theme }) => theme.honeycomb.color.success.normal};
  color: ${({ theme }) =>
    theme.honeycomb.color.readable.normal(theme.honeycomb.color.success.normal)};
`;

export const Container = styled.button<{ wasJustCopied: boolean }>`
  ${styleless};

  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.honeycomb.color.bg.masked};
  border-radius: ${hcStyle.halfOf(hcStyle.large())};
  height: ${hcStyle.large()};
  padding: 0 ${hcStyle.small()};
  width: 100%;
  ${({ theme }) => transitions(['background', 'color'], theme.honeycomb.duration.normal)};
  ${({ wasJustCopied }) => wasJustCopied && justCopied};

  :not(:disabled) {
    cursor: pointer;
  }
`;

export const Text = styled.span`
  height: ${hcStyle.increased()};
  font-size: ${hcStyle.small()};
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: 1em;
`;

export const IconContainer = styled.div`
  position: relative;
  height: ${hcStyle.normal()};
  width: ${hcStyle.normal()};
`;

export const IconWrapper = styled.div`
  position: absolute;
  height: ${hcStyle.normal()};
  width: ${hcStyle.normal()};
`;
