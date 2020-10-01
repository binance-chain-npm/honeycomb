import React from 'react';

import { Testable, useBuildTestId } from '../../modules/test-ids';

import { Panel, PanelItem } from './PanelItem';

export type Props = Omit<React.AllHTMLAttributes<HTMLElement>, 'children'> &
  Testable & {
    panels: Panel[];
    activePanel: number;
    onChange: (index: number) => void;
  };

export const Component = ({
  panels,
  activePanel,
  onChange,
  'data-testid': testId,
  ...otherProps
}: Props) => {
  const buildTestId = useBuildTestId(testId);

  return (
    <div {...otherProps} data-testid={buildTestId()}>
      {panels.map((it, index) => (
        <PanelItem
          key={index}
          activePanel={activePanel}
          index={index}
          onChange={() => onChange(index)}
          data-testid={buildTestId(`${index}`)}
          {...it}
        />
      ))}
    </div>
  );
};

Component.displayName = 'Accordion';
