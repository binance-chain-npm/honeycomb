<p align="center"><img src="docs/logo.svg" alt="Honeycomb" /></p>

Honeycomb is a collection of reusable UI components based on [React](https://reactjs.org/) and
[styled-components](https://www.styled-components.com/).

## Getting started

Install this library as a dependency with `yarn add @bnb-chain/honeycomb` and start using our
components.

Make sure you choose a theme with `<HoneycombThemeProvider />` in your app before using any
Honeycomb components.

```tsx
import React from 'react';
import { HoneycombThemeProvider, Button } from '@bnb-chain/honeycomb';

export const MyApp = () => {
  return (
    <HoneycombThemeProvider family="gold" defaultVariant="light">
      <h1>My cool app</h1>
      <Button variant="primary">Click here!</Button>
    </HoneycombThemeProvider>
  );
};
```

You can use the props `defaultVariant` or `variant`. If you use `variant`, you will force Honeycomb
to use exactly the choice you want. If use `defaultVariant`, Honeycomb will always try to first
guess what the user's light/dark settings are.

You may use the optional `localTheme` prop to merge your own theme with the Honeycomb one. Do not
try to add or overwrite stuff inside the `{ honeycomb }` property, though.

### TypeScript integration

To get a perfect integration with TypeScript when writing your styles, you can create a declaration
file as shown below.

```tsx
// DefaultTheme.d.ts
import 'styled-components';
import { HoneycombThemeType } from '@bnb-chain/honeycomb';

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
import { TextInput } from '@bnb-chain/honeycomb';

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

### Adding new icons

Monochromatic SVG files can be added under [src/components/Icon/assets](src/components/Icon/assets),
but there are a few things to make sure of.

- The SVG file is monochromatic.
- You have removed all `fill=""` attributes from the SVG code.
- The SVG viewport is a square (e.g. `viewBox="0 0 16 16"`) and the icon is centered both
  horizontally and vertically in it.
- The SVG file is named with pascal casing (e.g. `CaretDown.svg`).
- The SVG file is named with appropriate suffixes, in the correct order
  (e.g. `Tick.svg`, `TickCircle.svg`, `TickCircleSolid.svg`).
   1. `Circle` if the icon is circled.
   2. `Solid` if the icon has a solid fill.
   3. `Color` if the icon cannot change its colour.
- The SVG file does not contain any font loading, styles or non-vector images.

Once the SVG file has been added, it must be loaded and exported in **both**
[src/components/Icon/components.tsx](src/components/Icon/components.tsx) and
[src/components/Icon/urls.tsx](src/components/Icon/urls.tsx) with exactly the **same name** as the
SVG file.
