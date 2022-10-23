import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import {theme} from "design/theme";



function MyApp({ Component, pageProps }: AppProps) {
  console.log("hello");

  return (
    <ChakraProvider theme={theme} resetCSS>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
