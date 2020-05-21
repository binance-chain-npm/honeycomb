import styled from 'styled-components';

import { hcStyle } from '../../../modules/themes';

export const Description = styled.span`
  color: ${({ theme }) => theme.honeycomb.color.bg.disabled};
  margin-left: ${hcStyle.increased({ forFontSize: 'reduced' })};
`;
