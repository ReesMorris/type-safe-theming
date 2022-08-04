import { ThemeTokens } from 'theming';
import { flattenObject } from '../../../utils/flatten-object';
import { themeConfig } from '../config';
import { ThemeToken } from '../types/props';
import { themeVar } from './theme-var';

const { cssTokenPrefix } = themeConfig;

export const buildThemeRule = (themeTokens: ThemeTokens) => {
  const flat = flattenObject(themeTokens);
  let css = '';

  Object.entries(flat).forEach(([key, value]) => {
    if (key !== 'theme') {
      css += `--${cssTokenPrefix}-${key}: ${themeVar(value as ThemeToken)};`;
    }
  });

  return css;
};
