import styled, { css } from 'styled-components';

import { DefaultTarget } from '../../internal/DefaultTarget';

export const StyledDefaultTarget = styled(DefaultTarget)<{
  highlightWhenOpen: boolean;
  isShowing: boolean;
}>`
  color: ${({ theme }) => theme.honeycomb.color.text.normal};

  ${({ isShowing, highlightWhenOpen }) =>
    isShowing &&
    highlightWhenOpen &&
    css`
      color: ${({ theme }) => theme.honeycomb.color.primary.normal};
    `};
`;
