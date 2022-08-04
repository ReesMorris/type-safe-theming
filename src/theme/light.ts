import { createStaticTokens } from '../libs/theme/utils/create-static-tokens';
import { createTheme } from '../libs/theme/utils/create-theme';

export const lightStaticTokens = createStaticTokens({
  theme: 'light',
  colors: {
    black: '#000',
    white: '#fff',
    grey: {
      100: '#d0d0d7',
      900: '#17171c',
    },
  },
  fonts: {
    sans: 'sans-serif',
  },
});

export const lightTheme = createTheme({
  theme: 'light',
  body: {
    background: 'colors.grey.100',
    text: 'colors.grey.900',
    font: 'fonts.sans',
  },
  button: {
    background: 'colors.white',
    color: 'colors.black',
  },
});
