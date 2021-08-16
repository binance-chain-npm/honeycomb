import styled, { css } from 'styled-components';
import { em } from 'polished';
import { Property } from 'csstype';

import { boxSizing } from '../../modules/box-sizing';
import { Button } from '../Button';
import { hoverEffect } from '../HoverEffect';
import { Icon } from '../Icon';

const ROW_HEIGHT = 56;
const ZINDEX_THEAD_FIXED = 2;

export const Container = styled.div`
  ${boxSizing};
  display: flex;
  flex-direction: column;
  max-width: 100%;
  overflow: hidden;
`;

/* Fixed header does not work in Chrome unless `display: block` is added to the scroll wrapper. */
export const Scroll = styled.div<{ fixed: boolean }>`
  display: flex;
  flex-grow: 1;
  max-width: 100%;
  overflow: auto;
  scroll-behavior: smooth;

  ${({ fixed }) =>
    fixed &&
    css`
      display: block;
    `};
`;

export const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  z-index: ${({ theme }) => theme.honeycomb.zIndexes.normal};
`;

export const Thead = styled.thead``;

export const TheadTr = styled.tr`
  height: ${em(ROW_HEIGHT)};
`;

export interface ThProps {
  fixed: boolean;
  background?: Property.Background;
}

export const Th = styled.th<ThProps>`
  border-bottom: 1px solid ${({ theme }) => theme.honeycomb.color.border};
  text-align: left;
  padding: 0 ${({ theme }) => em(theme.honeycomb.size.increased, theme.honeycomb.size.small)};
  font-size: ${({ theme }) => em(theme.honeycomb.size.small)};
  color: ${({ theme }) => theme.honeycomb.color.text.masked};
  font-weight: 400;

  ${({ fixed }) =>
    fixed &&
    css`
      position: sticky;
      top: 0;
      z-index: ${({ theme }) => theme.honeycomb.zIndexes.normal + ZINDEX_THEAD_FIXED};
    `};

  ${({ background }) =>
    background &&
    css`
      background: ${background};
    `};
`;

export const Td = styled.td`
  text-align: left;
  padding: 0 ${({ theme }) => em(theme.honeycomb.size.increased, theme.honeycomb.size.reduced)};
  font-size: ${({ theme }) => em(theme.honeycomb.size.reduced)};
  color: ${({ theme }) => theme.honeycomb.color.text.normal};
  font-weight: 400;
`;

export const TbodyTr = styled.tr<{ interactive: boolean }>`
  height: ${em(ROW_HEIGHT)};

  :not(:last-child) > ${Td} {
    border-bottom: 1px solid ${({ theme }) => theme.honeycomb.color.border};
  }

  ${({ interactive }) => interactive && hoverEffect};
`;

export const SortWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export interface SortProps {
  selected: boolean;
}

const sortArrowStyles = css<SortProps>`
  ${({ selected }) =>
    selected &&
    css`
      color: ${({ theme }) => theme.honeycomb.color.primary.normal};
    `};
`;

export const SortAscending = styled(Icon.TriangleUp)<SortProps>`
  ${sortArrowStyles};
`;

export const SortDescending = styled(Icon.TriangleDown)<SortProps>`
  ${sortArrowStyles};
  margin-top: -${({ theme }) => em(6, theme.honeycomb.size.small)};
`;

export const Sort = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: ${({ theme }) => em(theme.honeycomb.size.micro, theme.honeycomb.size.small)};
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.honeycomb.color.border};
`;

export const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: ${({ theme }) => em(theme.honeycomb.size.increased)};
  max-width: ${em(296)};

  > *:not(:last-child) {
    margin-right: ${({ theme }) => em(theme.honeycomb.size.micro)};
  }
`;

export const PaginationEllipsis = styled.span`
  > *:not(:last-child) {
    margin-right: ${({ theme }) => em(theme.honeycomb.size.micro)};
  }
`;

export const PageNumberButton = styled(Button)`
  padding: 0 ${({ theme }) => em(theme.honeycomb.size.micro, theme.honeycomb.size.small)};
  min-width: ${({ theme }) => em(theme.honeycomb.size.increased, theme.honeycomb.size.small)};
`;
