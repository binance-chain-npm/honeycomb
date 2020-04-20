import styled from 'styled-components';

import { hcStyle } from '../../modules/themes';

export const Container = styled.ol`
  counter-reset: listCounter;
  display: flex;
  list-style: none;
  margin: -${hcStyle.reduced()};
  padding: 0;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Item = styled.li`
  counter-increment: listCounter;
  display: flex;
  min-width: 50px;
  background: ${({ theme }) => theme.honeycomb.color.bg.masked};
  color: ${({ theme }) => theme.honeycomb.color.readable.normal(theme.honeycomb.color.bg.masked)};
  border: 1px solid ${({ theme }) => theme.honeycomb.color.border};
  border-radius: ${hcStyle.halfOf(hcStyle.huge())};
  flex-grow: 1;
  flex-shrink: 0;
  align-items: center;
  justify-content: flex-start;
  margin: ${hcStyle.reduced()};
  padding-right: ${hcStyle.increased()};
  height: ${hcStyle.huge()};
  overflow: hidden;

  ::before {
    content: '#' counter(listCounter);
    font-size: ${hcStyle.reduced()};
    min-width: ${hcStyle.huge({ forFontSize: 'reduced' })};
    height: ${hcStyle.huge({ forFontSize: 'reduced' })};
    background: ${({ theme }) => theme.honeycomb.color.bg.normal};
    display: flex;
    padding: 0 ${hcStyle.reduced({ forFontSize: 'reduced' })};
    margin-right: ${hcStyle.increased({ forFontSize: 'reduced' })};
    align-items: center;
    justify-content: center;
  }
`;
