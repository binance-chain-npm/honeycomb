import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { em } from 'polished';

import { decorators } from '../../modules/decorators';
import { Sections } from '../../modules/sections';
import { GoldLight } from '../../modules/themes/themes/GoldLight';
import { Icon } from '../Icon';
import { ListItem } from '../ListItem';

import { Accordion } from '.';

export default {
  component: Accordion,
  decorators,
  title: `${Sections.Elements}/Accordion`,
};

type Panels = React.ComponentPropsWithoutRef<typeof Accordion>['panels'];

const Child = styled.div`
  font-size: ${({ theme }) => em(theme.honeycomb.size.small)};
  padding: ${({ theme }) => em(theme.honeycomb.size.normal, theme.honeycomb.size.small)};
`;

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
      children: <Child data-testid={'child'}>Panel {index + 1}</Child>,
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

const StyledAccordion = styled(Accordion)`
  ${Accordion.PanelItem} {
    background: white;
    margin-bottom: ${({ theme }) => em(theme.honeycomb.size.normal)};
    border-radius: ${({ theme }) => em(theme.honeycomb.radius.normal)};
    overflow: hidden;
  }
`;

const Element = styled.div`
  background: #e0e0e0;
  color: black;
  padding: ${({ theme }) => em(theme.honeycomb.size.normal)};
  cursor: pointer;

  :hover,
  :active {
    background: #eeeeee;
  }
`;

export const CustomStyles = () => {
  const [activePanel, setActivePanel] = useState(-1);

  const changePanel = useCallback((index) => {
    setActivePanel((prev) => (prev === index ? -1 : index));
  }, []);

  const panels: Panels = new Array(5).fill(null).map((_, index) => {
    return {
      element: <Element>Accordion {index + 1}</Element>,
      children: <Child>Panel {index + 1}</Child>,
    };
  });

  return <StyledAccordion panels={panels} activePanel={activePanel} onChange={changePanel} />;
};
