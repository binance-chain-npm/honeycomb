import React from 'react';

import { TextInput } from '../TextInput';

import { StyledTextInput } from './styled';

export type Props = Omit<React.ComponentPropsWithoutRef<typeof TextInput>, 'htmlTag'>;

export const Component = (props: Props) => {
  return <StyledTextInput {...props} htmlTag="textarea" />;
};

Component.displayName = 'TextArea';

Component.Label = TextInput.Label;
Component.Input = TextInput.Input;
Component.Left = TextInput.Left;
Component.Right = TextInput.Right;
