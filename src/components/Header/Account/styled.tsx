import styled from 'styled-components';
import { em } from 'polished';

import { Dropdown } from '../../Dropdown';

export const Styled = styled(Dropdown.DefaultTarget)`
  flex-direction: column;
  align-items: start;
  padding: ${({ theme }) => em(theme.honeycomb.size.tiny, theme.honeycomb.size.reduced)}
    ${({ theme }) => em(theme.honeycomb.size.small, theme.honeycomb.size.reduced)};
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
  display: flex;
  flex-shrink: 0;
`;

export const Address = styled.div`
  font-weight: 500;
  margin-left: ${({ theme }) => em(theme.honeycomb.size.micro, theme.honeycomb.size.reduced)};
`;

export const Network = styled.div`
  font-size: ${({ theme }) => em(theme.honeycomb.size.small * 0.9, theme.honeycomb.size.reduced)};
  color: ${({ theme }) => theme.honeycomb.color.text.normal};
`;
