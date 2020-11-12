import React from 'react';
import QRCode from 'qrcode.react';
import { useTheme } from 'styled-components';

import { Container, StyledQRBg, QRWrapper } from './styled';

export type Props = {
  hasFrame?: boolean;
  value: string;
  className?: string;
  style?: React.CSSProperties;
};

export const Component = ({ hasFrame = false, value, className, style }: Props) => {
  const theme = useTheme();

  return (
    <Container className={className} style={style}>
      {hasFrame && <StyledQRBg />}
      <QRWrapper hasFrame={hasFrame}>
        <QRCode
          value={value}
          size={100}
          level="M"
          renderAs="svg"
          bgColor={theme.honeycomb.color.bg.normal}
          fgColor={theme.honeycomb.color.text.normal}
        />
      </QRWrapper>
    </Container>
  );
};

Component.displayName = 'QRCode';
