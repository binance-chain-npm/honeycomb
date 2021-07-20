import React, { useContext, useMemo } from 'react';

import { Testable, useBuildTestId } from '../../../modules/test-ids';
import { Icon } from '../../Icon';
import { DefaultTarget, Shape, Size } from '../../internal/DefaultTarget';
import { ListItem } from '../../ListItem';
import { Context } from '../context';
import { useCurrentVariant } from '../useCurrentVariant';

import { StyledListItem } from './styled';

export type Props = Omit<React.AllHTMLAttributes<HTMLElement>, 'as' | 'size'> &
  Pick<React.ComponentPropsWithoutRef<typeof ListItem>, 'children' | 'left' | 'onClick'> &
  Testable & {
    shape?: Shape;
    size?: Size;
  };

export const Component = ({
  children,
  className,
  onClick,
  shape = 'fill',
  size = 'huge',
  'data-testid': testId,
  ...otherProps
}: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });
  const { variant = 'responsive', isShowing } = useContext(Context);
  const currentVariant = useCurrentVariant({ variant });

  const right = useMemo(() => {
    if (currentVariant === 'dropdown') {
      return isShowing ? (
        <Icon.CaretUp data-testid={buildTestId('caret-up')} />
      ) : (
        <Icon.CaretDown data-testid={buildTestId('caret-down')} />
      );
    }

    return <Icon.CaretRight data-testid={buildTestId('caret-right')} />;
  }, [isShowing, currentVariant, buildTestId]);

  return (
    <DefaultTarget shape={shape} size={size} className={className} data-testid={buildTestId()}>
      <StyledListItem
        htmlTag="div"
        right={right}
        showBorder={false}
        interactive={false}
        onClick={onClick}
        {...otherProps}
      >
        {children}
      </StyledListItem>
    </DefaultTarget>
  );
};

Component.displayName = 'Select.DefaultTarget';
