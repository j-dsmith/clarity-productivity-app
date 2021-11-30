import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { AnimationContextProvider } from '../store/animation-ctx';
import Head from 'next/head';

const GlobalStyle = createGlobalStyle`

html,
body {
  padding: 0;
  margin: 0;
  overflow: hidden;
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  background-color: hsl(20, 33%, 98%);
}

* {
  box-sizing: border-box;
}

`;

export const theme = {
  colors: {
    gray100: 'hsl(214, 14%, 77%)',
    gray200: 'hsl(211, 13%, 59%)',
    gray300: 'hsl(212, 13%, 48%)',
    gray400: 'hsl(210, 13%, 42%)',
    gray500: 'hsl(213, 13%, 36%)',
    gray600: 'hsl(213, 13%, 31%)',
    gray700: 'hsl(210, 13%, 25%)',
    gray800: 'hsl(212, 14%, 19%)',
    gray900: 'hsl(240, 14%, 1%)',
    turquoise: 'hsl(176, 56%, 55%)',
    cultured: 'hsl(20, 33%, 98%)',
    bittersweet: 'hsl(0, 100%, 71%)',
    naplesyellow: 'hsl(50, 100%, 71%)',
    bluecrayola: 'hsl(222, 100%, 61%)',
    lavender: 'hsl(267, 72%, 82%)',
  },
  shadow: {
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    dbXl: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  },
};

export default function App({ Component, pageProps }) {
  return (
    <AnimationContextProvider>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Head>
          <title>_wrkingTitle</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </AnimationContextProvider>
  );
}
