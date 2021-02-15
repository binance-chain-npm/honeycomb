import React, { useContext, useMemo } from 'react';

import { Testable, useBuildTestId } from '../../../modules/test-ids';
import { Icon } from '../../Icon';
import { DefaultTarget } from '../../internal/DefaultTarget';
import { SIZES, useWindowSize } from '../../internal/useWindowSize';
import { ListItem } from '../../ListItem';
import { Context } from '../context';

import { StyledListItem } from './styled';

export type Props = React.ComponentPropsWithoutRef<typeof ListItem> & Testable;

export const Component = ({ children, onClick, 'data-testid': testId, ...otherProps }: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });
  const { variant = 'responsive', isShowing } = useContext(Context);
  const { width } = useWindowSize();

  const right = useMemo(() => {
    const currentVariant = ((): 'dropdown' | 'modal' => {
      if (variant === 'responsive') return width < SIZES.md ? 'modal' : 'dropdown';
      return variant;
    })();

    if (currentVariant === 'dropdown') {
      return isShowing ? <Icon.CaretUp /> : <Icon.CaretDown />;
    }

    return <Icon.CaretRight />;
  }, [isShowing, variant, width]);

  return (
    <DefaultTarget onClick={onClick} data-testid={buildTestId()}>
      <StyledListItem right={right} showBorder={false} interactive={false} {...otherProps}>
        {children}
      </StyledListItem>
    </DefaultTarget>
  );
};

Component.displayName = 'Select.DefaultTarget';
