import router from "next/dist/client/router";
import { AppProps } from "next/dist/shared/lib/router/router";
import { useEffect } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import * as gtag from "../lib/ga";

const GlobalStyle = createGlobalStyle`
  html, body, #__next {
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    font-size: 16px;
    color: #8e43e7;
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.events]);

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
