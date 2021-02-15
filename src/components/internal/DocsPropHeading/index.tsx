import styled from 'styled-components';
import { em } from 'polished';
import { Subheading } from '@storybook/addon-docs/blocks';

export const DocsPropHeading = styled(Subheading)`
  font-size: ${({ theme }) => em(theme.honeycomb.size.normal)};
`;
