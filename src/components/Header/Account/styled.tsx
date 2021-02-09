import styled from 'styled-components';
import { em } from 'polished';

import { GoldLight } from '../../../modules/themes/themes/GoldLight';
import { StyledDropdownDefaultTarget } from '../styled';

export const Styled = styled(StyledDropdownDefaultTarget)`
  flex-direction: column;
  align-items: start;
  background: ${({ theme }) => theme.honeycomb.color.bg.input.normal};
  padding: ${({ theme }) => em(theme.honeycomb.size.tiny, theme.honeycomb.size.reduced)}
    ${({ theme }) => em(theme.honeycomb.size.small, theme.honeycomb.size.reduced)};

  :focus,
  :hover,
  :active {
    background: ${({ theme }) => theme.honeycomb.color.bg.input.normal};
  }
`;

export const Address = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;

  > svg {
    color: ${GoldLight.honeycomb.color.primary.normal};
    flex-shrink: 0;
  }
`;

export const Network = styled.div`
  font-size: ${({ theme }) => em(theme.honeycomb.size.small * 0.9, theme.honeycomb.size.reduced)};
  color: ${({ theme }) => theme.honeycomb.color.text.normal};
`;
