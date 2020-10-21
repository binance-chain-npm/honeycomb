import styled, { css, DefaultTheme, keyframes } from 'styled-components';
import { em, transitions, transparentize } from 'polished';

export const Styled = styled.div<{ active: boolean; completed: boolean }>`
  font-size: ${({ theme }) => em(theme.honeycomb.size.small)};
  width: ${({ theme }) => em(theme.honeycomb.size.normal, theme.honeycomb.size.small)};
  height: ${({ theme }) => em(theme.honeycomb.size.normal, theme.honeycomb.size.small)};
  border-radius: 50%;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.honeycomb.color.border};
  color: ${({ theme }) => theme.honeycomb.color.text.normal};
  position: relative;
  ${({ theme }) => transitions(['background', 'color'], theme.honeycomb.duration.normal)};

  ${({ active, completed }) =>
    (active || completed) &&
    css`
      background: ${({ theme }) => theme.honeycomb.color.primary.normal};
    `};
`;

const pulse = (theme: DefaultTheme) => keyframes`
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 ${transparentize(0.2, theme.honeycomb.color.primary.normal)};
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 ${em(theme.honeycomb.size.tiny, theme.honeycomb.size.small)} transparent;
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 transparent;
  }
`;

export const Pulse = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  animation: ${({ theme }) => pulse(theme)} 2s infinite;
`;
