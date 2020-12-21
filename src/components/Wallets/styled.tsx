import styled, { css } from 'styled-components';
import { em } from 'polished';

import { PanelControl } from '../PanelControl';

export const StyledPanelControl = styled(PanelControl)`
  flex-wrap: wrap;
  margin-bottom: -${({ theme }) => em(theme.honeycomb.size.normal)};
`;

const verticalLayout = css`
  width: 100%;
  height: auto;
`;

const horizontalLayout = css`
  width: calc(
    (100% - ${({ theme }) => em(theme.honeycomb.size.normal * 2, theme.honeycomb.size.reduced)}) / 3
  );
  height: ${({ theme }) => em(116, theme.honeycomb.size.reduced)};
  margin-bottom: ${({ theme }) => em(theme.honeycomb.size.normal, theme.honeycomb.size.reduced)};
`;

export const StyledPanelControlItem = styled(PanelControl.Item)<{ isXs: boolean }>`
  font-size: ${({ theme }) => em(theme.honeycomb.size.reduced)};
  padding: ${({ theme }) => em(theme.honeycomb.size.small, theme.honeycomb.size.reduced)};
  padding-top: ${({ theme }) => em(theme.honeycomb.size.normal, theme.honeycomb.size.reduced)};
  flex-direction: column;
  align-items: center;
  justify-content: start;

  :hover {
    border-color: ${({ theme }) => theme.honeycomb.color.primary.normal};
  }

  img,
  svg {
    width: ${({ theme }) => em(theme.honeycomb.size.huge, theme.honeycomb.size.reduced)};
    height: ${({ theme }) => em(theme.honeycomb.size.huge, theme.honeycomb.size.reduced)};
  }

  ${({ isXs }) => (isXs ? verticalLayout : horizontalLayout)};
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;
