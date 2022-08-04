declare module 'theming' {
  export type TokenValue = string | number;

  export interface StaticTokensInternal {
    theme?: string;
  }

  export interface StaticTokens extends StaticTokensInternal {}

  export interface ThemeTokensInternal {
    theme: string;
  }

  export interface ThemeTokens extends ThemeTokensInternal {}
}
