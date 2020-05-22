import React from 'react';

import { Label } from '../internal/Label';
import { TextInput } from '../TextInput';

import { StyledTextInput } from './styled';

export type Props = React.ComponentPropsWithoutRef<typeof TextInput>;

export const Component = (props: Props) => {
  return <StyledTextInput {...props} element="textarea" />;
};

Component.displayName = 'TextArea';

Component.Label = Label;
Component.Input = TextInput.Input;
Component.Left = TextInput.Left;
Component.Right = TextInput.Right;
