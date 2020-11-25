import React, { useContext, useMemo } from 'react';

export type Testable = { 'data-testid'?: string };

const HoneycombTestContext = React.createContext<string | undefined>(undefined);

export const HoneycombTestIdProvider = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value?: string;
}) => {
  const contextTestId = useContext(HoneycombTestContext);
  return (
    <HoneycombTestContext.Provider value={genericBuildTestId({ parent: contextTestId, id: value })}>
      {children}
    </HoneycombTestContext.Provider>
  );
};

const genericBuildTestId = ({
  context,
  parent,
  id,
}: {
  context?: string;
  parent?: string;
  id?: string;
}) => {
  const res = (() => {
    if (!id || !parent) return id;

    const parentArray = parent.split('.');
    const idArray = id.split('.');

    for (let i = 0; i < idArray.length; i++) {
      if (parentArray[i] === idArray[i]) continue;
      if (i === 0) return id;
      return idArray.slice(i).join('.');
    }

    return id;
  })();

  const withoutContext = [parent, res].filter((it) => !!it).join('.');
  if (!context || withoutContext.startsWith(context)) {
    return withoutContext;
  }

  return [context, withoutContext].filter((it) => !!it).join('.');
};

export const useBuildTestId = ({ id: parent }: { id?: string } = {}) => {
  const context = useContext(HoneycombTestContext);

  return useMemo(() => {
    const buildTestId = (id?: string) => {
      return genericBuildTestId({ context, parent, id });
    };

    return { buildTestId } as const;
  }, [parent, context]);
};
