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

:root {
  // Colors
  --page-bg-light: hsl(0, 0%, 100%);

  --component-bg-dark: hsl(212, 14%, 19%);
  --component-bg-light: hsl(0, 0%, 95%);

  --text-light: hsl(0, 0%, 100%);
  --text-dark: hsl(0, 0%, 7%);

  --color-red: hsl(0,100%, 71%);
  --color-blue: hsl(222, 100%, 61%);
  --color-gray-200: hsl(0, 0%, 90%);
  --color-gray-400: hsl(0, 0%, 85%);
  --color-gray-600: hsl(0, 0%, 80%);
  --color-gray-800: hsl(0, 0%, 60%);

  // Shadows
  --shadow-color: 0deg 0% 50%;

  --shadow-sm: 0.5px 1px 1px hsl(var(--shadow-color) / 0.7);
  --shadow-md: 
      1px 2px 2px hsl(var(--shadow-color) / 0.333),
      2px 4px 4px hsl(var(--shadow-color) / 0.333),
      3px 6px 6px hsl(var(--shadow-color) / 0.333)
      ;
  --shadow-lg:
      1px 2px 2px hsl(var(--shadow-color) / 0.2),
      2px 4px 4px hsl(var(--shadow-color) / 0.2),
      4px 8px 8px hsl(var(--shadow-color) / 0.2),
      8px 16px 16px hsl(var(--shadow-color) / 0.2),
      16px 32px 32px hsl(var(--shadow-color) / 0.2)
      ;
      
    // Font
    --font-poppins:  'Poppins';

*, *{
  box-sizing: border-box
}

html,
body {
  padding: 0;
  margin: 0;
  overflow: hidden;
  font-family: var(--font-poppins), Arial, Helvetica, sans-serif;
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
                href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;900&display=swap"
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
