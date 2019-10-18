import styled, { css } from 'styled-components';
import { transitions, em } from 'polished';

import { Component } from './component';

const markerHeight = '2px';

const visibleMarker = css`
  ::after {
    opacity: 1;
  }
`;

const selected = css`
  cursor: auto;
  ${visibleMarker};
`;

export const Styled = styled(Component)`
  position: relative;
  cursor: pointer;
  width: auto;
  margin-right: 0.5em;
  padding-bottom: ${markerHeight};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({ theme }) => transitions(['background', 'color'], theme.duration.normal)};

  ::after {
    content: '';
    position: absolute;
    display: block;
    height: ${markerHeight};
    width: ${em(16)};
    left: calc(50% - ${em(16 / 2)});
    border-radius: 3px;
    background: ${({ theme }) => theme.color.primary};
    opacity: 0;
    ${({ theme }) => transitions(['opacity'], theme.duration.normal)};
  }

  ${({ isSelected }) => isSelected && selected};

  :hover {
    ${visibleMarker}
  }
`;
