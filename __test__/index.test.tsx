import fs from 'fs';
import path from 'path';

import * as allExports from '../src';

const COMPONENTS_DIR = path.join(__dirname, '..', 'src', 'components');

it('exports all components', () => {
  const componentNames = fs.readdirSync(COMPONENTS_DIR).filter((it) => it !== 'internal');
  const allExportKeys = Object.keys(allExports);
  for (const componentName of componentNames) {
    if (allExportKeys.includes(componentName)) continue;
    fail(`Expected "${componentName}" to be exported`);
  }
});
