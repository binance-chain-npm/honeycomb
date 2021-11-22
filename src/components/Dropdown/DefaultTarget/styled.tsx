import styled, { css } from 'styled-components';

import { DefaultTarget } from '../../internal/DefaultTarget';

export const StyledDefaultTarget = styled(DefaultTarget)<{
  highlightWhenOpen: boolean;
  open: boolean;
}>`
  color: ${({ theme }) => theme.honeycomb.color.text.normal};

  ${({ open, highlightWhenOpen }) =>
    open &&
    highlightWhenOpen &&
    css`
      color: ${({ theme }) => theme.honeycomb.color.primary.normal};
    `};
`;
