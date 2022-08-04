import { themeConfig } from '../config';
import { ThemeToken } from '../types/props';

const { cssTokenPrefix } = themeConfig;

export const themeVar = (path: ThemeToken): string => {
  let newVal = path.toString() as string;
  newVal = newVal.replace(/\./g, '-');
  return `var(--${cssTokenPrefix}-${newVal})`;
};
