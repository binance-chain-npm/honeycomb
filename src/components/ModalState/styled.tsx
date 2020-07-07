import styled from 'styled-components';
import { em } from 'polished';

import { Modal } from '../Modal';

export const variants = ['success', 'warning', 'danger'] as const;
export type Variant = typeof variants[number];

export const StyledModal = styled(Modal)`
  ${Modal.Box} {
    @media (min-width: ${em(768)}) {
      width: ${em(300)};
    }
  }

  ${Modal.Content} {
    align-items: center;
    justify-content: center;
  }
`;

export const Title = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.honeycomb.color.text.normal};
  margin-top: ${({ theme }) => em(theme.honeycomb.size.normal)};
  font-weight: 600;
`;

export const Description = styled.div`
  color: ${({ theme }) => theme.honeycomb.color.text.masked};
  font-size: ${({ theme }) => em(theme.honeycomb.size.reduced)};
  text-align: center;
  margin-top: ${({ theme }) => em(theme.honeycomb.radius.normal, theme.honeycomb.size.reduced)};
`;
