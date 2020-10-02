import React, { useCallback, useState } from 'react';

import { Sections } from '../../modules/sections';

import { Accordion } from '.';

export default {
  title: `${Sections.Elements}/Accordion`,
};

type Panels = React.ComponentPropsWithoutRef<typeof Accordion>['panels'];

export const Behaviour = () => {
  const [activePanel, setActivePanel] = useState(-1);

  const changePanel = useCallback((index) => {
    setActivePanel((prev) => (prev === index ? -1 : index));
  }, []);

  const panels: Panels = new Array(5).fill(null).map((_, index) => {
    return {
      target: (
        <div style={{ height: '3em', display: 'flex', alignItems: 'center' }}>
          Accordion {index}
        </div>
      ),
      children: <div style={{ marginLeft: '1em' }}>Panel {index}</div>,
    };
  });

  return (
    <Accordion
      panels={panels}
      activePanel={activePanel}
      onChange={changePanel}
      data-testid={'accordion'}
    />
  );
};
