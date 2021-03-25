import styled, { css } from 'styled-components';
import { em, transitions } from 'polished';

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

export const Styled = styled.li<{ active: boolean }>`
  display: flex;
  align-items: center;
  ${({ theme }) => transitions(['color'], theme.honeycomb.duration.normal)};

  ${({ active }) => active && current};
  ${({ active }) => !active && previous};
`;

export const Label = styled.span`
  font-size: ${({ theme }) => em(theme.honeycomb.size.small)};
`;

export const Caret = styled(Icon.CaretRight)`
  font-size: ${em(6)};
  color: ${({ theme }) => theme.honeycomb.color.text.masked};
  margin: 0 ${({ theme }) => em(theme.honeycomb.size.tiny, 6)};
`;
