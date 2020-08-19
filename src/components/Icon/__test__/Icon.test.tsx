import path from 'path';

import { Icon, icons } from '..';

it('exports all icons as URLs and components', () => {
  const allComponentIconNames = Object.keys(Icon);
  const allUrlIconNames = Object.keys(icons);

  for (const iconName of allUrlIconNames) {
    if (allComponentIconNames.includes(iconName)) continue;
    fail(`Icon "${iconName}" is not exported in "components.tsx"`);
  }

  for (const iconName of allComponentIconNames) {
    if (allUrlIconNames.includes(iconName)) continue;
    fail(`Icon "${iconName}" is not exported in "urls.tsx"`);
  }
});
