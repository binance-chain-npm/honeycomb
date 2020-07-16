import styled, { css } from 'styled-components';
import { transitions, em } from 'polished';

import { styleless } from '../Styleless';
import { boxSizing } from '../../modules/box-sizing';

const justCopied = css`
  background: ${({ theme }) => theme.honeycomb.color.success.normal};
  color: ${({ theme }) =>
    theme.honeycomb.color.readable.normal(theme.honeycomb.color.success.normal)};
`;

export const Container = styled.button<{ wasJustCopied: boolean }>`
  ${styleless};
  ${boxSizing};

  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.honeycomb.color.bg.masked};
  border-radius: ${({ theme }) => em(theme.honeycomb.size.large / 2)};
  height: ${({ theme }) => em(theme.honeycomb.size.large)};
  padding: 0 ${({ theme }) => em(theme.honeycomb.size.small)};
  width: 100%;
  ${({ theme }) => transitions(['background', 'color'], theme.honeycomb.duration.normal)};
  ${({ wasJustCopied }) => wasJustCopied && justCopied};

  :not(:disabled) {
    cursor: pointer;
  }
`;

export const Text = styled.span`
  height: ${({ theme }) => em(theme.honeycomb.size.increased)};
  font-size: ${({ theme }) => em(theme.honeycomb.size.small)};
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: 1em;
`;

export const IconContainer = styled.div`
  position: relative;
  height: ${({ theme }) => em(theme.honeycomb.size.normal)};
  width: ${({ theme }) => em(theme.honeycomb.size.normal)};
`;

export const IconWrapper = styled.div`
  position: absolute;
  height: ${({ theme }) => em(theme.honeycomb.size.normal)};
  width: ${({ theme }) => em(theme.honeycomb.size.normal)};
`;
