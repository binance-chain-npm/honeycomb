import styled, { css } from 'styled-components';
import { em } from 'polished';

import { PanelControl } from '../PanelControl';

export const StyledPanelControl = styled(PanelControl)<{ columns: number }>`
  display: grid;
  row-gap: ${({ theme }) => em(theme.honeycomb.size.normal)};

  ${({ columns }) =>
    columns === 0
      ? css`
          grid-template-columns: minmax(0, 1fr);
        `
      : css`
          grid-template-columns: repeat(${columns}, minmax(0, 1fr));
          column-gap: ${({ theme }) => em(theme.honeycomb.size.normal)};
          grid-auto-rows: 1fr;
        `};
`;

export const StyledPanelControlItem = styled(PanelControl.Item)<{ columns: number }>`
  font-size: ${({ theme }) => em(theme.honeycomb.size.reduced)};
  padding: ${({ theme }) => em(theme.honeycomb.size.normal, theme.honeycomb.size.reduced)}
    ${({ theme }) => em(theme.honeycomb.size.small, theme.honeycomb.size.reduced)};
  align-items: center;
  width: 100%;
  height: 100%;

  ${({ columns }) =>
    columns === 0
      ? css`
          justify-content: space-between;
          flex-flow: wrap;
          flex-direction: row-reverse;

          img,
          svg {
            width: ${({ theme }) =>
              em(theme.honeycomb.size.increased, theme.honeycomb.size.reduced)};
            height: ${({ theme }) =>
              em(theme.honeycomb.size.increased, theme.honeycomb.size.reduced)};
            flex-shrink: 0;
          }
        `
      : css`
          flex-direction: column;
          justify-content: start;

          img,
          svg {
            width: ${({ theme }) => em(theme.honeycomb.size.huge, theme.honeycomb.size.reduced)};
            height: ${({ theme }) => em(theme.honeycomb.size.huge, theme.honeycomb.size.reduced)};
          }
        `};
`;

export const Description = styled.div<{ columns: number }>`
  color: ${({ theme }) => theme.honeycomb.color.text.masked};
  margin-top: ${({ theme }) => em(theme.honeycomb.size.tiny, theme.honeycomb.size.reduced)};
  font-size: ${({ theme }) => em(theme.honeycomb.size.small, theme.honeycomb.size.reduced)};
  width: 100%;

  ${({ columns }) =>
    columns === 0
      ? css`
          text-align: start;
        `
      : css`
          img,
          svg {
            width: ${({ theme }) => em(theme.honeycomb.size.huge, theme.honeycomb.size.reduced)};
            height: ${({ theme }) => em(theme.honeycomb.size.huge, theme.honeycomb.size.reduced)};
          }
        `};
`;
