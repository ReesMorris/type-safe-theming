import type { AppProps } from 'next/app';
import { resetCSS } from '../libs/theme/css/reset';
import { ThemeProvider } from '../libs/theme/provider/provider';
import { darkStaticTokens, darkTheme } from '../theme/dark';
import { globalCSS } from '../theme/global';
import { lightTheme, lightStaticTokens } from '../theme/light';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider
      defaultTheme='light'
      themes={[lightTheme, darkTheme]}
      staticTokens={[lightStaticTokens, darkStaticTokens]}
      globalCSS={[resetCSS, globalCSS]}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
