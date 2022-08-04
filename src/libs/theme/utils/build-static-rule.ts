import { StaticTokens } from 'theming';
import { flattenObject } from '../../../utils/flatten-object';
import { themeConfig } from '../config';

const { cssTokenPrefix } = themeConfig;

export const buildStaticRule = (staticTokens: StaticTokens) => {
  const flat = flattenObject(staticTokens);
  let css = '';

  Object.entries(flat).forEach(([key, value]) => {
    if (key !== 'theme') {
      css += `--${cssTokenPrefix}-${key}: ${value};`;
    }
  });

  return css;
};
