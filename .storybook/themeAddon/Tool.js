import React, { useCallback } from 'react';

import { styled } from '@storybook/theming';
import { Icons, IconButton, WithTooltip, TooltipLinkList } from '@storybook/components';

import { useTheme } from './useTheme';

const IconButtonWithLabel = styled(IconButton)(() => ({
  display: 'inline-flex',
  alignItems: 'center',
}));

export const Tool = () => {
  const { themes, themeName, changeTheme } = useTheme();

  const tooltip = useCallback(
    ({ onHide }) => {
      return (
        <TooltipLinkList
          links={Object.keys(themes).map((it) => ({
            id: it,
            loading: false,
            title: it,
            disabled: themeName === themes[it],
            onClick: () => {
              changeTheme(it);
              onHide();
            },
          }))}
        />
      );
    },
    [themes, themeName, changeTheme],
  );

  if (!themes) return null;
  return (
    <WithTooltip placement="top" trigger="click" tooltip={tooltip} closeOnClick>
      <IconButtonWithLabel key="theme" title="Change theme">
        <Icons icon="paintbrush" />
      </IconButtonWithLabel>
    </WithTooltip>
  );
};
