import styled, { css } from 'styled-components';
import { em } from 'polished';

import { boxSizing } from '../../modules/box-sizing';
import { Button } from '../Button';
import { hoverEffect } from '../HoverEffect';
import { Icon } from '../Icon';

const ROW_HEIGHT = 56;

export const Container = styled.div`
  ${boxSizing};
  display: block;
  max-width: 100%;
`;

export const Scroll = styled.div`
  display: block;
  max-width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
`;

export const Table = styled.table`
  width: 100%;
  border-spacing: 0;
`;

export const Thead = styled.thead``;

export const TheadTr = styled.tr`
  height: ${em(ROW_HEIGHT)};
`;

export const Th = styled.th`
  border-bottom: 1px solid ${({ theme }) => theme.honeycomb.color.border};
  text-align: left;
  padding: 0 ${({ theme }) => em(theme.honeycomb.size.increased, theme.honeycomb.size.small)};
  font-size: ${({ theme }) => em(theme.honeycomb.size.small)};
  color: ${({ theme }) => theme.honeycomb.color.text.masked};
  font-weight: 400;
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

interface SortProps {
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
  display: inline-flex;
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
