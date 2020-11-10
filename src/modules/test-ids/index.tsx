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

const genericBuildTestId = ({ parent, id }: { parent?: string; id?: string }) => {
  if (!parent && !id) return undefined;
  if (!parent) return id;
  if (!id) return parent;
  return `${parent}.${id}`;
};

export const useBuildTestId = ({ id: parent }: { id?: string } = {}) => {
  const contextTestId = useContext(HoneycombTestContext);
  return useMemo(() => {
    const buildTestId = (id?: string) => {
      return genericBuildTestId({
        parent: genericBuildTestId({ parent: contextTestId, id: parent }),
        id,
      });
    };

    return { buildTestId } as const;
  }, [parent, contextTestId]);
};
