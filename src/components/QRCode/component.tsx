import React from 'react';
import { useTheme } from 'styled-components';

import { Container, StyledQRBg, QRWrapper, StyledQRCode } from './styled';

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
      <QRWrapper>
        <StyledQRCode
          value={value}
          size={100}
          level="M"
          renderAs="svg"
          bgColor={theme.honeycomb.color.bg.normal}
          fgColor={theme.honeycomb.color.text.normal}
          hasFrame={hasFrame}
        />
      </QRWrapper>
    </Container>
  );
};

Component.displayName = 'QRCode';
