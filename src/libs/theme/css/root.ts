import { StaticTokens, ThemeTokens } from 'theming';
import { buildSelector } from '../utils/build-selector';
import { buildStaticRule } from '../utils/build-static-rule';
import { buildThemeRule } from '../utils/build-theme-rule';

export const rootCSS = (
  defaultTheme: string,
  themes: ThemeTokens[],
  staticTokens: StaticTokens[]
) => {
  let style = '';

  // Static tokens
  staticTokens.forEach((token) => {
    style += buildSelector(
      buildStaticRule(token),
      token.theme,
      token.theme === defaultTheme
    );
  });

  // Theme tokens
  themes.forEach((theme) => {
    style += buildSelector(
      buildThemeRule(theme),
      theme.theme,
      theme.theme === defaultTheme
    );
  });

  return style;
};
