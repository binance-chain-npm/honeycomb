import styled from 'styled-components';
import { em } from 'polished';

import { SIZES } from '../internal/useWindowSize';
import { PanelControl } from '../PanelControl';

export const StyledPanelControl = styled(PanelControl)<{ columns: number }>`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  row-gap: ${({ theme }) => em(theme.honeycomb.size.normal)};

  @media (min-width: ${em(SIZES.md)}) {
    grid-template-columns: repeat(${({ columns }) => columns}, minmax(0, 1fr));
    column-gap: ${({ theme }) => em(theme.honeycomb.size.normal)};
  }
`;

export const StyledPanelControlItem = styled(PanelControl.Item)`
  font-size: ${({ theme }) => em(theme.honeycomb.size.reduced)};
  padding: ${({ theme }) => em(theme.honeycomb.size.small, theme.honeycomb.size.reduced)};
  padding-top: ${({ theme }) => em(theme.honeycomb.size.normal, theme.honeycomb.size.reduced)};
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 100%;

  img,
  svg {
    width: ${({ theme }) => em(theme.honeycomb.size.huge, theme.honeycomb.size.reduced)};
    height: ${({ theme }) => em(theme.honeycomb.size.huge, theme.honeycomb.size.reduced)};
  }
`;
