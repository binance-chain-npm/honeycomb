import React, { useMemo } from 'react';

export interface ContextType {
  mode: 'test' | 'production';
  apiKey?: string;
  signatureEndpoint?: string;
}

export const Context = React.createContext<ContextType>({
  mode: 'test',
  apiKey: undefined,
  signatureEndpoint: undefined,
});

export type Props = {
  children: React.ReactNode;
  mode: ContextType['mode'];
  apiKey: NonNullable<ContextType['apiKey']>;
  /**
   * This endpoint should accept a POST request with a JSON body such as the following.
   *
   * ```json
   * { "url": "…" }
   * ```
   *
   * And return a JSON object with the property `signedUrl` (`url` and `signature` are recommended too).
   */
  signatureEndpoint?: ContextType['signatureEndpoint'];
};

export const Provider = ({ children, mode, apiKey, signatureEndpoint }: Props) => {
  const value = useMemo(() => ({ mode, apiKey, signatureEndpoint }), [
    mode,
    apiKey,
    signatureEndpoint,
  ]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
