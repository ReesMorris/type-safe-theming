import { createStaticTokens } from '../libs/theme/utils/create-static-tokens';
import { createTheme } from '../libs/theme/utils/create-theme';

export const darkStaticTokens = createStaticTokens({
  theme: 'dark',
  colors: {
    black: 'blue',
    white: 'orange',
    grey: {
      100: 'yellow',
      900: 'green',
    },
  },
  fonts: {
    sans: 'roboto',
  },
});

export const darkTheme = createTheme({
  theme: 'dark',
  body: {
    background: 'colors.grey.900',
    text: 'colors.grey.100',
    font: 'fonts.sans',
  },
  button: {
    background: 'colors.black',
    color: 'colors.white',
  },
});
