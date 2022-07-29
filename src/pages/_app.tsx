import type { AppProps } from 'next/app'
import { useState } from 'react';
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../styles/global'
import { lightTheme, darkTheme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  return (
    <>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
