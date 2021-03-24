import styled, { css } from 'styled-components';
import { em } from 'polished';

import { Icon } from '../../Icon';

const current = css`
  color: ${({ theme }) => theme.honeycomb.color.text.normal};
`;

const previous = css`
  color: ${({ theme }) => theme.honeycomb.color.text.masked};
  cursor: pointer;

  :focus,
  :hover,
  :active {
    color: ${({ theme }) => theme.honeycomb.color.primary.active};
  }
`;

export const Label = styled.span<{ active: boolean }>`
  font-size: ${({ theme }) => em(theme.honeycomb.size.small)};

  ${({ active }) => active && current};
  ${({ active }) => !active && previous};
`;

export const Caret = styled(Icon.CaretRight)`
  font-size: ${em(6)};
  color: ${({ theme }) => theme.honeycomb.color.text.masked};
  margin: 0 ${({ theme }) => em(theme.honeycomb.size.tiny, 6)};
`;
