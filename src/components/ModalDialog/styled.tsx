import styled from 'styled-components';
import { em } from 'polished';

import { Icon } from '../Icon';

export const DialogSuccess = styled(Icon.DialogSuccess)`
  font-size: ${({ theme }) => em(theme.honeycomb.size.normal * 4)};
`;

export const DialogWarning = styled(Icon.DialogWarning)`
  font-size: ${({ theme }) => em(theme.honeycomb.size.normal * 4)};
`;

export const DialogDanger = styled(Icon.DialogDanger)`
  font-size: ${({ theme }) => em(theme.honeycomb.size.normal * 4)};
`;

export const DialogSvg = styled.svg`
  width: 64px;
  height: 64px;
  margin: 0 auto;
  margin-bottom: 16px;
`;

export const DialogTitle = styled.div`
  font-size: 16px;
  text-align: center;
  color: #1e2026;
`;

export const DialogContent = styled.div`
  color: #474d57;
  font-size: 14px;
  text-align: center;
`;

export const DialogChildren = styled.span`
  display: block;
  margin-top: 24px;
`;
