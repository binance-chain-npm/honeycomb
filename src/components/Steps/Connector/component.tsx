import React, { useContext } from 'react';

import { Context } from '../context';

import { Styled } from './styled';

export type Props = {
  size?: number;
};

export const Component = ({ size, ...otherProps }: Props) => {
  const { orientation } = useContext(Context);

  return <Styled {...otherProps} size={size} $orientation={orientation} />;
};

Component.displayName = 'Steps.Connector';
