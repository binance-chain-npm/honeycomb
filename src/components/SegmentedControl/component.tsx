import React, { useMemo } from 'react';
import { animated, useTransition } from 'react-spring';

import { Styleless } from '../Styleless';

import { TargetWrapper } from './TargetWrapper';
import { ContentWrapper } from './ContentWrapper';
import { Target } from './Target';

export interface Item {
  id: string;
  target: React.ReactNode;
  content: React.ReactNode;
}

export type Props = Pick<React.ComponentProps<typeof Styleless>, 'tag' | 'className'> & {
  items: Item[];
  onItemSelected: (id: string) => void;
  selectedItemId: string;
};

export const Component = (props: Props) => {
  const { items, onItemSelected, selectedItemId } = props;
  const targets = useMemo(
    () =>
      items.map((it) => (
        <Target onClick={() => onItemSelected(it.id)} isSelected={selectedItemId === it.id}>
          {it.target}
        </Target>
      )),
    [items, onItemSelected, selectedItemId],
  );

  const selectedItem = useMemo(() => items.find((it) => it.id === selectedItemId), [
    items,
    selectedItemId,
  ]);

  const transitions = useTransition(selectedItem, (item) => item.id, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <Styleless {...props}>
      <TargetWrapper>{targets}</TargetWrapper>
      <ContentWrapper>
        {transitions.map(({ item, key, props }) => {
          return (
            <animated.div style={props} key={key}>
              {item.content}
            </animated.div>
          );
        })}
      </ContentWrapper>
    </Styleless>
  );
};

Component.displayName = 'SegmentedControl';
Component.defaultProps = { tag: 'div' } as Props;
