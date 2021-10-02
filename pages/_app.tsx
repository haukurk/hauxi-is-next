import { AppProps } from "next/dist/shared/lib/router/router";
import { createGlobalStyle, ThemeProvider } from "styled-components";

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
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
