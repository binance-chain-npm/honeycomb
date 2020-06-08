import React, { useMemo } from 'react';

export interface ContextType {
  mode: 'test' | 'production';
  apiKey?: string;
}

export const Context = React.createContext<ContextType>({
  mode: 'test',
  apiKey: undefined,
});

export type Props = {
  children: React.ReactNode;
  mode: ContextType['mode'];
  apiKey: NonNullable<ContextType['apiKey']>;
};

export const Provider = ({ children, mode, apiKey }: Props) => {
  const value = useMemo(() => ({ mode, apiKey }), [mode, apiKey]);
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
