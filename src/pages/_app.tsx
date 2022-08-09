import type { AppProps } from "next/app";
import Head from "next/head";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";

import { RealViewportProvider } from "next-real-viewport";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RealViewportProvider>
      <ChakraProvider theme={theme}>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </ChakraProvider>
    </RealViewportProvider>
  );
}

export default MyApp;
