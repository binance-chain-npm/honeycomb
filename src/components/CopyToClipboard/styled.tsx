import styled, { css } from 'styled-components';
import { transitions } from 'polished';

import { Button } from '../Button';

const justCopied = css`
  background: ${({ theme }) => theme.honeycomb.color.success.normal};
  color: ${({ theme }) =>
    theme.honeycomb.color.readable.normal(theme.honeycomb.color.success.normal)};
`;

export const Container = styled(Button)<{ wasJustCopied: boolean }>`
  background: ${({ theme }) => theme.honeycomb.color.bg.masked};

  :focus,
  :hover,
  :active {
    background: ${({ theme }) => theme.honeycomb.color.bg.masked};
    color: ${({ theme }) => theme.honeycomb.color.text.normal};
  }

  :not(:disabled) {
    cursor: pointer;
  }

  :disabled {
    opacity: 1;
  }

  ${({ theme }) => transitions(['background', 'color'], theme.honeycomb.duration.normal)};
  ${({ wasJustCopied }) => wasJustCopied && justCopied};
`;

export const IconContainer = styled.div`
  position: relative;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
`;
