import styled from 'styled-components';

import { Icon } from '../Icon';

export const DialogSuccess = styled(Icon.DialogSuccess)``;

export const DialogWarning = styled(Icon.DialogWarning)``;

export const DialogDanger = styled(Icon.DialogDanger)``;

export const DialogSvg = styled.svg`
  width: 64px;
  height: 64px;
  font-size: 64px;
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
