import { StaticToken } from '../libs/theme/types/props';

declare module 'theming' {
  export type ThemeName = 'light' | 'dark';

  export interface StaticTokens {
    theme?: ThemeName;

    // .. this contains your app's theme palette declarations ..
    // .. this is just example code, put whatever here! ..
    colors: {
      black: ThemeValue;
      white: ThemeValue;
      grey: {
        100: ThemeValue;
        900: ThemeValue;
      };
    };
    fonts: {
      sans: ThemeValue;
    };
  }

  export interface ThemeTokens {
    theme: ThemeName;

    // .. this is what will style your apps components ..
    // .. again, just example code here, put whatever in it! ..
    body: {
      background: StaticToken;
      text: StaticToken;
      font: StaticToken;
    };
    button: {
      background: StaticToken;
      color: StaticToken;
    };
  }
}
