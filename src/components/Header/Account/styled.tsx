import styled, { css } from 'styled-components';
import { em } from 'polished';

import { Dropdown } from '../../Dropdown';
import { Loading } from '../../Loading';

export const Styled = styled(Dropdown.DefaultTarget)<{ interactive: boolean }>`
  flex-direction: column;
  align-items: start;
  padding: ${({ theme }) => em(theme.honeycomb.size.tiny, theme.honeycomb.size.reduced)}
    ${({ theme }) => em(theme.honeycomb.size.small, theme.honeycomb.size.reduced)};
  cursor: auto;
  width: min-content;

  ${({ interactive }) =>
    interactive &&
    css`
      cursor: pointer;

      :hover,
      :active {
        color: ${({ theme }) => theme.honeycomb.color.primary.normal};
      }
    `};
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledLoading = styled(Loading)`
  margin-left: ${({ theme }) => em(theme.honeycomb.size.tiny, theme.honeycomb.size.reduced)};
  color: ${({ theme }) => theme.honeycomb.color.primary.normal};
`;

export const Icon = styled.div`
  display: flex;
  flex-shrink: 0;
  margin-right: ${({ theme }) => em(theme.honeycomb.size.micro, theme.honeycomb.size.reduced)};
`;

export const Address = styled.div`
  font-weight: 500;
`;

export const Network = styled.div`
  font-size: ${({ theme }) => em(11, theme.honeycomb.size.reduced)};
  color: ${({ theme }) => theme.honeycomb.color.text.normal};
  white-space: nowrap;
`;
