import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { SessionProvider } from 'next-auth/react';
import { AnimatePresence } from 'framer-motion';
import { AnimationContextProvider } from '../store/animation-ctx';
import Head from 'next/head';
import Layout from '../components/layout';
import { UserContextProvider } from '../store/user-ctx';

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
    cultured: 'hsl(20, 33%, 98%)',
    bittersweet: 'hsl(0, 100%, 71%)',
    brandPrimary: 'hsl(222, 100%, 61%)',
  },
  shadow: {
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
    dbXl: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  },
};

const GlobalStyle = createGlobalStyle`

*, *{
  box-sizing: border-box
}

html,
body {
  padding: 0;
  margin: 0;
  overflow: hidden;
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  background-color: hsl(20, 33%, 98%);
}

body {
  height: 100vh;
  min-height: 100vh;
  width: 100vw;
}


* {
  box-sizing: border-box;
}

`;

export default function App({
  Component,
  pageProps: { session, ...pageProps },
  router,
}) {
  return (
    <SessionProvider session={session}>
      <UserContextProvider>
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
                href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
                rel="stylesheet"
              />
            </Head>
            {/* <Layout> */}
            <AnimatePresence exitBeforeEnter>
              <Component {...pageProps} key={router.route} />
            </AnimatePresence>
            {/* </Layout> */}
          </ThemeProvider>
        </AnimationContextProvider>
      </UserContextProvider>
    </SessionProvider>
  );
}
