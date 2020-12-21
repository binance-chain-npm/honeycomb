import styled from 'styled-components';
import { em } from 'polished';

import { SIZES } from '../internal/useWindowSize';
import { PanelControl } from '../PanelControl';

export const StyledPanelControl = styled(PanelControl)`
  flex-wrap: wrap;
  margin-bottom: -${({ theme }) => em(theme.honeycomb.size.normal)};
`;

export const StyledPanelControlItem = styled(PanelControl.Item)`
  font-size: ${({ theme }) => em(theme.honeycomb.size.reduced)};
  padding: ${({ theme }) => em(theme.honeycomb.size.small, theme.honeycomb.size.reduced)};
  padding-top: ${({ theme }) => em(theme.honeycomb.size.normal, theme.honeycomb.size.reduced)};
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: auto;
  margin-bottom: ${({ theme }) => em(theme.honeycomb.size.normal, theme.honeycomb.size.reduced)};

  :hover {
    border-color: ${({ theme }) => theme.honeycomb.color.primary.normal};
  }

  img,
  svg {
    width: ${({ theme }) => em(theme.honeycomb.size.huge, theme.honeycomb.size.reduced)};
    height: ${({ theme }) => em(theme.honeycomb.size.huge, theme.honeycomb.size.reduced)};
  }

  @media (min-width: ${em(SIZES.md)}) {
    width: calc(
      (100% - ${({ theme }) => em(theme.honeycomb.size.normal * 2, theme.honeycomb.size.reduced)}) /
        3
    );
    height: ${({ theme }) => em(116, theme.honeycomb.size.reduced)};
  }
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;
