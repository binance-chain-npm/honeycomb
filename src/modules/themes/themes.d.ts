import 'styled-components';
import { modularScale } from 'polished';

declare module 'styled-components' {
  export interface DefaultTheme {
    honeycomb: {
      color: {
        bg: string;
        primary: string;
        secondary: string;
        readable: (bg: string) => string;

        placeholder: string;

        gradient: {
          primary: string;
        };
      };

      size: {
        touchable: number;
        touchableSwitch: number;
        scale: (
          steps: Parameters<typeof modularScale>[0],
          base?: Parameters<typeof modularScale>[1],
        ) => ReturnType<typeof modularScale>;
      };

      radius: {
        normal: number;
      };

      fontSize: {
        tiny: number;
        small: number;
        normal: number;
      };

      duration: {
        normal: string;
      };
    };
  }
}
