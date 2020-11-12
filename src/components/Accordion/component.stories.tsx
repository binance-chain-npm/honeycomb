import React, { useCallback, useState } from 'react';

import { Sections } from '../../modules/sections';
import { GoldLight } from '../../modules/themes/themes/GoldLight';
import { Icon } from '../Icon';
import { ListItem } from '../ListItem';

import { Accordion } from './';

export default {
  component: Accordion,
  title: `${Sections.Elements}/Accordion`,
};

type Panels = React.ComponentPropsWithoutRef<typeof Accordion>['panels'];

export const Default = () => {
  const [activePanel, setActivePanel] = useState(-1);

  const changePanel = useCallback((index) => {
    setActivePanel((prev) => (prev === index ? -1 : index));
  }, []);

  const panels: Panels = new Array(5).fill(null).map((_, index) => {
    return {
      element: (
        <ListItem
          right={
            activePanel === index ? (
              <Icon.CaretUp fontSize={GoldLight.honeycomb.size.small} />
            ) : (
              <Icon.CaretDown fontSize={GoldLight.honeycomb.size.small} />
            )
          }
          data-testid={'item'}
        >
          Accordion {index + 1}
        </ListItem>
      ),
      children: (
        <ListItem style={{ height: '2em' }} data-testid={'child'}>
          Panel {index + 1}
        </ListItem>
      ),
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
