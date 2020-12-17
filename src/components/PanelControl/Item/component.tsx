import React, { useContext } from 'react';

import { HtmlTag } from '../../../modules/html-tag';
import { useBuildTestId, Testable } from '../../../modules/test-ids';
import { Context } from '../context';

import { Styled } from './styled';

export type Props = Omit<React.AllHTMLAttributes<HTMLElement>, 'as'> &
  Testable & {
    htmlTag?: HtmlTag;
    selected?: boolean;
  };

export const Component = ({
  htmlTag = 'button',
  selected,
  'data-testid': testId,
  ...otherProps
}: Props) => {
  const { orientation, shape, variant, testId: parentTestId } = useContext(Context);
  const { buildTestId: buildTestIdParent } = useBuildTestId({ id: parentTestId });
  const { buildTestId } = useBuildTestId({
    id: buildTestIdParent(testId ? `item.${testId}` : undefined),
  });

  return (
    <Styled
      {...otherProps}
      as={htmlTag as any}
      selected={!!selected}
      $orientation={orientation}
      $shape={shape}
      variant={variant}
      data-testid={buildTestId()}
      data-testisselected={!!selected}
    />
  );
};

Component.displayName = 'PanelControl.Item';
