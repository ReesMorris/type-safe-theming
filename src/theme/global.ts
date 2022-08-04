import { themeVar } from '../libs/theme/utils/theme-var';
import { css } from '@emotion/react';

export const globalCSS = css`
  body {
    background: ${themeVar('body.background')};
    font-family: ${themeVar('body.font')};
    color: ${themeVar('body.text')};
  }
`;
