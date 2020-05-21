<p align="center"><img src="docs/logo.svg" alt="Honeycomb" /></p>

Honeycomb is a collection of reusable UI components based on [React](https://reactjs.org/) and
[styled-components](https://www.styled-components.com/).

## Getting started

Install this library as a dependency with `yarn add @binance-chain/honeycomb` and start using our
components.

Make sure you choose a theme with `<HoneycombThemeProvider />` in your app before using any
Honeycomb components.

```tsx
import React from 'react';
import { HoneycombThemeProvider, Button } from '@binance-chain/honeycomb';

export const MyApp = () => {
  return (
    <HoneycombThemeProvider family="gold" variant="light">
      <h1>My cool app</h1>
      <Button variant="primary">Click here!</Button>
    </HoneycombThemeProvider>
  );
};
```

You may use the optional `localTheme` prop to merge your own theme with the Honeycomb one. Do not
try to add or overwrite stuff inside the `{ honeycomb }` property, though.

### TypeScript integration

To get a perfect integration with TypeScript when writing your styles, you can create a declaration
file as shown below.

```tsx
// DefaultTheme.d.ts
import 'styled-components';
import { HoneycombThemeType } from '@binance-chain/honeycomb';

import { YourOwnTheme } from './your-own-theme';

declare module 'styled-components' {
  type ThemeType = HoneycombThemeType & typeof YourOwnTheme;
  export interface DefaultTheme extends ThemeType {}
}
```

### Customizing components

We export the inner pieces that our components are composed of as static properties. You can use
those to easily customize internal parts of those components.

For example, in the code below we use `TextInput.Label` and `TextInput.Input` to overwrite
`TextInput`'s internal styles.

```tsx
import React from 'react';
import styled from 'styled-components';
import { TextInput } from '@binance-chain/honeycomb';

const CustomTextInput = styled(TextInput)`
  ${TextInput.Label} {
    color: #f8bbd0;
  }

  ${TextInput.Input} {
    background: #e8f5e9;
    color: #64b5f6;

    ::placeholder {
      color: #7e57c2;
    }
  }
`;

export const MyComponent = () => (
  <CustomTextInput placeholder="Some placeholder…" label="A label" />
);
```

## Testing

You may use the prop `data-testid` for testing. The components in this library will automatically
assign `data-testid`s to their inner components using the value you passed as a prefix.

For example, `<Checkbox data-testid="MyCheckbox" label="A value" />` would render something like the
following:

```html
<input data-testid="MyCheckbox.native-input" id="…" type="checkbox" class="…" value="false" />
<label data-testid="MyCheckbox.label" for="…" class="…">
  <span data-testid="MyCheckbox.label-content" class="…">A value</span>
</label>
```

## Contributing

1. Clone this repo.
2. `yarn`
3. `yarn dev`
