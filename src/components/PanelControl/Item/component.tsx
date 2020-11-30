import React, { useContext } from 'react';

import { HtmlTag } from '../../../modules/html-tag';
import { useBuildTestId, Testable } from '../../../modules/test-ids';
import { Context } from '../context';

import { Size, Styled } from './styled';

export type Props = Omit<React.AllHTMLAttributes<HTMLElement>, 'as'> &
  Testable & {
    htmlTag?: HtmlTag;
    selected?: boolean;
    padding?: Size;
  };

export const Component = ({
  htmlTag = 'button',
  selected,
  padding = 'normal',
  'data-testid': testId,
  ...otherProps
}: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });
  const { orientation } = useContext(Context);

  return (
    <Styled
      {...otherProps}
      as={htmlTag as any}
      orientation={orientation}
      padding={padding}
      selected={!!selected}
      data-testid={buildTestId()}
    />
  );
};

Component.displayName = 'PanelControl.Item';
