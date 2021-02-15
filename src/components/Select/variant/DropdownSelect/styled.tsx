import styled from 'styled-components';
import { em } from 'polished';

import { tooltip } from '../../../Tooltip/styled';

export const Styled = styled.div`
  ${tooltip};

  min-width: ${em(360)};
  border-radius: ${({ theme }) => em(theme.honeycomb.radius.normal)};
`;
